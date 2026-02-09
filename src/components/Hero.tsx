import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Hero = () => {
  const { openWhatsApp } = useWhatsApp();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsAppChat = () => {
    openWhatsApp({
      source: "hero_whatsapp_cta",
      message: "Hi Gotechpluz, I'd like to discuss a project.",
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <AnimateOnScroll animation="blur-in" delay={0}>
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <p className="text-primary font-semibold text-sm">Top-Rated Digital Marketing Agency in Ghana • Web Development & IT Solutions</p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="blur-in" delay={150}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ghana's Leading <span className="bg-gradient-primary bg-clip-text text-transparent">
                Digital Agency
              </span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl">Web Development • Branding • Digital Marketing</span>
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in-up" delay={300}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From government institutions to SMEs, we're the trusted <strong>web development company in Ghana</strong> that transforms businesses through innovative digital solutions. Our Accra-based team delivers professional <strong>website design services</strong>, <strong>SEO services in Ghana</strong>, and comprehensive <strong>IT solutions</strong> that help you compete globally.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in-up" delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium text-base"
              >
                Request a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const element = document.querySelector("#services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-primary text-primary hover:bg-primary/10 text-base"
              >
                Explore Our Services
              </Button>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in-up" delay={550}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8 text-sm">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-muted-foreground">Global Support</div>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={650}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
              <button
                type="button"
                onClick={openWhatsAppChat}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>WhatsApp: +233 247 233 996</span>
              </button>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Website Designers in Accra, Ghana</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
