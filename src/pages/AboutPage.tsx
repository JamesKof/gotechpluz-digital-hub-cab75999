import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Globe2, Shield, Lightbulb, Users, Heart, TrendingUp, Building2, Stethoscope, Truck, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const AboutPage = () => {
  usePageSEO({
    title: "About Gotechpluz | Best Digital Agency in Ghana - Web Development & IT Solutions",
    description: "Learn about Gotechpluz, Ghana's premier digital marketing agency and software development company in Accra. 5+ years serving government institutions, healthcare organizations, NGOs, and SMEs with professional web development, branding, and IT solutions.",
    canonical: `${BASE_URL}/about`,
    keywords: "about Gotechpluz, digital agency Ghana, professional web developers Ghana, experienced IT consultants Ghana, reliable digital marketing agency Ghana",
  });

  const whyChooseUs = [
    { icon: Lightbulb, title: "Exceptional Digital Experiences", description: "We craft world-class campaigns with unmatched style and execution, ensuring your digital presence is both captivating and effective." },
    { icon: Shield, title: "Strategic Budget Management", description: "Your investment matters to us. We optimize every dollar through continuous campaign refinement and precise tracking tools." },
    { icon: Users, title: "Proven Expertise", description: "Our team brings years of experience working with diverse clients—from multinational corporations to specialized startups." },
    { icon: Target, title: "Excellence-Driven Approach", description: "Good enough isn't in our vocabulary. We constantly seek growth opportunities and push boundaries." },
    { icon: Globe2, title: "Market Intelligence", description: "We provide deep insights into your target audience—from demographics to behavior patterns." },
  ];

  const openWhatsAppFromAbout = () => {
    const whatsappNumber = "233247233996";
    const whatsappMessage = encodeURIComponent("Hi Gotechpluz, I'd like to discuss a project.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!newWindow) { window.location.href = whatsappUrl; }
  };

  return (
    <div className="min-h-screen page-transition-enter">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="blur-in">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Gotechpluz</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">Ghana's Premier Digital Marketing Agency & Software Development Company</p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                For over five years, we've been the <strong>trusted IT solutions partner</strong> for government institutions, healthcare organizations, NGOs, and growing businesses across Ghana and beyond.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission, Vision, Global Reach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Our Mission", desc: "Empowering global success through innovative digital solutions that transform businesses and create lasting impact.", gradient: "bg-gradient-primary" },
                { icon: Eye, title: "Our Vision", desc: "To lead the digital revolution, shaping an innovative landscape that redefines success benchmarks for our global clientele.", gradient: "bg-gradient-accent" },
                { icon: Globe2, title: "Global Reach", desc: "Proudly serving clients across Switzerland, United States, United Kingdom, and expanding worldwide", gradient: "bg-primary/20 border-2 border-primary", iconClass: "text-primary" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimateOnScroll key={item.title} animation="fade-in-up" delay={index * 150}>
                    <Card className="p-8 text-center hover:shadow-medium transition-shadow border-primary/10 h-full">
                      <div className={`w-16 h-16 mx-auto mb-6 ${item.gradient} rounded-2xl flex items-center justify-center`}>
                        <Icon className={`h-8 w-8 ${item.iconClass || "text-white"}`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>?</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Five compelling reasons to choose Gotechpluz as your digital transformation partner</p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimateOnScroll key={item.title} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={index * 100}>
                    <Card className="p-8 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We <span className="bg-gradient-accent bg-clip-text text-transparent">Transform</span></h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  From <strong>web design for government institutions in Ghana</strong> to <strong>digital marketing for SMEs</strong>, we bring specialized expertise to every sector
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Building2, title: "Government & Public Sector", desc: "Web development for government institutions in Ghana requires security, reliability, and citizen-centric design.", note: "Trusted by: Ghana Immigration Service, Hogbetsotso Festival", gradient: "bg-gradient-primary" },
                { icon: Stethoscope, title: "Healthcare & NGOs", desc: "Website development for NGOs in Ghana and web development for healthcare institutions demands empathy-driven UX.", note: "Featured: Health Connect Platform, Viva Health Foundation", gradient: "bg-gradient-accent" },
                { icon: Truck, title: "Logistics & Trade", desc: "IT solutions for logistics companies in Ghana power seamless operations.", note: "Solutions: Transit Gateway, Ghana Exim Platform", gradient: "bg-primary/20 border-2 border-primary", iconClass: "text-primary" },
                { icon: ShoppingBag, title: "SMEs & Startups", desc: "Branding services for startups in Ghana and digital marketing for SMEs require agility and impact.", note: "Success Stories: Emmaldo, Paully Rice, Sesi-Edem Gold", gradient: "bg-gradient-primary" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimateOnScroll key={item.title} animation="stagger-in" delay={index * 120}>
                    <Card className="p-8 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 h-full">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-7 w-7 ${item.iconClass || "text-white"}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-muted-foreground mb-3"><strong>{item.desc}</strong></p>
                          <p className="text-sm text-primary font-medium">{item.note}</p>
                        </div>
                      </div>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>

            <AnimateOnScroll animation="fade-in">
              <div className="text-center">
                <Link to="/portfolio">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">View Our Portfolio <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Local Implementing Partner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                  <Globe2 className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Local Partner, Global Standards</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Your Trusted <span className="bg-gradient-accent bg-clip-text text-transparent">Local Implementing Partner</span> in Ghana & Africa
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Does your international project require a local partner on the ground? We are your most capable implementing partner in Ghana and across Africa.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <Card className="p-8 md:p-12 bg-gradient-to-br from-muted/30 to-background border-accent/10 mb-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Why Partner With Gotechpluz?</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      International organizations, NGOs, development agencies, and global enterprises often require a <strong>reliable local partner</strong> to execute digital projects in Ghana and West Africa. Gotechpluz bridges the gap between global vision and local execution.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We bring <strong>on-the-ground expertise</strong>, cultural intelligence, regulatory knowledge, and a proven track record with government institutions and international stakeholders — making us the ideal local implementation arm for your projects.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Local Expertise", desc: "Deep knowledge of Ghanaian regulations, culture & business landscape" },
                      { title: "Government Relations", desc: "Established relationships with public sector institutions" },
                      { title: "On-Ground Execution", desc: "Physical presence for deployment, training & support" },
                      { title: "International Standards", desc: "Global-grade quality, security & compliance" },
                    ].map((item) => (
                      <div key={item.title} className="p-4 bg-background rounded-xl border border-border hover:border-accent/30 transition-colors">
                        <div className="text-accent font-bold mb-1 text-sm">{item.title}</div>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll animation="stagger-in">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {[
                  { icon: Shield, title: "Compliance & Governance", desc: "We navigate local regulatory frameworks so you don't have to" },
                  { icon: Users, title: "Stakeholder Management", desc: "On-ground liaison with local partners, vendors, and government bodies" },
                  { icon: Globe2, title: "Multi-Country Reach", desc: "Expanding presence across West Africa for regional projects" },
                  { icon: Target, title: "End-to-End Delivery", desc: "From planning to deployment, training, and ongoing support" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="p-6 text-center hover:shadow-medium transition-all duration-300 group border-border hover:border-accent/30 h-full" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </Card>
                  );
                })}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Have an international project that needs local implementation?</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="https://forms.gle/YVXpRizgtv7GLcYs5" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-gradient-accent hover:opacity-90">Partner With Us <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </a>
                  <Button size="lg" variant="outline" type="button" onClick={openWhatsAppFromAbout}>Chat on WhatsApp</Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="bg-gradient-primary bg-clip-text text-transparent">Approach</span></h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  You need a new approach to capturing attention, earning customer loyalty, and proving the value of every investment.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Users, title: "Listen", desc: "We start by understanding your business goals, challenges, and target audience" },
                { icon: Lightbulb, title: "Research & Plan", desc: "Deep market analysis and strategic planning to identify opportunities" },
                { icon: Target, title: "Implement", desc: "Execute with precision using cutting-edge technologies" },
                { icon: Shield, title: "Test", desc: "Rigorous quality assurance and testing to ensure flawless performance" },
                { icon: TrendingUp, title: "Launch", desc: "Strategic deployment with comprehensive monitoring and optimization" },
                { icon: Heart, title: "Grow", desc: "Continuous improvement and scaling through analytics and feedback" },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <AnimateOnScroll key={step.title} animation="stagger-in" delay={index * 100}>
                    <Card className="p-8 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 h-full">
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
                  </AnimateOnScroll>
                );
              })}
            </div>

            <AnimateOnScroll animation="fade-in-up">
              <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 border border-primary/10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Core <span className="bg-gradient-accent bg-clip-text text-transparent">Values</span></h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">The principles that guide everything we do</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[
                    { icon: Heart, title: "Client Satisfaction", desc: "Your success is our ultimate goal" },
                    { icon: Lightbulb, title: "Innovation & Creativity", desc: "Pushing boundaries with fresh ideas" },
                    { icon: Shield, title: "Transparency & Integrity", desc: "Honest communication, always" },
                    { icon: TrendingUp, title: "Continuous Learning", desc: "Evolving with technology" },
                  ].map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={value.title} className="bg-background/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-background transition-colors">
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
                  <p className="text-lg text-muted-foreground mb-6">Ready to transform your business? Let's have a friendly chat.</p>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-wrap gap-4 justify-center">
                      <a href="tel:0247233996">
                        <Button size="lg" className="bg-gradient-primary hover:opacity-90">Call: 024 723 3996</Button>
                      </a>
                      <Button size="lg" variant="outline" type="button" onClick={openWhatsAppFromAbout}>Chat on WhatsApp</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">WhatsApp opens in a new tab. If nothing happens, please allow popups and try again.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
