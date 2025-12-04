import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Award, 
  Star,
  ExternalLink,
  Smartphone,
  Globe,
  ShoppingCart,
  Heart,
  Building2,
  Send
} from "lucide-react";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import PortfolioSkeleton from "@/components/PortfolioSkeleton";
import ghanaEximHero from "@/assets/portfolio-ghana-exim.jpg";
import healthConnectHero from "@/assets/portfolio-health-connect.jpg";
import transitGatewayHero from "@/assets/portfolio-transit-gateway.jpg";
import alorConnectHero from "@/assets/portfolio-alor-connect.jpg";
import vivaHealthHero from "@/assets/portfolio-viva-health.jpg";
import prudentialHero from "@/assets/portfolio-prudential.jpg";
import { trackWhatsAppClick } from "@/lib/analytics";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for images and content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "Government",
    "Healthcare",
    "Finance",
    "E-commerce",
    "Branding"
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Ghana EXIM Bank Digital Platform",
      client: "Ghana Export-Import Bank",
      category: "Web Development",
      tags: ["Web Development", "Finance", "Government"],
      link: "https://ghana-exim.vercel.app/",
      description: "Complete digital banking platform for Ghana's principal export finance institution, providing innovative financial solutions to boost exports and strengthen economic ties across Africa.",
      challenge: "Ghana EXIM Bank needed a modern, secure platform to serve exporters, provide facility applications, and deliver real-time information about trade finance products while maintaining government-level security standards.",
      solution: "We built a comprehensive web platform with secure facility applications, product showcases, real-time updates, integrated payment systems, and a responsive design optimized for mobile banking.",
      results: [
        { metric: "300%", label: "Increase in online applications" },
        { metric: "65%", label: "Processing speed improvement" },
        { metric: "4.9/5", label: "User satisfaction rating" },
        { metric: "24/7", label: "Service availability" }
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Security Protocols"],
      heroImage: ghanaEximHero,
      testimonial: {
        quote: "Gotechpluz delivered a world-class platform that has revolutionized how we serve Ghana's exporters. The system is secure, intuitive, and has significantly improved our service delivery.",
        author: "Chief Digital Officer",
        company: "Ghana EXIM Bank"
      },
      icon: Building2,
      color: "from-blue-600 to-yellow-500"
    },
    {
      id: 2,
      title: "Ghana Health Connect - NHIS Platform",
      client: "National Health Insurance Scheme",
      category: "Web Development",
      tags: ["Web Development", "Healthcare", "Government"],
      link: "https://ghana-health-connect.vercel.app/",
      description: "Comprehensive national health insurance platform providing financial access to quality healthcare for all residents in Ghana, covering 95% of disease conditions across 16 regions.",
      challenge: "The NHIS needed a modern digital platform to manage millions of members, provide registration services, facility locators, and deliver health information while ensuring data security and accessibility.",
      solution: "We developed a full-featured healthcare platform with member registration, facility finder, claims management, mobile-responsive design, and secure patient data handling.",
      results: [
        { metric: "2M+", label: "Active members" },
        { metric: "4000+", label: "Facilities connected" },
        { metric: "95%", label: "Disease coverage" },
        { metric: "16", label: "Regions served" }
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "HIPAA Compliance"],
      heroImage: healthConnectHero,
      testimonial: {
        quote: "The platform has transformed how Ghanaians access healthcare information and services. It's user-friendly, secure, and has significantly improved our operational efficiency.",
        author: "Digital Health Director",
        company: "Ghana Health Connect"
      },
      icon: Heart,
      color: "from-blue-500 to-green-500"
    },
    {
      id: 3,
      title: "Ghana Immigration Service Portal",
      client: "Ghana Immigration Service",
      category: "Government Portal",
      tags: ["Web Development", "Government"],
      link: "https://ghana-transit-gateway.vercel.app/",
      description: "Official government service portal for the Ghana Immigration Service, regulating migration and facilitating mobility with professional service delivery and national security focus.",
      challenge: "GIS needed a comprehensive digital platform for visa applications, permit processing, status tracking, and providing information to citizens and visitors while maintaining high security standards.",
      solution: "We created a secure government portal with online applications, document upload, real-time status tracking, appointment booking, multilingual support, and integrated payment systems.",
      results: [
        { metric: "400%", label: "Increase in online applications" },
        { metric: "70%", label: "Processing time reduction" },
        { metric: "30M+", label: "Population served" },
        { metric: "24/7", label: "Service access" }
      ],
      technologies: ["React", "TypeScript", "Government Security Standards", "PostgreSQL", "Payment Gateway"],
      heroImage: transitGatewayHero,
      testimonial: {
        quote: "This platform has modernized our operations and significantly improved service delivery to Ghanaians and visitors alike. It's secure, efficient, and user-friendly.",
        author: "Director of Digital Services",
        company: "Ghana Immigration Service"
      },
      icon: Globe,
      color: "from-green-600 to-yellow-500"
    },
    {
      id: 4,
      title: "Alor & Associates Business Hub",
      client: "Alor & Associates",
      category: "Corporate Website",
      tags: ["Web Development", "Branding"],
      link: "https://alor-connect-gh.vercel.app/",
      description: "Premier business consulting and advisory services platform helping organizations across Ghana achieve sustainable growth and excellence through professional services.",
      challenge: "Alor & Associates needed a professional digital presence to showcase their consulting services, build credibility, and attract corporate clients in Ghana's competitive market.",
      solution: "We built a sophisticated corporate website with service showcases, case study galleries, client testimonials, contact forms, and a professional design reflecting their industry expertise.",
      results: [
        { metric: "200+", label: "Active clients" },
        { metric: "150%", label: "Lead generation increase" },
        { metric: "95%", label: "Client satisfaction" },
        { metric: "15+", label: "Years of experience" }
      ],
      technologies: ["React", "Tailwind CSS", "TypeScript", "SEO Optimization", "Analytics"],
      heroImage: alorConnectHero,
      testimonial: {
        quote: "Gotechpluz created a website that truly represents our brand and professionalism. We've seen a significant increase in inquiries from high-quality clients.",
        author: "Managing Partner",
        company: "Alor & Associates"
      },
      icon: Building2,
      color: "from-blue-700 to-indigo-600"
    },
    {
      id: 5,
      title: "Viva Health Foundation Platform",
      client: "Viva Health Medical Foundation",
      category: "Non-Profit Healthcare",
      tags: ["Web Development", "Mobile Apps", "Healthcare"],
      link: "https://vivahealth.vercel.app/",
      description: "Non-profit healthcare organization platform empowering lives through medical outreach, free screenings, and accessible health education for underserved communities.",
      challenge: "Viva Health needed a digital platform to showcase programs, accept donations, recruit volunteers, share impact stories, and manage community health initiatives efficiently.",
      solution: "We developed a comprehensive non-profit platform with donation integration, volunteer management, program showcases, blog features, gallery, and mobile-optimized design.",
      results: [
        { metric: "6+", label: "Years of impact" },
        { metric: "1000+", label: "Lives touched" },
        { metric: "50+", label: "Active volunteers" },
        { metric: "300%,", label: "Donation increase" }
      ],
      technologies: ["React", "Stripe Donations", "Content Management", "Mobile Responsive", "SEO"],
      heroImage: vivaHealthHero,
      testimonial: {
        quote: "The platform has helped us reach more communities and volunteers. It beautifully tells our story and has increased both donations and volunteer signups significantly.",
        author: "Founder",
        company: "Viva Health Foundation"
      },
      icon: Heart,
      color: "from-orange-500 to-green-500"
    },
    {
      id: 6,
      title: "Prudential Life Insurance Ghana",
      client: "Prudential Life Insurance",
      category: "Enterprise Insurance Portal",
      tags: ["Web Development", "Finance"],
      link: "https://www.prudential.com.gh/",
      description: "Enterprise insurance platform providing life insurance products, claims management, and customer service for one of Ghana's leading insurance providers.",
      challenge: "Prudential needed to modernize their digital presence with an enterprise-grade platform for policy management, claims processing, premium payments, and customer engagement.",
      solution: "We delivered a comprehensive insurance platform with product showcases, online applications, premium calculators, secure policy portals, payment integration, and responsive design.",
      results: [
        { metric: "200%", label: "Increase in online applications" },
        { metric: "150%", label: "Customer engagement" },
        { metric: "60%", label: "Processing efficiency" },
        { metric: "4.7/5", label: "Customer rating" }
      ],
      technologies: ["Enterprise CMS", "Payment Gateway", "Customer Portal", "Security Compliance", "Analytics"],
      heroImage: prudentialHero,
      testimonial: {
        quote: "The platform has transformed how we serve our customers. It's professional, secure, and has significantly improved our digital service delivery.",
        author: "Head of Digital",
        company: "Prudential Life Insurance Ghana"
      },
      icon: Building2,
      color: "from-red-600 to-red-500"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.tags.includes(selectedCategory));

  const additionalProjects = [
    {
      title: "E-commerce Platform Launch",
      category: "E-commerce",
      tags: ["E-commerce"],
      impact: "500% revenue increase in 6 months",
      icon: ShoppingCart
    },
    {
      title: "Corporate Branding Suite",
      category: "Branding",
      tags: ["Branding"],
      impact: "Brand recognition up 85%",
      icon: Award
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      tags: [],
      impact: "300k+ engagement reach",
      icon: Users
    },
    {
      title: "SEO Optimization Project",
      category: "SEO & Marketing",
      tags: [],
      impact: "First page ranking for 50+ keywords",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <p className="text-primary font-semibold text-sm">Success Stories • Real Results</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Portfolio & <span className="bg-gradient-primary bg-clip-text text-transparent">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve measurable success through innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-0 z-10 border-b border-border backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsLoading(true);
                }}
                className={`
                  transition-all duration-300 whitespace-nowrap
                  ${selectedCategory === category 
                    ? "bg-gradient-primary scale-105" 
                    : "hover:border-primary/50 hover:scale-105"
                  }
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {isLoading ? (
        // Show multiple skeletons while loading
        <>
          <section className="py-20 bg-background">
            <PortfolioSkeleton />
          </section>
          <section className="py-20 bg-muted/30">
            <PortfolioSkeleton />
          </section>
        </>
      ) : filteredProjects.length === 0 ? (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto animate-fade-in">
              <p className="text-xl text-muted-foreground mb-6">
                No projects found in this category yet.
              </p>
              <Button 
                onClick={() => setSelectedCategory("All")}
                variant="outline"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </section>
      ) : (
        filteredProjects.map((study, index) => {
          const Icon = study.icon;
          return (
            <section 
              key={study.id} 
              className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'} animate-fade-in`}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                <Card className="overflow-hidden border-border hover:border-primary/30 transition-all duration-300">
                  {/* Hero Image */}
                  {study.heroImage && (
                    <div className="relative h-80 overflow-hidden group">
                      <img 
                        src={study.heroImage} 
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                  )}
                  
                  {/* Project Header */}
                  <div className={`bg-gradient-to-r ${study.color} p-8 md:p-12 text-white`}>
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                            {study.category}
                          </Badge>
                          <h2 className="text-3xl md:text-4xl font-bold">{study.title}</h2>
                        </div>
                      </div>
                      {study.link && (
                        <a 
                          href={study.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                        >
                          <span>Visit Site</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-lg opacity-90 max-w-3xl">
                      {study.description}
                    </p>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 md:p-12">
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary font-bold">?</span>
                          </div>
                          The Challenge
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary font-bold">✓</span>
                          </div>
                          Our Solution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold mb-6 text-center">Measurable Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {study.results.map((result, idx) => (
                          <div 
                            key={idx}
                            className="text-center p-6 bg-muted/50 rounded-2xl hover:bg-muted transition-all duration-300 animate-fade-in hover-scale"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-2`}>
                              {result.metric}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-12">
                      <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="px-4 py-2">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <Card className="bg-gradient-hero border-primary/10 p-8">
                      <div className="flex gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-lg mb-6 italic">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${study.color} flex items-center justify-center text-white font-bold`}>
                          {study.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{study.testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{study.testimonial.company}</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        );
      })
      )}

      {/* Additional Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                More <span className="bg-gradient-accent bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A selection of additional projects where we've delivered exceptional results
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {additionalProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card 
                    key={project.title}
                    className="p-6 hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 animate-fade-in hover-scale cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.category}
                    </p>
                    <div className="text-sm font-semibold text-primary">
                      {project.impact}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a <span className="bg-gradient-primary bg-clip-text text-transparent">Similar Project</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Tell us about your project and we'll get back to you within 24 hours. All inquiries are also sent to our WhatsApp for instant updates.
              </p>
            </div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <ProjectInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your <span className="bg-gradient-primary bg-clip-text text-transparent">Success Story</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who have transformed their businesses with our innovative digital solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90"
                onClick={() => {
                  const whatsappNumber = "233247233996";
                  const whatsappMessage = encodeURIComponent(
                    "Hello, I would like to discuss a project with Gotechpluz."
                  );
                  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

                  trackWhatsAppClick("portfolio_cta_whatsapp");
                  const newWindow = window.open(
                    whatsappUrl,
                    "_blank",
                    "noopener,noreferrer"
                  );
                  if (!newWindow) {
                    window.location.href = whatsappUrl;
                  }
                }}
              >
                Chat on WhatsApp <Send className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore Our Services
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

export default PortfolioPage;
