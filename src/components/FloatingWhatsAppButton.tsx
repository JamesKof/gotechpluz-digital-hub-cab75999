import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";

const FloatingWhatsAppButton = () => {
  const { openWhatsApp } = useWhatsApp();

  const handleClick = () => {
    openWhatsApp({
      source: "floating_whatsapp_button",
      message: "Hi Gotechpluz, I'd like quick support about my project.",
      toastTitle: "Opening WhatsApp chat",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40 flex h-14 w-14 md:h-13 md:w-13 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-[0_6px_20px_hsl(142_70%_45%/0.35)] hover:shadow-[0_8px_28px_hsl(142_70%_45%/0.45)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default FloatingWhatsAppButton;
