import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { trackWhatsAppClick } from "@/lib/analytics";

const WhatsAppContactSection = () => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    const whatsappNumber = "233247233996";
    const whatsappMessage = encodeURIComponent(
      "Hi Gotechpluz, I'd like to discuss a project."
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    trackWhatsAppClick("whatsapp_landing_section");
    toast({
      title: "Opening WhatsApp chat",
      description:
        "If a new tab doesn't open, please allow popups or call 024 723 3996.",
    });

    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lets Talk on <span className="bg-gradient-primary bg-clip-text text-transparent">WhatsApp</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            WhatsApp is our fastest support channel. Start a chat now or call us directly if you prefer.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90"
              type="button"
              onClick={handleWhatsAppClick}
            >
              Chat on WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>
                Or call <span className="font-semibold">024 723 3996</span> for immediate assistance.
              </span>
            </p>
            <p className="text-xs text-muted-foreground">
              WhatsApp opens in a new tab. If nothing happens, please allow popups and try again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppContactSection;
