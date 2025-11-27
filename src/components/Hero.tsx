import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <p className="text-primary font-semibold text-sm">Technology Solution Providers • Local with Global Influence</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We Build <span className="bg-gradient-primary bg-clip-text text-transparent">
              Edgy Digital Experiences
            </span>
            <br />
            That Drive Results
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connecting the dots between technology, marketing, and creativity to help you engage customers and accelerate revenue growth. We craft out-of-the-box solutions for businesses worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium text-base"
            >
              Let's Talk About Your Project
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
              Discover What We Do
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8 text-sm">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>0247233996 | 0207292967</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground"></div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>La Tebu Cr, Accra-Ghana</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
