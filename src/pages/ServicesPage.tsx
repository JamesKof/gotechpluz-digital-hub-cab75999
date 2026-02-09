import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Megaphone, Palette, ShoppingCart, Smartphone, Video, Search, BarChart3, Globe, Layers, LineChart, Sparkles, ClipboardList, ExternalLink, ArrowRight, HelpCircle } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const QUESTIONNAIRE_URL = "https://forms.gle/YVXpRizgtv7GLcYs5";

const ServicesPage = () => {
  usePageSEO({
    title: "Digital Marketing & Web Development Services in Ghana | Gotechpluz",
    description: "Professional website design services, SEO, digital marketing, branding, mobile app development, e-commerce solutions & IT consultancy in Ghana. Affordable web design in Accra. Custom software development for businesses.",
    canonical: `${BASE_URL}/services`,
    keywords: "website design services Ghana, digital marketing services Ghana, SEO services Ghana, branding agency Ghana, e-commerce website development Ghana, mobile app development Ghana, IT support services Ghana, business IT solutions Ghana",
  });
  const { openWhatsApp } = useWhatsApp();
  
  const openWhatsAppFromServices = () => {
    openWhatsApp({
      source: "services_cta",
      message: "Hi Gotechpluz, I'm interested in your services and would like to discuss a project.",
    });
  };
  const services = [
    { icon: Code, title: "Web Development", description: "Professional website design and custom web application development for businesses in Ghana and beyond", features: ["Business Website Development", "Corporate Website Design", "Custom Web Applications", "Responsive Design"] },
    { icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android that engage users", features: ["iOS App Development", "Android Development", "React Native Apps", "Cross-Platform Solutions"] },
    { icon: ShoppingCart, title: "E-commerce Solutions", description: "E-commerce website development in Ghana with secure payment integration and inventory management", features: ["Online Store Development", "Payment Gateway Integration", "Inventory Management", "Order Tracking Systems"] },
    { icon: Palette, title: "Graphic Design & Branding", description: "Professional branding agency services in Ghana—from logo design to complete brand identity systems", features: ["Logo Design", "Brand Identity Design", "Marketing Materials", "Print & Digital Graphics"] },
    { icon: Megaphone, title: "Digital Marketing", description: "Comprehensive digital marketing services in Ghana to amplify your online presence and drive conversions", features: ["Social Media Marketing", "Content Marketing Strategy", "Email Campaign Management", "Brand Management"] },
    { icon: Search, title: "SEO & SEM", description: "SEO services in Ghana and Google Ads management to boost your visibility in search results", features: ["On-page SEO Optimization", "Off-page SEO Strategy", "Google Ads Management", "Analytics & Reporting"] },
    { icon: Video, title: "Media Production", description: "High-quality video production, motion graphics, and live streaming services for brands", features: ["Video Production", "Motion Graphics", "Animation", "Live Event Streaming"] },
    { icon: BarChart3, title: "IT Consultancy", description: "Business IT solutions in Ghana—custom software, ERP systems, POS, and management solutions", features: ["ERP Systems", "CRM Solutions", "POS Systems", "Custom Software Development"] },
  ];

  const additionalServices = [
    { icon: Globe, title: "Website Design", subtitle: "World-class aesthetics", description: "Our agency specializes in creating visually stunning and engaging websites that drive business growth and enhance user experience." },
    { icon: Layers, title: "UX Design", subtitle: "User interface excellence", description: "We deliver world-class user experience design and corporate branding that meets and exceeds industry standards, ensuring seamless interactions." },
    { icon: LineChart, title: "Content Marketing", subtitle: "Strategic storytelling", description: "Leverage interactive marketing to captivate your audience through powerful visual storytelling with highly personalized and immersive content experiences." },
  ];

  return (
    <div className="min-h-screen page-transition-enter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="blur-in">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Digital Solutions That <span className="bg-gradient-primary bg-clip-text text-transparent">Drive Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                From <strong>website design services in Ghana</strong> to <strong>digital marketing</strong> and <strong>IT consultancy</strong>—we offer end-to-end solutions that transform businesses.
              </p>
              <p className="text-lg text-muted-foreground/80">
                As a <strong>leading web development company in Accra</strong>, we connect technology, marketing, and creativity.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What We <span className="bg-gradient-accent bg-clip-text text-transparent">Offer</span>
                </h2>
                <p className="text-lg text-muted-foreground">End-to-end digital services to transform your business</p>
              </div>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AnimateOnScroll key={service.title} animation="stagger-in" delay={index * 80}>
                    <Card className="p-6 hover:shadow-medium transition-all duration-300 group cursor-pointer border-border hover:border-primary/30 h-full">
                      <div className="w-14 h-14 mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Specialized <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
                </h2>
                <p className="text-lg text-muted-foreground">Focused expertise in key areas of digital excellence</p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AnimateOnScroll key={service.title} animation="scale-in" delay={index * 150}>
                    <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 group h-full">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-sm text-accent font-semibold mb-4 uppercase tracking-wide">{service.subtitle}</p>
                      <p className="text-muted-foreground">{service.description}</p>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Local Implementing Partner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-muted/30 to-background border-accent/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
                    <Globe className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">International Projects</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Need a <span className="bg-gradient-accent bg-clip-text text-transparent">Local Implementing Partner</span>?
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We are your most capable local partner in Ghana and Africa. Whether your project requires on-ground execution, government relations, regulatory compliance, or stakeholder management — Gotechpluz delivers international standards with local expertise.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/about">
                    <Button className="bg-gradient-accent hover:opacity-90">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={openWhatsAppFromServices}>
                    Discuss Partnership
                  </Button>
                </div>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-in-right">
              <Card className="p-8 md:p-12 bg-gradient-hero border-primary/10">
                <div className="text-center mb-8">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h2 className="text-3xl font-bold mb-4">A New Approach to Digital Success</h2>
                </div>
                <div className="space-y-6 text-muted-foreground">
                  <p>You need a fresh strategy for capturing attention, building customer loyalty, and demonstrating the tangible value of your marketing investments. That's precisely where we excel.</p>
                  <p>We participate actively in our clients' digital transformation journeys. Our mission is to create exceptional digital products rooted in innovation.</p>
                  <p>We connect authentically with users by studying behavior patterns and defining strategic approaches that generate visibility and brand recognition.</p>
                </div>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Common Questions About Our <span className="bg-gradient-accent bg-clip-text text-transparent">Digital Services</span>
                </h2>
                <p className="text-lg text-muted-foreground">Answers to what businesses in Ghana ask us most</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="cost" className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline">How much does website design cost in Ghana?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Website design costs in Ghana vary depending on complexity, features, and the type of website you need. A basic business website typically starts from GHS 3,000–5,000, while custom web applications and e-commerce platforms range from GHS 8,000–25,000+. At Gotechpluz, we provide transparent pricing with a detailed proposal after understanding your requirements. <Link to="/process" className="text-primary hover:underline">Learn about our process</Link> or <a href="https://forms.gle/YVXpRizgtv7GLcYs5" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">fill out our questionnaire</a> for a custom quote.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="best-agency" className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline">What is the best digital marketing agency for small businesses in Ghana?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    The best digital marketing agency for small businesses in Ghana combines affordability with proven results. Gotechpluz has helped SMEs like Emmaldo Ghana Limited achieve 100% annual turnover increase and Paully Rice gain 300% brand recognition growth. <Link to="/portfolio" className="text-primary hover:underline">See our case studies</Link>.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="affordable" className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline">Where can I find affordable web design services in Accra?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Gotechpluz offers affordable web design services in Accra without compromising on quality. Based in Accra, we've built websites for government institutions, healthcare organizations, and growing businesses across Ghana.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="promote-online" className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline">How do I promote my business online in Ghana?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Promoting your business online in Ghana requires a multi-channel strategy: a professional website optimized for Google search, active social media presence, Google Ads for immediate visibility, and SEO for long-term organic traffic. <Link to="/digital-marketing-ghana" className="text-primary hover:underline">Learn about our digital marketing services</Link>.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="wordpress-vs-custom" className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline">What's the difference between WordPress and custom website development in Ghana?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    WordPress is a pre-built CMS ideal for blogs and simple business sites. Custom website development offers complete control over design, features, and performance—perfect for complex applications or government portals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="seo-ghana" className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline">How long does SEO take to work for businesses in Ghana?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    SEO results typically take 3–6 months to become noticeable, depending on your industry competition and current website health. <Link to="/seo-services-ghana" className="text-primary hover:underline">Explore our SEO services</Link>.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ecommerce" className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline">Can you build an e-commerce website with mobile money payment in Ghana?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes! We specialize in e-commerce website development in Ghana with full integration of local payment gateways including Mobile Money (MTN MoMo, Vodafone Cash, AirtelTigo Money), as well as international options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="government" className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline">Do you build websites for government institutions in Ghana?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Absolutely. Gotechpluz is a trusted web development partner for government institutions in Ghana. We've built secure platforms for the Ghana Immigration Service and digital solutions for the Ghana EXIM Bank. <Link to="/portfolio" className="text-primary hover:underline">View our government projects</Link>.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Get Started</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">Complete our Website Development Questionnaire for a comprehensive project assessment and custom quote.</p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a href={QUESTIONNAIRE_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    <ClipboardList className="h-5 w-5 mr-2" /> Start Questionnaire <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <Button size="lg" variant="outline" onClick={openWhatsAppFromServices}>
                  Chat on WhatsApp <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Or scroll down to chat with us on WhatsApp for quick inquiries</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
