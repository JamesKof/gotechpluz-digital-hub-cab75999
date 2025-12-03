import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppStats } from "@/lib/analytics";

interface SourceConfig {
  label: string;
  page: string;
}

const SOURCE_CONFIG: Record<string, SourceConfig> = {
  hero_whatsapp_cta: {
    label: "Hero WhatsApp CTA",
    page: "Home",
  },
  floating_whatsapp_button: {
    label: "Floating WhatsApp Button",
    page: "All Pages",
  },
  contact_card_link: {
    label: "Contact Card Link",
    page: "Contact",
  },
  contact_form_submit: {
    label: "Contact Form Submit",
    page: "Contact",
  },
  footer_whatsapp_link: {
    label: "Footer WhatsApp Link",
    page: "All Pages",
  },
  project_inquiry_submit: {
    label: "Project Inquiry Form",
    page: "Portfolio",
  },
  portfolio_cta_whatsapp: {
    label: "Portfolio CTA Button",
    page: "Portfolio",
  },
};

const AnalyticsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState(() => getWhatsAppStats());

  useEffect(() => {
    setMounted(true);
    setStats(getWhatsAppStats());
    document.title = "WhatsApp Analytics | Gotechpluz";
  }, []);

  const byPage = useMemo(() => {
    const pageMap: Record<string, number> = {};

    Object.entries(stats.bySource).forEach(([source, count]) => {
      const config = SOURCE_CONFIG[source];
      const page = config?.page ?? "Other";
      pageMap[page] = (pageMap[page] ?? 0) + count;
    });

    return pageMap;
  }, [stats]);

  const totalClicks = stats.total;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <header className="mb-10 text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                WhatsApp <span className="bg-gradient-primary bg-clip-text text-transparent">Engagement Analytics</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This dashboard mirrors every <code className="px-1 py-0.5 rounded bg-background text-xs">whatsapp_click</code> event sent to Google
                Analytics and summarizes engagement by page and call-to-action.
              </p>
            </header>

            <section className="grid gap-6 md:grid-cols-3 mb-10">
              <Card className="p-6 animate-fade-in">
                <p className="text-sm text-muted-foreground mb-1">Total WhatsApp clicks</p>
                <p className="text-3xl font-bold">{mounted ? totalClicks : "-"}</p>
              </Card>
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <p className="text-sm text-muted-foreground mb-1">Tracked sources</p>
                <p className="text-3xl font-bold">{Object.keys(stats.bySource).length}</p>
              </Card>
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <p className="text-sm text-muted-foreground mb-1">Tracked pages</p>
                <p className="text-3xl font-bold">{Object.keys(byPage).length}</p>
              </Card>
            </section>

            <section className="grid gap-6 md:grid-cols-2 mb-16">
              <Card className="p-6 animate-fade-in">
                <h2 className="text-lg font-semibold mb-4">Clicks by Page</h2>
                <div className="space-y-3">
                  {Object.entries(byPage).length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      No WhatsApp clicks recorded yet. Interact with the site first, then refresh this page.
                    </p>
                  )}
                  {Object.entries(byPage).map(([page, count]) => (
                    <div key={page} className="flex items-center justify-between text-sm">
                      <span>{page}</span>
                      <span className="font-semibold">{count}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <h2 className="text-lg font-semibold mb-4">Clicks by CTA</h2>
                <div className="space-y-3">
                  {Object.entries(stats.bySource).length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      No WhatsApp clicks recorded yet. Interact with the site first, then refresh this page.
                    </p>
                  )}
                  {Object.entries(stats.bySource).map(([source, count]) => {
                    const config = SOURCE_CONFIG[source];
                    return (
                      <div key={source} className="flex items-center justify-between text-sm">
                        <div className="flex flex-col items-start gap-1">
                          <span>{config?.label ?? source}</span>
                          {config && (
                            <Badge variant="outline" className="text-xs">
                              {config.page}
                            </Badge>
                          )}
                        </div>
                        <span className="font-semibold">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </section>

            <section className="text-sm text-muted-foreground max-w-3xl mx-auto text-center">
              <p className="mb-2">
                This view is powered by local storage and only reflects activity from this browser. In Google Analytics, look for
                events named <code className="px-1 py-0.5 rounded bg-background text-xs">whatsapp_click</code> with labels matching the CTA
                names above.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnalyticsPage;
