import logo from "@/assets/gotechpluz-logo.png";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { ClipboardList, ExternalLink } from "lucide-react";

const QUESTIONNAIRE_URL = "https://forms.gle/YVXpRizgtv7GLcYs5";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openWhatsApp, helperText, callFallback } = useWhatsApp();


  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src={logo} alt="Gotechpluz" className="h-12 mb-4" />
              <p className="text-muted-foreground text-sm mb-4">
                Elevating Digital Experience - Empowering global success through innovative digital solutions.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
                <li><a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="/process" className="text-muted-foreground hover:text-primary transition-colors">How We Work</a></li>
                <li>
                  <a 
                    href={QUESTIONNAIRE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    <ClipboardList className="h-3 w-3" />
                    Website Questionnaire
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/web-design-ghana" className="text-muted-foreground hover:text-primary transition-colors">Web Design Ghana</a></li>
                <li><a href="/digital-marketing-ghana" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</a></li>
                <li><a href="/seo-services-ghana" className="text-muted-foreground hover:text-primary transition-colors">SEO Services</a></li>
                <li><a href="/branding-agency-ghana" className="text-muted-foreground hover:text-primary transition-colors">Branding & Design</a></li>
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
                    onClick={(e) => {
                      e.preventDefault();
                      openWhatsApp({
                        source: "footer_whatsapp_link",
                        message:
                          "Hi Gotechpluz, I'd like to inquire about your services.",
                        toastTitle: "Opening WhatsApp chat",
                      });
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    WhatsApp: +233 247 233 996
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">{helperText}</p>
                </li>
                <li>Call: {callFallback}</li>
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
