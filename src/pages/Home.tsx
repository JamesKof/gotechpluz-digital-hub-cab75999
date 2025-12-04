import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useWhatsApp } from "@/hooks/use-whatsapp";

const Home = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Out-of-the-Box Solutions",
      description: "We build edgy user experiences and digital products that stand out in the crowded marketplace"
    },
    {
      icon: Zap,
      title: "Proven Methodology",
      description: "Our systematic approach—Listen, Research, Implement, Test, Launch, Grow—ensures success every time"
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Growth",
      description: "Goal-oriented solutions that help you grow revenue consistently and improve business operations"
    }
  ];

  const { openWhatsApp, helperText } = useWhatsApp();

  const openWhatsAppFromHome = () => {
    openWhatsApp({
      source: "home_quick_intro_whatsapp",
      message: "Hi Gotechpluz, I'd like to discuss a project.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Client Testimonials Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="bg-gradient-accent bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped transform
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>
      
      {/* Quick Intro Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Digital Solutions That <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span> Your Business
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              We reimagine traditional business processes and simplify complex operations through innovative digital solutions. Our goal-oriented approach helps businesses worldwide access new markets,
              increase operational efficiency, and dramatically accelerate revenue growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
                <p className="text-muted-foreground">Client Revenue Generated</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <p className="text-muted-foreground">Average ROI Uplift</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/services">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  type="button"
                  onClick={openWhatsAppFromHome}
                >
                  Chat on WhatsApp
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{helperText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why <span className="bg-gradient-accent bg-clip-text text-transparent">Gotechpluz</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not just service providers—we're your partners in digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={item.title}
                    className="p-8 text-center hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
