import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone, CheckCircle2, ArrowRight, BarChart3, Users, TrendingUp, Search, ClipboardList, ExternalLink } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";

const QUESTIONNAIRE_URL = "https://forms.gle/YVXpRizgtv7GLcYs5";

const DigitalMarketingGhanaPage = () => {
  const { openWhatsApp } = useWhatsApp();

  usePageSEO({
    title: "Digital Marketing Agency in Ghana | Social Media & SEO Services Accra - Gotechpluz",
    description: "Ghana's leading digital marketing agency. Social media marketing, Google Ads management, content marketing, and online advertising for businesses in Accra. Proven results for SMEs and enterprises.",
    canonical: `${BASE_URL}/digital-marketing-ghana`,
    keywords: "digital marketing services Ghana, social media marketing agency Ghana, Google Ads management Ghana, content marketing services Ghana, online advertising Ghana, digital marketing for SMEs Ghana",
  });

  const handleWhatsApp = () => {
    openWhatsApp({
      source: "digital_marketing_ghana_cta",
      message: "Hi Gotechpluz, I'm interested in your digital marketing services.",
    });
  };

  const services = [
    { icon: Users, title: "Social Media Marketing", desc: "Strategic campaigns on Instagram, Facebook, TikTok, and LinkedIn to grow your audience and drive engagement across Ghana" },
    { icon: Search, title: "Google Ads Management", desc: "Targeted PPC campaigns that put your business in front of people actively searching for your products or services" },
    { icon: BarChart3, title: "Content Marketing", desc: "Blog posts, videos, and social content that establish your authority and attract organic traffic from search engines" },
    { icon: TrendingUp, title: "Analytics & Reporting", desc: "Data-driven insights and monthly reports showing exactly how your marketing investment translates to business results" },
  ];

  const results = [
    "Emmaldo Ghana: 100% annual turnover increase through billboard + digital campaigns",
    "Paully Rice: 300% brand recognition growth via strategic branding",
    "Hogbetsotso Festival: 500% social media engagement increase",
    "Viva Health Foundation: 300% donation increase through digital outreach",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Marketing Agency in <span className="bg-gradient-primary bg-clip-text text-transparent">Ghana</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              We help businesses in Ghana grow online through <strong>social media marketing</strong>, <strong>Google Ads</strong>, <strong>content marketing</strong>, and data-driven strategies that deliver measurable ROI.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8">
              Whether you're an SME in Accra or an enterprise expanding across Africa, our <strong>digital marketing services in Ghana</strong> are designed to accelerate your growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={QUESTIONNAIRE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  <ClipboardList className="h-5 w-5 mr-2" /> Request Free Consultation <ExternalLink className="h-4 w-4 ml-2" />
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
                Our Digital Marketing <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground">Comprehensive online marketing solutions for businesses in Ghana</p>
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

      {/* Proven Results */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proven <span className="bg-gradient-primary bg-clip-text text-transparent">Results</span> for Ghanaian Businesses
              </h2>
            </div>
            <div className="space-y-4">
              {results.map((r, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-background rounded-xl border border-border animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/portfolio">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
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
              <Link to="/seo-services-ghana" className="p-5 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors text-center group">
                <h3 className="font-bold group-hover:text-primary transition-colors mb-1">SEO Services</h3>
                <p className="text-sm text-muted-foreground">Rank higher on Google</p>
              </Link>
              <Link to="/branding-agency-ghana" className="p-5 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors text-center group">
                <h3 className="font-bold group-hover:text-primary transition-colors mb-1">Branding & Design</h3>
                <p className="text-sm text-muted-foreground">Build a memorable brand</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketingGhanaPage;
