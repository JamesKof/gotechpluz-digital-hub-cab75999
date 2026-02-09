import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Lightbulb, Palette, Rocket, BarChart3, ArrowRight, CheckCircle2, Send } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const ProcessPage = () => {
  const { openWhatsApp } = useWhatsApp();

  usePageSEO({
    title: "How We Work | Our Digital Project Process - Gotechpluz Ghana",
    description: "Discover Gotechpluz's proven 5-step process for web development, digital marketing, and branding projects in Ghana.",
    canonical: `${BASE_URL}/process`,
    keywords: "web development process Ghana, digital project methodology, how we work Gotechpluz, project delivery Ghana",
  });

  const handleWhatsAppClick = () => {
    openWhatsApp({ source: "process_cta", message: "Hi Gotechpluz, I'd like to discuss my project and learn more about your process.", toastTitle: "Opening WhatsApp" });
  };

  const processSteps = [
    { number: "01", title: "Research & Discovery", subtitle: "Understanding Your Vision", icon: Search, color: "from-blue-500 to-cyan-500", description: "Every successful project begins with deep understanding.", activities: ["Stakeholder interviews and requirement gathering", "Market research and competitive analysis", "Target audience profiling and user research", "Brand audit and positioning assessment", "Technical feasibility evaluation", "Project scope definition and success metrics"], deliverables: "Discovery Report, User Personas, Competitive Analysis, Project Brief", duration: "1-2 weeks" },
    { number: "02", title: "Strategy & Concept Development", subtitle: "Crafting the Blueprint", icon: Lightbulb, color: "from-purple-500 to-pink-500", description: "We develop strategic concepts that align with your objectives.", activities: ["Brand strategy and messaging framework", "Information architecture and user flows", "Wireframing and concept visualization", "Content strategy and copywriting direction", "Technical architecture planning", "Project timeline and milestone planning"], deliverables: "Brand Strategy Document, Wireframes, Site Map, Technical Specifications", duration: "1-2 weeks" },
    { number: "03", title: "Design & Development", subtitle: "Bringing Ideas to Life", icon: Palette, color: "from-orange-500 to-red-500", description: "This is where creativity meets execution.", activities: ["Visual design and brand identity creation", "UI/UX design with interactive prototypes", "Responsive frontend development", "Backend systems and database architecture", "Content integration and optimization", "Iterative testing and quality assurance"], deliverables: "Design Mockups, Brand Assets, Functional Prototype, Tested Application", duration: "3-6 weeks" },
    { number: "04", title: "Deployment & Promotion", subtitle: "Launching Your Success", icon: Rocket, color: "from-green-500 to-emerald-500", description: "A great product deserves a great launch.", activities: ["Production environment setup and configuration", "Performance optimization and security hardening", "Domain configuration and SSL certification", "Launch strategy and marketing campaign support", "Social media and digital promotion", "Team training and documentation"], deliverables: "Live Website/App, Marketing Materials, Training Sessions, Launch Report", duration: "1-2 weeks" },
    { number: "05", title: "Monitoring, Optimization & Support", subtitle: "Ensuring Long-Term Success", icon: BarChart3, color: "from-indigo-500 to-blue-500", description: "Our partnership doesn't end at launch.", activities: ["Performance analytics and reporting", "User behavior analysis and insights", "Conversion rate optimization (CRO)", "Regular maintenance and security updates", "Feature enhancements and iterations", "Priority support and consultation"], deliverables: "Monthly Reports, Performance Dashboards, Optimization Recommendations", duration: "Ongoing" },
  ];

  const whyOurProcess = [
    { title: "Client-Centric Approach", description: "Your business goals drive every decision." },
    { title: "Transparent Communication", description: "Regular updates, clear milestones, and open channels." },
    { title: "Proven Methodology", description: "Our refined process has delivered success across healthcare, finance, agribusiness, and more." },
    { title: "Quality Assurance", description: "Rigorous testing and attention to detail ensure deliverables that meet the highest standards." },
  ];

  return (
    <div className="min-h-screen page-transition-enter">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="blur-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <p className="text-primary font-semibold text-sm">Our Methodology • Your Success</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">How We <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span></h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven, process-driven approach that transforms ideas into impactful digital solutions.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.number} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={0}>
                  <div className="relative mb-16 last:mb-0">
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute left-1/2 top-full h-16 w-0.5 bg-gradient-to-b from-primary/30 to-transparent -translate-x-1/2" />
                    )}
                    <Card className="overflow-hidden border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium">
                      <div className={`bg-gradient-to-r ${step.color} p-6 md:p-8 text-white`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <Icon className="h-7 w-7" />
                          </div>
                          <div>
                            <span className="text-white/70 text-sm font-medium">Step {step.number}</span>
                            <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
                          </div>
                        </div>
                        <p className="text-white/90 text-lg">{step.subtitle}</p>
                      </div>
                      <div className="p-6 md:p-8">
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} /> Key Activities
                            </h3>
                            <ul className="space-y-3">
                              {step.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                                  <span className="text-muted-foreground">{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} /> Deliverables
                              </h3>
                              <p className="text-muted-foreground">{step.deliverables}</p>
                            </div>
                            <div>
                              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} /> Timeline
                              </h3>
                              <p className="text-muted-foreground">{step.duration}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll animation="fade-in-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Process <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span></h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our methodology is refined through years of delivering successful projects</p>
              </div>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyOurProcess.map((item, index) => (
                <AnimateOnScroll key={item.title} animation="stagger-in" delay={index * 100}>
                  <Card className="p-6 hover:shadow-medium transition-all duration-300 border-border hover:border-primary/30 h-full">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="scale-in">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-hero border-primary/10">
                <div className="text-center mb-8">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">Process in Action</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">The Paully Rice Success Story</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    See how our process transformed a local rice brand into a market leader with 300% brand recognition growth.
                  </p>
                </div>
                <div className="grid md:grid-cols-5 gap-4 mb-8">
                  {processSteps.map((step) => (
                    <div key={step.number} className="text-center p-4 bg-background/50 rounded-xl">
                      <div className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>{step.number}</div>
                      <p className="text-xs font-medium text-muted-foreground">{step.title.split(' ')[0]}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link to="/portfolio">
                    <Button size="lg" variant="outline" className="group">View Full Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Button>
                  </Link>
                </div>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Project</span>?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Let's discuss your vision and show you how our process can bring it to life.</p>
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90" onClick={handleWhatsAppClick}>Chat on WhatsApp <Send className="ml-2 h-4 w-4" /></Button>
                  <Link to="/portfolio"><Button size="lg" variant="outline">View Our Work <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                </div>
                <p className="text-xs text-muted-foreground">WhatsApp opens in a new tab.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessPage;
