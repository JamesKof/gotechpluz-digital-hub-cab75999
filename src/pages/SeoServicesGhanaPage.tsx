import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, CheckCircle2, ArrowRight, Globe, BarChart3, TrendingUp, MapPin, ClipboardList, ExternalLink } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const QUESTIONNAIRE_URL = "https://forms.gle/YVXpRizgtv7GLcYs5";

const SeoServicesGhanaPage = () => {
  const { openWhatsApp } = useWhatsApp();
  usePageSEO({ title: "SEO Services in Ghana | Search Engine Optimization Accra - Gotechpluz", description: "Professional SEO services in Ghana.", canonical: `${BASE_URL}/seo-services-ghana`, keywords: "SEO services Ghana, search engine optimization Accra, local SEO Ghana" });

  const handleWhatsApp = () => { openWhatsApp({ source: "seo_services_ghana_cta", message: "Hi Gotechpluz, I'm interested in your SEO services in Ghana." }); };

  const seoServices = [
    { icon: Globe, title: "On-Page SEO", desc: "Keyword research, meta tag optimization, content structuring, and internal linking" },
    { icon: TrendingUp, title: "Off-Page SEO", desc: "Quality backlink building, guest posting, directory submissions, and digital PR" },
    { icon: MapPin, title: "Local SEO", desc: "Google Business Profile optimization, local citations, review management, and map pack ranking" },
    { icon: BarChart3, title: "Technical SEO & Analytics", desc: "Site speed optimization, mobile responsiveness, crawl error fixes, and schema markup" },
  ];

  const checklist = [
    "Google Business Profile setup and optimization", "Keyword research targeting Ghanaian search terms", "On-page SEO for all website pages", "Schema markup for rich search results",
    "Mobile-first responsive design audit", "Page speed optimization for Ghanaian internet", "Monthly ranking reports and traffic analysis", "Competitor analysis and gap identification",
  ];

  return (
    <div className="min-h-screen page-transition-enter">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="blur-in">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">SEO Services in <span className="bg-gradient-primary bg-clip-text text-transparent">Ghana</span></h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">Get your business found on Google. Our <strong>search engine optimization services in Accra</strong> help businesses rank higher.</p>
              <p className="text-lg text-muted-foreground/80 mb-8">From <strong>local SEO for businesses in Accra</strong> to <strong>national ranking strategies</strong>.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={QUESTIONNAIRE_URL} target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-gradient-primary hover:opacity-90"><ClipboardList className="h-5 w-5 mr-2" /> Get SEO Audit <ExternalLink className="h-4 w-4 ml-2" /></Button></a>
                <Button size="lg" variant="outline" onClick={handleWhatsApp}>Chat on WhatsApp <ArrowRight className="h-4 w-4 ml-2" /></Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive SEO <span className="bg-gradient-accent bg-clip-text text-transparent">Solutions</span></h2><p className="text-lg text-muted-foreground">Everything your business needs to dominate Google search in Ghana</p></div></AnimateOnScroll>
            <div className="grid sm:grid-cols-2 gap-8">
              {seoServices.map((s, i) => { const Icon = s.icon; return (
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
            <AnimateOnScroll animation="fade-in-up"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Checklist for Businesses in <span className="bg-gradient-primary bg-clip-text text-transparent">Ghana</span></h2><p className="text-lg text-muted-foreground">What we deliver with every SEO engagement</p></div></AnimateOnScroll>
            <div className="grid sm:grid-cols-2 gap-4">
              {checklist.map((item, i) => (
                <AnimateOnScroll key={i} animation="stagger-in" delay={i * 60}>
                  <div className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></div>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll animation="fade-in"><div className="text-center mt-10"><Link to="/services"><Button size="lg" variant="outline">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div></AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Explore Related Services</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/web-design-ghana" className="p-5 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors text-center group"><h3 className="font-bold group-hover:text-primary transition-colors mb-1">Web Design</h3><p className="text-sm text-muted-foreground">Professional websites in Ghana</p></Link>
                <Link to="/digital-marketing-ghana" className="p-5 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors text-center group"><h3 className="font-bold group-hover:text-primary transition-colors mb-1">Digital Marketing</h3><p className="text-sm text-muted-foreground">Grow your online presence</p></Link>
                <Link to="/branding-agency-ghana" className="p-5 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors text-center group"><h3 className="font-bold group-hover:text-primary transition-colors mb-1">Branding & Design</h3><p className="text-sm text-muted-foreground">Build a memorable brand</p></Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoServicesGhanaPage;
