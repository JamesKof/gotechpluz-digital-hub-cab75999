import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Transforming ideas into stunning digital realities with innovative design and technology"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid deployment and execution without compromising quality or attention to detail"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Strategic solutions designed to scale your business and maximize ROI"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Quick Intro Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bridging <span className="bg-gradient-primary bg-clip-text text-transparent">Creativity</span> with Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We merge artistic vision with cutting-edge technology to deliver responsive websites, 
              mobile applications, e-commerce platforms, and comprehensive digital marketing solutions 
              that drive measurable results for businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Start Your Project
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
