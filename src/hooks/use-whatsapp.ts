import { useToast } from "@/hooks/use-toast";
import { trackWhatsAppClick } from "@/lib/analytics";

const WHATSAPP_NUMBER = "233247233996";
const CALL_FALLBACK = "024 723 3996";

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || "";
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

const buildWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

/**
 * Opens WhatsApp reliably from any context (including embedded preview iframes).
 * 1. window.open in a new tab.
 * 2. Fallback: synthetic anchor click with target="_blank" (survives some popup blockers).
 * 3. Last resort: top-level navigation, never same-frame (wa.me refuses to be framed).
 */
const navigateToWhatsApp = (url: string) => {
  if (typeof window === "undefined") return;

  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (opened) return;

  try {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    return;
  } catch {
    // ignore and fall through
  }

  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      return;
    }
  } catch {
    // cross-origin top frame; fall through
  }

  window.location.href = url;
};

/**
 * Centralized WhatsApp interaction hook.
 * Provides device-sensitive behavior (mobile app vs WhatsApp Web),
 * toast notifications with call fallback, and analytics tracking.
 *
 * Analytics event sources (use descriptive, consistent names):
 * - hero_cta: Main hero section button
 * - nav_get_started: Navigation "Get Started" button
 * - floating_button: Floating WhatsApp button
 * - footer_cta: Footer contact button
 * - contact_section: Homepage contact card
 * - portfolio_cta: Portfolio page CTA
 * - project_inquiry_form: After form submission
 * - mobile_contact_bar: Fixed mobile bottom bar
 * - whatsapp_landing: WhatsApp landing section (ContactPage)
 */
export const useWhatsApp = () => {
  const { toast } = useToast();

  const getHelperMessage = () => {
    if (typeof window === "undefined") return "";

    if (isMobileDevice()) {
      return `We'll open WhatsApp on your phone. If nothing happens, please open the WhatsApp app manually or call ${CALL_FALLBACK}.`;
    }

    return `We'll open WhatsApp Web in a new tab. If nothing happens, please allow popups or call ${CALL_FALLBACK}.`;
  };

  const openWhatsApp = (options: {
    source: string;
    message: string;
    toastTitle?: string;
  }) => {
    const { source, message, toastTitle } = options;
    const whatsappUrl = buildWhatsAppUrl(message);
    const helper = getHelperMessage();

    trackWhatsAppClick(source);
    toast({
      title: toastTitle ?? "Opening WhatsApp chat",
      description: helper,
    });

    navigateToWhatsApp(whatsappUrl);
  };

  const openWhatsAppUrl = (options: {
    source: string;
    url: string;
    toastTitle?: string;
  }) => {
    const { source, url, toastTitle } = options;
    const helper = getHelperMessage();

    trackWhatsAppClick(source);
    toast({
      title: toastTitle ?? "Opening WhatsApp chat",
      description: helper,
    });

    navigateToWhatsApp(url);
  };

  const helperText = typeof window === "undefined" ? "" : getHelperMessage();

  return {
    openWhatsApp,
    openWhatsAppUrl,
    helperText,
    whatsappNumber: WHATSAPP_NUMBER,
    callFallback: CALL_FALLBACK,
  };
};
