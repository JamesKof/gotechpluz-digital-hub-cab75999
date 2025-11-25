import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Briefcase, ExternalLink } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Talent Homecare Projects",
      description: "Comprehensive healthcare management solutions featuring patient scheduling, care coordination, and staff management systems designed for modern homecare operations.",
      category: "Healthcare",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Prudential Insurance Website",
      description: "Professional insurance platform with integrated client portal, policy management, claims processing, and secure document handling for streamlined operations.",
      category: "Insurance",
      tech: ["Next.js", "TypeScript", "MongoDB"]
    },
    {
      title: "Welhaven Homecare Application",
      description: "Cross-platform mobile applications for iOS and Android providing real-time care updates, scheduling, and communication between caregivers and families.",
      category: "Healthcare Mobile",
      tech: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "Corporate Brand Identity Suite",
      description: "Complete brand identity design including logo creation, brand guidelines, marketing collateral, and visual assets for multiple international clients.",
      category: "Branding",
      tech: ["Adobe Creative Suite", "Figma"]
    },
    {
      title: "E-commerce Platform Development",
      description: "Full-featured online shopping platform with inventory management, secure payment processing, order tracking, and customer relationship management.",
      category: "E-commerce",
      tech: ["Shopify", "React", "Stripe API"]
    },
    {
      title: "Digital Marketing Campaign Suite",
      description: "Multi-channel marketing campaigns including social media management, content creation, SEO optimization, and analytics tracking for global brands.",
      category: "Marketing",
      tech: ["Google Analytics", "SEMrush", "Hootsuite"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing excellence across diverse industries and technologies
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Featured Work</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Delivering <span className="bg-gradient-accent bg-clip-text text-transparent">Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From healthcare solutions to e-commerce platforms, we bring diverse projects to life with precision and creativity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="p-8 hover:shadow-medium transition-all duration-300 group cursor-pointer border-border hover:border-primary/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Briefcase className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                    View Project <ExternalLink className="h-4 w-4" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-hero border-primary/10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life. Our team is ready to transform your ideas into reality.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="inline-block">
                  <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </a>
                <a href="/services" className="inline-block">
                  <button className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                    Explore Services
                  </button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
