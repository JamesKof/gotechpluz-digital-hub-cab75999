import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, CheckCircle2, ArrowRight, Globe, Smartphone, ShoppingCart, Building2, ClipboardList, ExternalLink } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const QUESTIONNAIRE_URL = "https://forms.gle/YVXpRizgtv7GLcYs5";

const WebDesignGhanaPage = () => {
  const { openWhatsApp } = useWhatsApp();
  usePageSEO({ title: "Website Design Services in Ghana | Web Development Company Accra - Gotechpluz", description: "Professional website design and web development services in Ghana.", canonical: `${BASE_URL}/web-design-ghana`, keywords: "website design services Ghana, web development company Ghana, business website developers Accra" });

  const handleWhatsApp = () => { openWhatsApp({ source: "web_design_ghana_cta", message: "Hi Gotechpluz, I'm interested in your website design services in Ghana." }); };

  const serviceTypes = [
    { icon: Globe, title: "Business Websites", desc: "Professional corporate websites that establish credibility and attract customers" },
    { icon: ShoppingCart, title: "E-commerce Websites", desc: "Online stores with Mobile Money, Visa, and PayPal integration" },
    { icon: Smartphone, title: "Web Applications", desc: "Custom web apps for government portals, healthcare platforms, and enterprise systems" },
    { icon: Building2, title: "Government Portals", desc: "Secure, accessible platforms built to public sector standards" },
  ];

  const benefits = [
    "Mobile-responsive design optimized for Ghanaian internet users", "SEO-optimized to rank on Google for your target keywords", "Fast loading speeds even on slower connections", "Secure hosting with SSL certification included",
    "Integration with local payment gateways (MTN MoMo, Vodafone Cash)", "Ongoing maintenance and support after launch", "Custom design—no generic templates", "Content management so you can update your site easily",
  ];

  return (
    <div className="min-h-screen page-transition-enter">
      <Navigation />
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="blur-in">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Website Design Services in <span className="bg-gradient-primary bg-clip-text text-transparent">Ghana</span></h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">We're the <strong>web development company in Accra</strong> that government institutions, healthcare organizations, and growing businesses trust.</p>
              <p className="text-lg text-muted-foreground/80 mb-8">From <strong>affordable business websites</strong> to <strong>complex enterprise platforms</strong>.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={QUESTIONNAIRE_URL} target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-gradient-primary hover:opacity-90"><ClipboardList className="h-5 w-5 mr-2" /> Get a Free Quote <ExternalLink className="h-4 w-4 ml-2" /></Button></a>
                <Button size="lg" variant="outline" onClick={handleWhatsApp}>Chat on WhatsApp <ArrowRight className="h-4 w-4 ml-2" /></Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Web Development Solutions for <span className="bg-gradient-accent bg-clip-text text-transparent">Every Business</span></h2><p className="text-lg text-muted-foreground">Custom-built websites that serve your industry and audience</p></div></AnimateOnScroll>
            <div className="grid sm:grid-cols-2 gap-8">
              {serviceTypes.map((s, i) => { const Icon = s.icon; return (
                <AnimateOnScroll key={s.title} animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={i * 100}>
                  <Card className="p-8 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 h-full">
                    <div className="flex items-start gap-4"><div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"><Icon className="h-7 w-7 text-white" /></div><div><h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h3><p className="text-muted-foreground">{s.desc}</p></div></div>
                  </Card>
                </AnimateOnScroll>
              ); })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-in-up"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses in Ghana Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Gotechpluz</span></h2></div></AnimateOnScroll>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <AnimateOnScroll key={i} animation="stagger-in" delay={i * 60}>
                  <div className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{b}</span></div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="scale-in">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-hero border-primary/10 text-center">
                <h2 className="text-3xl font-bold mb-4">Trusted by Ghana's Top Institutions</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">We've built secure platforms for <strong>Ghana Immigration Service</strong>, health systems for <strong>NHIS</strong>, and digital banking for <strong>Ghana EXIM Bank</strong>.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/portfolio"><Button size="lg" className="bg-gradient-primary hover:opacity-90">View Our Portfolio <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                  <Link to="/services"><Button size="lg" variant="outline">All Services</Button></Link>
                </div>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Explore Related Services</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/seo-services-ghana" className="p-5 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors text-center group"><h3 className="font-bold group-hover:text-primary transition-colors mb-1">SEO Services</h3><p className="text-sm text-muted-foreground">Rank higher on Google in Ghana</p></Link>
                <Link to="/digital-marketing-ghana" className="p-5 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors text-center group"><h3 className="font-bold group-hover:text-primary transition-colors mb-1">Digital Marketing</h3><p className="text-sm text-muted-foreground">Grow your online presence</p></Link>
                <Link to="/branding-agency-ghana" className="p-5 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors text-center group"><h3 className="font-bold group-hover:text-primary transition-colors mb-1">Branding & Design</h3><p className="text-sm text-muted-foreground">Build a memorable brand</p></Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDesignGhanaPage;
