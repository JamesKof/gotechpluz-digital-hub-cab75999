import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Globe2, Shield, Lightbulb, Users, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const whyChooseUs = [
    {
      icon: Lightbulb,
      title: "Exceptional Digital Experiences",
      description: "We craft world-class campaigns with unmatched style and execution, ensuring your digital presence is both captivating and effective in reaching your audience."
    },
    {
      icon: Shield,
      title: "Strategic Budget Management",
      description: "Your investment matters to us. We optimize every dollar through continuous campaign refinement and precise tracking tools that demonstrate clear return on investment."
    },
    {
      icon: Users,
      title: "Proven Expertise",
      description: "Our team brings years of experience working with diverse clients—from multinational corporations to specialized startups—staying ahead of industry trends since our inception."
    },
    {
      icon: Target,
      title: "Excellence-Driven Approach",
      description: "Good enough isn't in our vocabulary. We constantly seek growth opportunities and push boundaries to ensure your brand consistently achieves outstanding results."
    },
    {
      icon: Globe2,
      title: "Market Intelligence",
      description: "We provide deep insights into your target audience—from demographics to behavior patterns—enabling you to connect with the right people at the right time through optimal channels."
    }
  ];

  const openWhatsAppFromAbout = () => {
    const whatsappNumber = "233247233996";
    const whatsappMessage = encodeURIComponent(
      "Hi Gotechpluz, I'd like to discuss a project."
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    const newWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Gotechpluz</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering brands through innovative digital solutions and transformative technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Global Reach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-medium transition-shadow animate-fade-in-up border-primary/10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  Empowering global success through innovative digital solutions that transform businesses and create lasting impact.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-medium transition-shadow animate-fade-in-up border-primary/10" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To lead the digital revolution, shaping an innovative landscape that redefines success benchmarks for our global clientele.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-medium transition-shadow animate-fade-in-up border-primary/10" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary">
                  <Globe2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                <p className="text-muted-foreground">
                  Proudly serving clients across Switzerland, United States, United Kingdom, and expanding worldwide
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Partner with <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Five compelling reasons to choose Gotechpluz as your digital transformation partner
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={item.title}
                    className="p-8 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Approach</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You need a new approach to capturing attention, earning customer loyalty, and proving the value of every investment. That's where we come in—with a systematic methodology that delivers measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Users, title: "Listen", desc: "We start by understanding your business goals, challenges, and target audience to create the perfect strategy" },
                { icon: Lightbulb, title: "Research & Plan", desc: "Deep market analysis and strategic planning to identify opportunities and craft data-driven solutions" },
                { icon: Target, title: "Implement", desc: "Execute with precision using cutting-edge technologies and proven methodologies" },
                { icon: Shield, title: "Test", desc: "Rigorous quality assurance and testing to ensure flawless performance and user experience" },
                { icon: TrendingUp, title: "Launch", desc: "Strategic deployment with comprehensive monitoring and optimization for maximum impact" },
                { icon: Heart, title: "Grow", desc: "Continuous improvement and scaling through analytics, feedback, and iterative enhancements" }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card 
                    key={step.title}
                    className="p-8 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </Card>
                );
              })}
            </div>

            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Core <span className="bg-gradient-accent bg-clip-text text-transparent">Values</span>
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  The principles that guide everything we do
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Heart, title: "Client Satisfaction", desc: "Your success is our ultimate goal" },
                  { icon: Lightbulb, title: "Innovation & Creativity", desc: "Pushing boundaries with fresh ideas" },
                  { icon: Shield, title: "Transparency & Integrity", desc: "Honest communication, always" },
                  { icon: TrendingUp, title: "Continuous Learning", desc: "Evolving with technology" }
                ].map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={value.title}
                      className="bg-background/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-background transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Ready to transform your business? Let's have a friendly chat to find out how we can help.
                </p>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href="tel:0247233996">
                      <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                        Call: 024 723 3996
                      </Button>
                    </a>
                    <Button
                      size="lg"
                      variant="outline"
                      type="button"
                      onClick={openWhatsAppFromAbout}
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    WhatsApp opens in a new tab. If nothing happens, please allow popups and try again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
