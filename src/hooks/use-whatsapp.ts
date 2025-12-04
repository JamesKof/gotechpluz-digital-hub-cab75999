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

    if (typeof window !== "undefined") {
      const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!newWindow) {
        window.location.href = whatsappUrl;
      }
    }
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

    if (typeof window !== "undefined") {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (!newWindow) {
        window.location.href = url;
      }
    }
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
