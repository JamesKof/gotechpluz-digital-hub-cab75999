import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette, CheckCircle2, ArrowRight, Sparkles, Layers, Award, Gem, ClipboardList, ExternalLink } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";

const QUESTIONNAIRE_URL = "https://forms.gle/YVXpRizgtv7GLcYs5";

const BrandingAgencyGhanaPage = () => {
  const { openWhatsApp } = useWhatsApp();

  usePageSEO({
    title: "Branding Agency in Ghana | Logo Design & Brand Identity Accra - Gotechpluz",
    description: "Professional branding agency in Ghana. Logo design, brand identity, graphic design services, packaging design, and marketing materials for businesses in Accra. Transform your brand with Gotechpluz.",
    canonical: `${BASE_URL}/branding-agency-ghana`,
    keywords: "branding agency Ghana, logo design company Ghana, graphic design services Accra, brand identity design Ghana, packaging design Ghana, branding services startups Ghana",
  });

  const handleWhatsApp = () => {
    openWhatsApp({
      source: "branding_agency_ghana_cta",
      message: "Hi Gotechpluz, I'm interested in your branding and design services.",
    });
  };

  const services = [
    { icon: Sparkles, title: "Logo Design", desc: "Distinctive, memorable logos that capture your brand essence and stand out in the Ghanaian market" },
    { icon: Layers, title: "Brand Identity Systems", desc: "Complete visual identity including color palettes, typography, brand guidelines, and design language" },
    { icon: Award, title: "Packaging Design", desc: "FDA-compliant packaging design for consumer products—from food brands to luxury goods" },
    { icon: Gem, title: "Marketing Collateral", desc: "Business cards, brochures, billboards, social media templates, and presentation decks" },
  ];

  const caseStudies = [
    { name: "Paully Rice", result: "300% brand recognition growth with premium packaging that earned FDA certification and 40+ retail partnerships", link: "/portfolio" },
    { name: "Emmaldo Ghana", result: "100% annual turnover increase through corporate rebranding and billboard campaigns across Accra", link: "/portfolio" },
    { name: "Sesi-Edem Gold", result: "Premium luxury positioning in the gold trading sector with trust-focused corporate identity", link: "/portfolio" },
    { name: "Hogbetsotso Festival", result: "500% social media engagement increase through heritage-focused cultural branding", link: "/portfolio" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Branding Agency in <span className="bg-gradient-primary bg-clip-text text-transparent">Ghana</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              From <strong>logo design</strong> to complete <strong>brand identity systems</strong>, we help businesses in Ghana build brands that customers remember, trust, and choose.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8">
              Whether you're a <strong>startup needing branding services in Ghana</strong> or an established business ready for a rebrand, our <strong>graphic design team in Accra</strong> delivers world-class results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={QUESTIONNAIRE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  <ClipboardList className="h-5 w-5 mr-2" /> Start Your Brand Project <ExternalLink className="h-4 w-4 ml-2" />
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
                Branding & Design <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground">Everything you need to build a powerful brand in Ghana</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {services.map((s, i) => {
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

      {/* Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Brands We've <span className="bg-gradient-primary bg-clip-text text-transparent">Transformed</span>
              </h2>
            </div>
            <div className="space-y-4">
              {caseStudies.map((cs, i) => (
                <Card key={cs.name} className="p-6 border-border hover:border-primary/30 transition-all animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{cs.name}</h3>
                      <p className="text-muted-foreground">{cs.result}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/portfolio">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/web-design-ghana" className="p-5 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors text-center group">
                <h3 className="font-bold group-hover:text-primary transition-colors mb-1">Web Design</h3>
                <p className="text-sm text-muted-foreground">Professional websites in Ghana</p>
              </Link>
              <Link to="/digital-marketing-ghana" className="p-5 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors text-center group">
                <h3 className="font-bold group-hover:text-primary transition-colors mb-1">Digital Marketing</h3>
                <p className="text-sm text-muted-foreground">Grow your online presence</p>
              </Link>
              <Link to="/seo-services-ghana" className="p-5 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors text-center group">
                <h3 className="font-bold group-hover:text-primary transition-colors mb-1">SEO Services</h3>
                <p className="text-sm text-muted-foreground">Rank higher on Google</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandingAgencyGhanaPage;
