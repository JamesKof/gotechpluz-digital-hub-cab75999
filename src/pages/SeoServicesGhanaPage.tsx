import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, CheckCircle2, ArrowRight, Globe, BarChart3, TrendingUp, MapPin, ClipboardList, ExternalLink } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";

const QUESTIONNAIRE_URL = "https://forms.gle/YVXpRizgtv7GLcYs5";

const SeoServicesGhanaPage = () => {
  const { openWhatsApp } = useWhatsApp();

  usePageSEO({
    title: "SEO Services in Ghana | Search Engine Optimization Accra - Gotechpluz",
    description: "Professional SEO services in Ghana. On-page SEO, off-page SEO, local SEO for businesses in Accra, Google search optimization, and analytics. Rank higher and get more customers.",
    canonical: `${BASE_URL}/seo-services-ghana`,
    keywords: "SEO services Ghana, search engine optimization Accra, local SEO Ghana, Google ranking Ghana, on-page SEO Ghana, off-page SEO Ghana, SEO checklist for businesses Ghana",
  });

  const handleWhatsApp = () => {
    openWhatsApp({
      source: "seo_services_ghana_cta",
      message: "Hi Gotechpluz, I'm interested in your SEO services in Ghana.",
    });
  };

  const seoServices = [
    { icon: Globe, title: "On-Page SEO", desc: "Keyword research, meta tag optimization, content structuring, heading hierarchy, and internal linking to make your website Google-friendly" },
    { icon: TrendingUp, title: "Off-Page SEO", desc: "Quality backlink building, guest posting, directory submissions, and digital PR to boost your domain authority" },
    { icon: MapPin, title: "Local SEO", desc: "Google Business Profile optimization, local citations, review management, and map pack ranking for businesses in Accra and across Ghana" },
    { icon: BarChart3, title: "Technical SEO & Analytics", desc: "Site speed optimization, mobile responsiveness, crawl error fixes, schema markup, and Google Analytics/Search Console setup" },
  ];

  const checklist = [
    "Google Business Profile setup and optimization",
    "Keyword research targeting Ghanaian search terms",
    "On-page SEO for all website pages",
    "Schema markup for rich search results",
    "Mobile-first responsive design audit",
    "Page speed optimization for Ghanaian internet",
    "Monthly ranking reports and traffic analysis",
    "Competitor analysis and gap identification",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              SEO Services in <span className="bg-gradient-primary bg-clip-text text-transparent">Ghana</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Get your business found on Google. Our <strong>search engine optimization services in Accra</strong> help businesses rank higher, attract more visitors, and convert them into customers.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8">
              From <strong>local SEO for businesses in Accra</strong> to <strong>national ranking strategies</strong>, we make sure your website works as hard as you do.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={QUESTIONNAIRE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  <ClipboardList className="h-5 w-5 mr-2" /> Get SEO Audit <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={handleWhatsApp}>
                Chat on WhatsApp <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive SEO <span className="bg-gradient-accent bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground">Everything your business needs to dominate Google search in Ghana</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {seoServices.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Card key={s.title} className="p-8 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                        <p className="text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Checklist */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                SEO Checklist for Businesses in <span className="bg-gradient-primary bg-clip-text text-transparent">Ghana</span>
              </h2>
              <p className="text-lg text-muted-foreground">What we deliver with every SEO engagement</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
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

export default SeoServicesGhanaPage;
