import { createClient } from "https://esm.sh/@supabase/supabase-js@2.86.0";

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

const DEPOSIT_RATE = 0.5;

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
    const estimateId = typeof body?.estimateId === "string" ? body.estimateId.trim() : "";
    const option = body?.option === "deposit" ? "deposit" : body?.option === "full" ? "full" : "";
    const callbackUrl =
      typeof body?.callbackUrl === "string" && /^https?:\/\//.test(body.callbackUrl)
        ? body.callbackUrl
        : "";

    if (!estimateId || !option || !callbackUrl) {
      return json({ error: "estimateId, option ('deposit' or 'full') and callbackUrl are required." }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: estimate, error: dbError } = await supabase
      .from("estimates")
      .select("id, client_name, client_email, package_name, grand_total, payment_status")
      .eq("id", estimateId)
      .maybeSingle();

    if (dbError) {
      console.error("Estimate lookup failed:", dbError);
      return json({ error: "Could not load that estimate." }, 500);
    }
    if (!estimate) {
      return json({ error: "Estimate not found." }, 404);
    }
    if (estimate.payment_status === "paid") {
      return json({ error: "This estimate has already been paid in full." }, 409);
    }
    if (!estimate.client_email) {
      return json({ error: "This estimate has no email address on it." }, 400);
    }

    const total = Number(estimate.grand_total);
    if (!Number.isFinite(total) || total <= 0) {
      return json({ error: "This estimate has no payable amount." }, 400);
    }

    // Amount is always recomputed server-side from the stored estimate.
    const amount = option === "deposit" ? Math.round(total * DEPOSIT_RATE) : Math.round(total);
    const reference = `GTP-${estimate.id.slice(0, 8)}-${Date.now()}`;

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: estimate.client_email,
        amount: amount * 100, // Paystack expects the smallest currency unit (pesewas)
        currency: "GHS",
        reference,
        callback_url: callbackUrl,
        metadata: {
          estimate_id: estimate.id,
          client_name: estimate.client_name,
          package_name: estimate.package_name,
          payment_option: option,
          estimate_total: total,
        },
      }),
    });

    const payload = await res.json().catch(() => null);
    if (!res.ok || !payload?.status) {
      console.error(`Paystack initialize failed [${res.status}]:`, JSON.stringify(payload));
      return json(
        { error: payload?.message ?? "Paystack could not start this payment.", status: res.status },
        res.status === 200 ? 502 : res.status,
      );
    }

    const { error: updateError } = await supabase
      .from("estimates")
      .update({
        payment_status: "pending",
        payment_option: option,
        payment_reference: reference,
        amount_due: amount,
      })
      .eq("id", estimate.id);

    if (updateError) {
      console.error("Estimate payment update failed:", updateError);
    }

    return json({
      authorizationUrl: payload.data.authorization_url,
      reference,
      amount,
      option,
      total,
    });
  } catch (error) {
    console.error("paystack-initialize error:", error);
    return json({ error: (error as Error).message }, 500);
  }
});
