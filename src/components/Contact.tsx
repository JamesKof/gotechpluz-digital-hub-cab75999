import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { trackWhatsAppClick } from "@/lib/analytics";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "233247233996";
    const whatsappMessage = encodeURIComponent(
      `📩 New Contact Message\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      (formData.phone ? `Phone: ${formData.phone}\n` : "") +
      `Message: ${formData.message}`
    );

    trackWhatsAppClick("contact_form_submit");
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    toast({
      title: "Message Sent!",
      description: "We've opened a WhatsApp chat so we can respond even faster.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to elevate your digital experience? Let's discuss your project
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 border-primary/10 hover:border-primary/30 transition-colors animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Phone &amp; WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      <a
                        href={`https://wa.me/233247233996?text=${encodeURIComponent(
                          "Hi Gotechpluz, I'd like to inquire about your services."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick("contact_card_link")}
                        className="text-primary hover:underline"
                      >
                        +233 247 233 996 (WhatsApp)
                      </a>
                    </p>
                    <p className="text-muted-foreground text-sm">Alt: 0207292967</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/10 hover:border-primary/30 transition-colors animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">info@gotechpluz.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/10 hover:border-primary/30 transition-colors animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-primary">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Location</h3>
                    <p className="text-muted-foreground text-sm">La Tebu Cr</p>
                    <p className="text-muted-foreground text-sm">Accra, Ghana</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-hero border-primary/20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="font-bold mb-3">Website</h3>
                <a 
                  href="https://www.gotechpluz.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  www.gotechpluz.com
                </a>
              </Card>
            </div>

            <Card className="lg:col-span-3 p-8 border-primary/10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0247233996"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
