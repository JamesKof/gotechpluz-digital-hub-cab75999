export const trackWhatsAppClick = (source: string) => {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;
  if (!gtag) return;

  gtag("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: source,
  });
};
