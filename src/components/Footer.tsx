import logo from "@/assets/gotechpluz-logo.png";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <img src={logo} alt="Gotechpluz" className="h-12 mb-4" />
              <p className="text-muted-foreground text-sm mb-4">
                Elevating Digital Experience - Empowering global success through innovative digital solutions.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
                <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Team</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`https://wa.me/233247233996?text=${encodeURIComponent(
                      "Hi Gotechpluz, I'd like to inquire about your services."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackWhatsAppClick("footer_whatsapp_link");
                      toast({
                        title: "Opening WhatsApp chat",
                        description: "You'll be connected to our support team.",
                      });
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    WhatsApp: +233 247 233 996
                  </a>
                </li>
                <li>0207292967</li>
                <li>info@gotechpluz.com</li>
                <li>La Tebu Cr, Accra-Ghana</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {currentYear} Gotechpluz. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
