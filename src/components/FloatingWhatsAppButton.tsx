import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

const FloatingWhatsAppButton = () => {
  const { toast } = useToast();

  const handleClick = () => {
    const whatsappNumber = "233247233996";
    const whatsappMessage = encodeURIComponent(
      "Hi Gotechpluz, I'd like quick support about my project."
    );

    trackWhatsAppClick("floating_whatsapp_button");
    toast({
      title: "Opening WhatsApp support",
      description: "You'll chat directly with our team.",
    });
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40 flex h-14 w-14 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-medium hover:shadow-lg hover-scale focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
};

export default FloatingWhatsAppButton;
