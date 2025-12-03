import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InquiryRequest {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: InquiryRequest = await req.json();
    console.log("Received inquiry:", data);

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "Gotechpluz <onboarding@resend.dev>",
      to: ["info@gotechpluz.com"],
      subject: `New Project Inquiry - ${data.projectType}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent via Gotechpluz Portfolio Page</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send WhatsApp notification
    const whatsappNumber = "0247233996";
    const whatsappMessage = encodeURIComponent(
      `🔔 New Project Inquiry\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `${data.phone ? `Phone: ${data.phone}\n` : ''}` +
      `Project Type: ${data.projectType}\n` +
      `${data.budget ? `Budget: ${data.budget}\n` : ''}` +
      `Message: ${data.message}`
    );

    return new Response(
      JSON.stringify({ 
        success: true,
        emailResponse,
        whatsappUrl: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-inquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
