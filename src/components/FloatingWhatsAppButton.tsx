import { MessageCircle } from "lucide-react";

const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    const whatsappNumber = "233247233996";
    const whatsappMessage = encodeURIComponent(
      "Hi Gotechpluz, I’d like quick support about my project."
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default FloatingWhatsAppButton;
