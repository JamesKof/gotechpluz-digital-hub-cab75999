import { MessageCircle, Phone } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileContactBar = () => {
  const isMobile = useIsMobile();
  const { openWhatsApp, callFallback } = useWhatsApp();

  // Only render on mobile devices
  if (!isMobile) return null;

  const handleWhatsAppClick = () => {
    openWhatsApp({
      source: "mobile_contact_bar",
      message: "Hi Gotechpluz, I'd like to discuss a project.",
      toastTitle: "Opening WhatsApp",
    });
  };

  const handleCallClick = () => {
    window.location.href = `tel:+233247233996`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg md:hidden">
      <div className="flex">
        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-primary text-white font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Chat on WhatsApp</span>
        </button>
        <button
          type="button"
          onClick={handleCallClick}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-muted text-foreground font-medium text-sm hover:bg-muted/80 transition-colors border-l border-border"
        >
          <Phone className="h-4 w-4" />
          <span>Call {callFallback}</span>
        </button>
      </div>
    </div>
  );
};

export default MobileContactBar;
