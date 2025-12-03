const WHATSAPP_STATS_KEY = "whatsapp_click_stats_v1";

interface WhatsAppStats {
  total: number;
  bySource: Record<string, number>;
}

export const trackWhatsAppClick = (source: string) => {
  if (typeof window === "undefined") return;

  // Send event to Google Analytics via gtag
  const gtag = (window as any).gtag;
  if (gtag) {
    gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: source,
    });
  }

  // Mirror counts locally so the in-app analytics page can summarize engagement
  try {
    const raw = window.localStorage.getItem(WHATSAPP_STATS_KEY);
    const parsed: WhatsAppStats = raw
      ? JSON.parse(raw)
      : { total: 0, bySource: {} };

    const current = parsed.bySource[source] ?? 0;
    const updated: WhatsAppStats = {
      total: parsed.total + 1,
      bySource: {
        ...parsed.bySource,
        [source]: current + 1,
      },
    };

    window.localStorage.setItem(WHATSAPP_STATS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn("Failed to persist WhatsApp stats", err);
  }
};

export const getWhatsAppStats = (): WhatsAppStats => {
  if (typeof window === "undefined") {
    return { total: 0, bySource: {} };
  }

  try {
    const raw = window.localStorage.getItem(WHATSAPP_STATS_KEY);
    return raw ? JSON.parse(raw) : { total: 0, bySource: {} };
  } catch {
    return { total: 0, bySource: {} };
  }
};
