import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const CANONICAL_HOST = "https://www.gotechpluz.com";
const APEX_HOST = "https://gotechpluz.com";
const ALERT_TO = ["info@gotechpluz.com"];

interface CheckResult {
  name: string;
  ok: boolean;
  detail: string;
}

const fetchText = async (url: string) => {
  const res = await fetch(url, { redirect: "follow", headers: { "cache-control": "no-cache" } });
  return { status: res.status, body: await res.text(), finalUrl: res.url };
};

const runChecks = async (): Promise<CheckResult[]> => {
  const checks: CheckResult[] = [];

  // 1. robots.txt must advertise the www sitemap and must not point at the apex host.
  try {
    const robots = await fetchText(`${CANONICAL_HOST}/robots.txt`);
    const sitemapLines = robots.body
      .split("\n")
      .filter((line) => line.trim().toLowerCase().startsWith("sitemap:"));
    const hasCanonical = sitemapLines.some((line) => line.includes(`${CANONICAL_HOST}/sitemap.xml`));
    const hasApex = sitemapLines.some((line) => /https?:\/\/gotechpluz\.com/.test(line));
    checks.push({
      name: "robots.txt sitemap host",
      ok: robots.status === 200 && hasCanonical && !hasApex,
      detail:
        robots.status !== 200
          ? `robots.txt returned HTTP ${robots.status}`
          : sitemapLines.join(" | ") || "no Sitemap: directive found",
    });
  } catch (e) {
    checks.push({ name: "robots.txt sitemap host", ok: false, detail: `fetch failed: ${e}` });
  }

  // 2. Every sitemap URL must use the www host.
  try {
    const sitemap = await fetchText(`${CANONICAL_HOST}/sitemap.xml`);
    const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const apexLocs = locs.filter((loc) => !loc.startsWith(CANONICAL_HOST));
    checks.push({
      name: "sitemap URLs",
      ok: sitemap.status === 200 && locs.length > 0 && apexLocs.length === 0,
      detail:
        sitemap.status !== 200
          ? `sitemap returned HTTP ${sitemap.status}`
          : `${locs.length} URLs, ${apexLocs.length} off-host${
              apexLocs.length ? `: ${apexLocs.slice(0, 5).join(", ")}` : ""
            }`,
    });
  } catch (e) {
    checks.push({ name: "sitemap URLs", ok: false, detail: `fetch failed: ${e}` });
  }

  // 3. Homepage canonical tag must be the www host.
  try {
    const home = await fetchText(`${CANONICAL_HOST}/`);
    const match = home.body.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
    const href = match?.[0].match(/href=["']([^"']+)["']/i)?.[1] ?? "";
    checks.push({
      name: "homepage canonical",
      ok: href.startsWith(CANONICAL_HOST),
      detail: href ? `canonical = ${href}` : "no canonical tag in served HTML",
    });
  } catch (e) {
    checks.push({ name: "homepage canonical", ok: false, detail: `fetch failed: ${e}` });
  }

  // 4. Apex host must permanently redirect to www.
  try {
    const res = await fetch(`${APEX_HOST}/`, { redirect: "manual" });
    const location = res.headers.get("location") ?? "";
    checks.push({
      name: "apex redirect",
      ok: [301, 308].includes(res.status) && location.startsWith(CANONICAL_HOST),
      detail: `HTTP ${res.status}${location ? ` -> ${location}` : " (no redirect)"}`,
    });
  } catch (e) {
    checks.push({ name: "apex redirect", ok: false, detail: `fetch failed: ${e}` });
  }

  return checks;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const checks = await runChecks();
    const failures = checks.filter((c) => !c.ok);
    const status = failures.length === 0 ? "ok" : "drift";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    await supabase.from("seo_domain_checks").insert({
      status,
      checks,
      failure_count: failures.length,
    });

    if (failures.length > 0) {
      const rows = checks
        .map(
          (c) =>
            `<tr><td style="padding:6px 10px">${c.ok ? "✅" : "⚠️"}</td><td style="padding:6px 10px"><strong>${c.name}</strong></td><td style="padding:6px 10px">${c.detail}</td></tr>`,
        )
        .join("");

      await resend.emails.send({
        from: "Gotechpluz SEO Monitor <onboarding@resend.dev>",
        to: ALERT_TO,
        subject: `⚠️ Domain/SEO drift detected on gotechpluz.com (${failures.length} issue${failures.length > 1 ? "s" : ""})`,
        html: `
          <h2>Domain consistency check failed</h2>
          <p>The daily check found settings that no longer match the canonical host <strong>${CANONICAL_HOST}</strong>.</p>
          <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows}</table>
          <p style="color:#666;font-size:12px">Checked at ${new Date().toISOString()}</p>
        `,
      });
    }

    return new Response(JSON.stringify({ status, checks }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("seo-domain-guard failed:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
