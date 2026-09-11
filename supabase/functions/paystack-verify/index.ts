import { createClient } from "https://esm.sh/@supabase/supabase-js@2.86.0";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });

const formatGHS = (n: number) => `GH₵${n.toLocaleString()}`;

const receiptHTML = (opts: {
  clientName: string;
  packageName: string;
  amount: number;
  total: number;
  option: string;
  reference: string;
  channel: string;
  dateString: string;
  forClient: boolean;
}) => {
  const balance = Math.max(opts.total - opts.amount, 0);
  const intro = opts.forClient
    ? `<p style="font-size:15px;color:#333;">Hi ${opts.clientName || "there"},</p>
       <p style="font-size:14px;color:#555;">We have received your payment. Thank you! This email is your official receipt.</p>`
    : `<p style="font-size:15px;color:#333;">Payment received from <strong>${opts.clientName || "a client"}</strong>.</p>`;

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:9px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px;">${label}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #eee;text-align:right;font-size:13px;font-weight:600;">${value}</td>
    </tr>`;

  return `
  <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">
    <div style="background:linear-gradient(135deg,#16a34a,#4F46E5);padding:28px 24px;border-radius:12px 12px 0 0;">
      <h1 style="margin:0;color:#fff;font-size:22px;">Gotechpluz</h1>
      <p style="margin:4px 0 0;color:rgba(255,255,255,0.9);font-size:13px;">Payment Receipt</p>
    </div>
    <div style="padding:24px;">
      ${intro}
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        ${row("Package", opts.packageName)}
        ${row("Payment type", opts.option === "deposit" ? "50% deposit" : "Full payment")}
        ${row("Amount paid", formatGHS(opts.amount))}
        ${row("Estimate total", formatGHS(opts.total))}
        ${row("Outstanding balance", formatGHS(balance))}
        ${row("Paid via", opts.channel)}
        ${row("Reference", opts.reference)}
        ${row("Date", opts.dateString)}
      </table>
      <p style="font-size:13px;color:#888;">
        ${
          balance > 0
            ? `The remaining balance of <strong>${formatGHS(balance)}</strong> is due on project completion.`
            : "Your project is fully paid. Our team will begin work right away."
        }
        <br/>Questions? Reach us on WhatsApp at <strong>024 723 3996</strong>.
      </p>
    </div>
    <div style="background:#f8f9fa;padding:16px 24px;text-align:center;border-radius:0 0 12px 12px;">
      <p style="margin:0;font-size:11px;color:#aaa;">Gotechpluz Digital Solutions &bull; gotechpluz.com &bull; 024 723 3996</p>
    </div>
  </div>`;
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const secretKey = Deno.env.get("PAYSTACK_SECRET_KEY");
    if (!secretKey) {
      return json({ error: "Payments are not configured yet." }, 500);
    }

    const body = await req.json().catch(() => null);
    const reference = typeof body?.reference === "string" ? body.reference.trim() : "";
    if (!reference || reference.length > 120) {
      return json({ error: "A valid payment reference is required." }, 400);
    }

    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      { headers: { Authorization: `Bearer ${secretKey}` } },
    );
    const payload = await res.json().catch(() => null);

    if (!res.ok || !payload?.status) {
      console.error(`Paystack verify failed [${res.status}]:`, JSON.stringify(payload));
      return json(
        { error: payload?.message ?? "Could not verify this payment.", status: res.status },
        res.status === 200 ? 502 : res.status,
      );
    }

    const tx = payload.data;
    const paid = tx.status === "success";
    const amount = Number(tx.amount ?? 0) / 100;
    const estimateId: string | undefined = tx.metadata?.estimate_id;
    const option: string = tx.metadata?.payment_option === "deposit" ? "deposit" : "full";
    const channel: string = tx.channel ?? "Paystack";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: estimate } = await supabase
      .from("estimates")
      .select("id, client_name, client_email, package_name, grand_total, payment_status")
      .eq("payment_reference", reference)
      .maybeSingle();

    const alreadyRecorded =
      estimate?.payment_status === "paid" || estimate?.payment_status === "part_paid";

    if (paid && estimate && !alreadyRecorded) {
      const total = Number(estimate.grand_total ?? 0);
      const { error: updateError } = await supabase
        .from("estimates")
        .update({
          payment_status: option === "deposit" && amount < total ? "part_paid" : "paid",
          amount_paid: amount,
          payment_channel: channel,
          paid_at: new Date().toISOString(),
          status: "confirmed",
        })
        .eq("id", estimate.id);
      if (updateError) console.error("Estimate payment write failed:", updateError);

      const resendKey = Deno.env.get("RESEND_API_KEY");
      if (resendKey) {
        const resend = new Resend(resendKey);
        const dateString = new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        const shared = {
          clientName: estimate.client_name ?? "",
          packageName: estimate.package_name ?? "Project",
          amount,
          total,
          option,
          reference,
          channel,
          dateString,
        };
        try {
          if (estimate.client_email) {
            await resend.emails.send({
              from: "Gotechpluz <onboarding@resend.dev>",
              to: [estimate.client_email],
              subject: `Payment received — ${formatGHS(amount)} (${shared.packageName})`,
              html: receiptHTML({ ...shared, forClient: true }),
            });
          }
          await resend.emails.send({
            from: "Gotechpluz <onboarding@resend.dev>",
            to: ["info@gotechpluz.com"],
            subject: `💰 Payment received — ${formatGHS(amount)} — ${shared.clientName || "Client"}`,
            html: receiptHTML({ ...shared, forClient: false }),
          });
        } catch (mailError) {
          console.error("Receipt email failed:", mailError);
        }
      }
    }

    return json({
      paid,
      reference,
      amount,
      option,
      channel,
      estimateId: estimate?.id ?? estimateId ?? null,
      total: Number(estimate?.grand_total ?? 0),
      gatewayMessage: tx.gateway_response ?? null,
    });
  } catch (error) {
    console.error("paystack-verify error:", error);
    return json({ error: (error as Error).message }, 500);
  }
});
