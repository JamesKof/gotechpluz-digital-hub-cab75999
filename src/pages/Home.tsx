import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { ArrowRight, Sparkles, Zap, TrendingUp, Globe, Users, MapPin } from "lucide-react";
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

      {/* Global Reach Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Global Digital Agency</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                One Agency. <span className="bg-gradient-primary bg-clip-text text-transparent">Worldwide Impact.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                As one of Ghana's leading web development, application development, and graphic design agencies, 
                we've shattered geographic boundaries to serve clients across continents. Our distributed team 
                and digital-first approach mean excellence isn't limited by location—it's amplified by it.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center bg-gradient-to-br from-background to-muted/30 border-border hover:border-primary/30 transition-colors animate-fade-in-up">
                <Globe className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-background to-muted/30 border-border hover:border-primary/30 transition-colors animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <Users className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-accent mb-1">Global</div>
                <p className="text-sm text-muted-foreground">Distributed Team</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-background to-muted/30 border-border hover:border-primary/30 transition-colors animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Time Zone Coverage</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-background to-muted/30 border-border hover:border-primary/30 transition-colors animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Zap className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-accent mb-1">100%</div>
                <p className="text-sm text-muted-foreground">Remote-Ready</p>
              </Card>
            </div>

            {/* Countries Grid */}
            <div className="mb-12">
              <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
                Trusted by Clients in
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                  { name: "Ghana", flag: "🇬🇭", highlight: true },
                  { name: "USA", flag: "🇺🇸" },
                  { name: "UK", flag: "🇬🇧" },
                  { name: "Germany", flag: "🇩🇪" },
                  { name: "Canada", flag: "🇨🇦" },
                  { name: "France", flag: "🇫🇷" },
                  { name: "Netherlands", flag: "🇳🇱" },
                  { name: "Nigeria", flag: "🇳🇬" },
                  { name: "Rwanda", flag: "🇷🇼" },
                  { name: "Brazil", flag: "🇧🇷" },
                ].map((country, index) => (
                  <div
                    key={country.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 animate-fade-in ${
                      country.highlight 
                        ? "bg-primary/10 border-primary/30 text-primary font-semibold" 
                        : "bg-muted/50 border-border hover:border-primary/30"
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="text-xl">{country.flag}</span>
                    <span className="text-sm font-medium">{country.name}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-white font-semibold animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <span className="text-xl">🌍</span>
                  <span className="text-sm">& Beyond</span>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <Card className="p-8 md:p-10 bg-gradient-to-br from-muted/30 to-background border-primary/10 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Beyond Borders. Beyond Barriers.
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Physical distance is no longer a limitation. Our digital-first infrastructure 
                    enables seamless collaboration across time zones, ensuring your project receives 
                    the same dedication and expertise whether you're in Accra, New York, or Berlin.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With team members strategically positioned around the globe, we offer round-the-clock 
                    support, faster turnaround times, and a diverse perspective that enriches every project we undertake.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-xl border border-border">
                    <div className="text-primary font-bold mb-1">Seamless Communication</div>
                    <p className="text-xs text-muted-foreground">Video calls, real-time updates, and transparent workflows</p>
                  </div>
                  <div className="p-4 bg-background rounded-xl border border-border">
                    <div className="text-primary font-bold mb-1">Cultural Intelligence</div>
                    <p className="text-xs text-muted-foreground">Local insights with global design standards</p>
                  </div>
                  <div className="p-4 bg-background rounded-xl border border-border">
                    <div className="text-primary font-bold mb-1">Agile Delivery</div>
                    <p className="text-xs text-muted-foreground">Sprint-based development for faster results</p>
                  </div>
                  <div className="p-4 bg-background rounded-xl border border-border">
                    <div className="text-primary font-bold mb-1">Competitive Pricing</div>
                    <p className="text-xs text-muted-foreground">World-class quality at accessible rates</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Ready to work with a truly global agency?</p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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
