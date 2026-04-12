import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LineItem {
  label: string;
  detail?: string;
  amount: number;
}

interface EstimateRequest {
  clientName: string;
  clientEmail: string;
  packageName: string;
  lineItems: LineItem[];
  customFeatures?: string;
  grandTotal: number;
  dateString: string;
}

const buildHTML = (data: EstimateRequest, forClient: boolean) => {
  const itemRows = data.lineItems
    .map(
      (item) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #eee;">
          <strong>${item.label}</strong>
          ${item.detail ? `<br/><span style="color:#888;font-size:12px;">${item.detail}</span>` : ""}
        </td>
        <td style="padding:10px 12px;border-bottom:1px solid #eee;text-align:right;white-space:nowrap;font-weight:600;">
          GH₵${item.amount.toLocaleString()}
        </td>
      </tr>`
    )
    .join("");

  const customBlock = data.customFeatures
    ? `<div style="margin:16px 0;padding:12px 16px;background:#f8f9fa;border-radius:8px;border-left:4px solid #4F46E5;">
         <p style="margin:0 0 4px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Custom Requirements (On Request)</p>
         <p style="margin:0;font-size:14px;color:#333;">${data.customFeatures.replace(/\n/g, "<br/>")}</p>
       </div>`
    : "";

  const greeting = forClient
    ? `<p style="font-size:15px;color:#333;">Hi ${data.clientName || "there"},</p>
       <p style="font-size:14px;color:#555;">Thank you for using the Gotechpluz Price Estimator. Below is a copy of your project estimate for your records.</p>`
    : `<p style="font-size:15px;color:#333;">New price estimate generated:</p>
       <p style="font-size:14px;color:#555;"><strong>Client:</strong> ${data.clientName || "Not provided"}<br/>
       <strong>Email:</strong> ${data.clientEmail || "Not provided"}</p>`;

  const footer = forClient
    ? `<p style="font-size:13px;color:#888;margin-top:24px;">
        This is an estimate only. Final pricing may vary based on specific requirements.<br/>
        Our team will be in touch shortly to discuss your project. You can also reach us directly on WhatsApp at <strong>024 723 3996</strong>.
      </p>`
    : `<p style="font-size:13px;color:#888;margin-top:24px;">Follow up with this client promptly.</p>`;

  return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
      <div style="background:linear-gradient(135deg,#4F46E5,#7C3AED);padding:28px 24px;border-radius:12px 12px 0 0;">
        <h1 style="margin:0;color:#fff;font-size:22px;">Gotechpluz</h1>
        <p style="margin:4px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">Project Price Estimate</p>
      </div>
      <div style="padding:24px;">
        ${greeting}
        <div style="display:flex;justify-content:space-between;margin:16px 0 8px;">
          <span style="font-size:12px;color:#888;">Date: ${data.dateString}</span>
        </div>
        <table style="width:100%;border-collapse:collapse;margin:12px 0;">
          <thead>
            <tr style="background:#f4f4f5;">
              <th style="padding:10px 12px;text-align:left;font-size:12px;color:#888;text-transform:uppercase;">Item</th>
              <th style="padding:10px 12px;text-align:right;font-size:12px;color:#888;text-transform:uppercase;">Amount</th>
            </tr>
          </thead>
          <tbody>${itemRows}</tbody>
          <tfoot>
            <tr style="background:#4F46E5;">
              <td style="padding:14px 12px;color:#fff;font-weight:700;font-size:15px;border-radius:0 0 0 8px;">Estimated Total</td>
              <td style="padding:14px 12px;color:#fff;font-weight:700;font-size:18px;text-align:right;border-radius:0 0 8px 0;">GH₵${data.grandTotal.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
        ${customBlock}
        ${footer}
      </div>
      <div style="background:#f8f9fa;padding:16px 24px;text-align:center;border-radius:0 0 12px 12px;">
        <p style="margin:0;font-size:11px;color:#aaa;">
          Gotechpluz Digital Solutions &bull; gotechpluz.com &bull; 024 723 3996
        </p>
      </div>
    </div>`;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: EstimateRequest = await req.json();
    console.log("Received estimate request:", data.clientName, data.clientEmail);

    const results: { clientEmail?: boolean; teamEmail?: boolean } = {};

    // Send to Gotechpluz team
    const teamRes = await resend.emails.send({
      from: "Gotechpluz <onboarding@resend.dev>",
      to: ["info@gotechpluz.com"],
      subject: `New Price Estimate — ${data.packageName} — ${data.clientName || "Anonymous"}`,
      html: buildHTML(data, false),
    });
    console.log("Team email sent:", teamRes);
    results.teamEmail = true;

    // Send copy to client if email provided
    if (data.clientEmail) {
      const clientRes = await resend.emails.send({
        from: "Gotechpluz <onboarding@resend.dev>",
        to: [data.clientEmail],
        subject: `Your Gotechpluz Price Estimate — ${data.packageName}`,
        html: buildHTML(data, true),
      });
      console.log("Client email sent:", clientRes);
      results.clientEmail = true;
    }

    return new Response(JSON.stringify({ success: true, ...results }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-estimate:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
