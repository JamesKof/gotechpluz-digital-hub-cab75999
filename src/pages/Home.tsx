import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Sparkles, Zap, TrendingUp, Globe, Users, MapPin, Rocket, ClipboardList, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";

const Home = () => {
  usePageSEO({
    title: "Web Development Company in Ghana | Digital Marketing Agency Accra - Gotechpluz",
    description: "Gotechpluz is Ghana's leading digital marketing agency and web development company in Accra. Professional website design, SEO services, branding, e-commerce solutions & IT consultancy. Trusted by government institutions and SMEs.",
    canonical: BASE_URL,
    keywords: "digital marketing agency Ghana, web development company Ghana, website design Accra, SEO services Ghana, branding agency Ghana, e-commerce development Ghana, IT solutions Ghana",
  });
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

  const { openWhatsApp } = useWhatsApp();

  const openWhatsAppFromHome = () => {
    openWhatsApp({
      source: "home_quick_intro_whatsapp",
      message: "Hi Gotechpluz, I'd like to discuss a project.",
    });
  };

  return (
    <div className="min-h-screen page-transition-enter">
      <Navigation />
      <Hero />

      {/* Client Testimonials Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our <span className="bg-gradient-accent bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from businesses we've helped transform
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <TestimonialsCarousel />
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Our Story - SEO-Rich Intro */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll animation="fade-in-left">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Story Behind Ghana's Most <span className="bg-gradient-primary bg-clip-text text-transparent">Trusted Digital Agency</span>
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
                <p className="text-lg leading-relaxed">
                  It started with a simple question: <em>"Why should Ghanaian businesses settle for less when they deserve world-class digital solutions?"</em> That question became Gotechpluz—a <strong>leading digital marketing agency in Ghana</strong> that has since transformed how businesses across Africa and beyond approach technology.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're the <strong>web development company in Ghana</strong> that government institutions trust for secure platforms, the <strong>branding agency</strong> that startups choose to establish their identity, and the <strong>IT solutions company</strong> that enterprises rely on to streamline operations. From building <strong>e-commerce websites for businesses in Accra</strong> to crafting <strong>digital marketing strategies for SMEs in Ghana</strong>, we've proven that excellence knows no boundaries.
                </p>
                <p className="text-lg leading-relaxed">
                  Our portfolio tells the story: secure immigration systems for government institutions, health platforms connecting communities to care, logistics solutions moving goods across borders, and brand identities that have become household names. Whether you need <strong>affordable web design services in Accra</strong>, <strong>SEO services in Ghana</strong>, or <strong>custom software development</strong>, we deliver results that speak for themselves.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in-up">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
                  <p className="text-muted-foreground">Client Revenue Generated</p>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors text-center">
                  <div className="text-4xl font-bold text-primary mb-2">300%</div>
                  <p className="text-muted-foreground">Average ROI Uplift</p>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in">
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
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Global Digital Agency</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  One Agency. <span className="bg-gradient-primary bg-clip-text text-transparent">Worldwide Impact.</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  As one of Ghana's leading web development, application development, and graphic design agencies, 
                  we've shattered geographic boundaries to serve clients across continents.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Stats Row */}
            <AnimateOnScroll animation="stagger-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {[
                  { icon: Globe, stat: "10+", label: "Countries Served", color: "text-primary" },
                  { icon: Users, stat: "Global", label: "Distributed Team", color: "text-accent" },
                  { icon: MapPin, stat: "24/7", label: "Time Zone Coverage", color: "text-primary" },
                  { icon: Zap, stat: "100%", label: "Remote-Ready", color: "text-accent" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.label} className="p-6 text-center bg-gradient-to-br from-background to-muted/30 border-border hover:border-primary/30 transition-colors" style={{ animationDelay: `${index * 100}ms` }}>
                      <Icon className={`h-8 w-8 mx-auto mb-3 ${item.color}`} />
                      <div className={`text-3xl font-bold ${item.color} mb-1`}>{item.stat}</div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </Card>
                  );
                })}
              </div>
            </AnimateOnScroll>

            {/* Countries Grid */}
            <AnimateOnScroll animation="fade-in-up">
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
                  ].map((country) => (
                    <div
                      key={country.name}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                        country.highlight 
                          ? "bg-primary/10 border-primary/30 text-primary font-semibold" 
                          : "bg-muted/50 border-border hover:border-primary/30"
                      }`}
                    >
                      <span className="text-xl">{country.flag}</span>
                      <span className="text-sm font-medium">{country.name}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-white font-semibold">
                    <span className="text-xl">🌍</span>
                    <span className="text-sm">& Beyond</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Value Proposition */}
            <AnimateOnScroll animation="fade-in-right">
              <Card className="p-8 md:p-10 bg-gradient-to-br from-muted/30 to-background border-primary/10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Beyond Borders. Beyond Barriers.
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Physical distance is no longer a limitation. Our digital-first infrastructure 
                      enables seamless collaboration across time zones.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With team members strategically positioned around the globe, we offer round-the-clock 
                      support, faster turnaround times, and a diverse perspective that enriches every project.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Seamless Communication", desc: "Video calls, real-time updates, and transparent workflows" },
                      { title: "Cultural Intelligence", desc: "Local insights with global design standards" },
                      { title: "Agile Delivery", desc: "Sprint-based development for faster results" },
                      { title: "Competitive Pricing", desc: "World-class quality at accessible rates" },
                    ].map((item) => (
                      <div key={item.title} className="p-4 bg-background rounded-xl border border-border">
                        <div className="text-primary font-bold mb-1">{item.title}</div>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>

            {/* CTA */}
            <AnimateOnScroll animation="fade-in">
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">Ready to work with a truly global agency?</p>
                <a
                  href="https://forms.gle/YVXpRizgtv7GLcYs5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why <span className="bg-gradient-accent bg-clip-text text-transparent">Gotechpluz</span>?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We're not just service providers—we're your partners in digital transformation
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimateOnScroll key={item.title} animation="scale-in" delay={index * 150}>
                    <Card 
                      className="p-8 text-center hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30"
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
                  </AnimateOnScroll>
                );
              })}
            </div>

            <AnimateOnScroll animation="fade-in">
              <div className="text-center mt-12">
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Get Started - Client Onboarding Form */}
      <section id="get-started" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Copy */}
              <AnimateOnScroll animation="fade-in-left">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                    <Rocket className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Start Your Project</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span> Your Digital Presence?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Take the first step towards digital excellence. Fill out the quick form for general inquiries, 
                    or complete our detailed questionnaire for website projects.
                  </p>

                  <div className="space-y-6">
                    {[
                      { num: "1", title: "Tell Us About Your Project", desc: "Share your vision, goals, and requirements with us." },
                      { num: "2", title: "Get a Custom Proposal", desc: "Receive a detailed proposal with timeline and pricing." },
                      { num: "3", title: "Launch & Grow Together", desc: "We bring your vision to life and support your growth." },
                    ].map((step) => (
                      <div key={step.num} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">{step.num}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Website Development Questionnaire CTA */}
                  <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <ClipboardList className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Need a Website?</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete our detailed Website Development Questionnaire for a comprehensive project assessment and custom quote.
                    </p>
                    <a
                      href="https://forms.gle/YVXpRizgtv7GLcYs5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full sm:w-auto bg-gradient-primary hover:opacity-90">
                        <ClipboardList className="h-4 w-4 mr-2" />
                        Start Questionnaire
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </Button>
                    </a>
                  </div>

                  {/* WhatsApp Option */}
                  <div className="mt-4 p-6 bg-background rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Prefer to chat directly?</p>
                    <Button
                      variant="outline"
                      onClick={openWhatsAppFromHome}
                      className="w-full sm:w-auto"
                    >
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Right Column - Form */}
              <AnimateOnScroll animation="fade-in-right" delay={200}>
                <ProjectInquiryForm />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
