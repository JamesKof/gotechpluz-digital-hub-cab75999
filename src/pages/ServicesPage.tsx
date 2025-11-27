import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Code, Megaphone, Palette, ShoppingCart, Smartphone, Video, Search, BarChart3, Globe, Layers, LineChart, Sparkles } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom website and web application development with cutting-edge technologies",
      features: ["Responsive Design", "CMS Integration", "Custom Web Apps", "Frontend & Backend Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Comprehensive online shopping platforms with secure payment integration",
      features: ["Shopping Cart Systems", "Payment Gateway Integration", "Inventory Management", "Order Tracking"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional visual identity and branding solutions that make your brand stand out",
      features: ["Logo Design", "Brand Identity", "Print Design", "Marketing Materials"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to amplify your online presence",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "Brand Management"]
    },
    {
      icon: Search,
      title: "SEO & SEM",
      description: "Search engine optimization and marketing to boost your visibility",
      features: ["On-page SEO", "Off-page SEO", "Google Ads", "Analytics & Reporting"]
    },
    {
      icon: Video,
      title: "Media Production",
      description: "High-quality video production, animation, and live streaming services",
      features: ["Video Production", "Motion Graphics", "Animation", "Live Streaming"]
    },
    {
      icon: BarChart3,
      title: "IT Consultancy",
      description: "Custom software solutions and management systems tailored to your business",
      features: ["ERP Systems", "CRM Solutions", "POS Systems", "Custom Software"]
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: "Website Design",
      subtitle: "World-class aesthetics",
      description: "Our agency specializes in creating visually stunning and engaging websites that drive business growth and enhance user experience."
    },
    {
      icon: Layers,
      title: "UX Design",
      subtitle: "User interface excellence",
      description: "We deliver world-class user experience design and corporate branding that meets and exceeds industry standards, ensuring seamless interactions."
    },
    {
      icon: LineChart,
      title: "Content Marketing",
      subtitle: "Strategic storytelling",
      description: "Leverage interactive marketing to captivate your audience through powerful visual storytelling with highly personalized and immersive content experiences."
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
              Digital Solutions That <span className="bg-gradient-primary bg-clip-text text-transparent">Drive Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              From websites and mobile apps to branding and marketing—we offer comprehensive tech-based solutions that recreate traditional business processes and simplify operations for lasting success
            </p>
            <p className="text-lg text-muted-foreground/80">
              Before you ask, yes—we do it all. We're the strategic partners connecting the dots between technology, marketing, and creativity to help you make more money constantly and improve business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We <span className="bg-gradient-accent bg-clip-text text-transparent">Offer</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                End-to-end digital services to transform your business
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.title}
                    className="p-6 hover:shadow-medium transition-all duration-300 group cursor-pointer border-border hover:border-primary/30 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-14 h-14 mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
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
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Specialized <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Focused expertise in key areas of digital excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.title}
                    className="p-8 text-center hover:shadow-medium transition-all duration-300 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-accent font-semibold mb-4 uppercase tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-hero border-primary/10">
              <div className="text-center mb-8">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold mb-4">
                  A New Approach to Digital Success
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  You need a fresh strategy for capturing attention, building customer loyalty, and demonstrating the tangible value of your marketing investments. That's precisely where we excel.
                </p>
                <p>
                  We participate actively in our clients' digital transformation journeys. Our mission is to create exceptional digital products rooted in innovation, leveraging advanced technology to develop solutions that perfectly align with your business objectives.
                </p>
                <p>
                  We connect authentically with users by studying behavior patterns and defining strategic approaches that generate visibility and brand recognition. Our solutions focus squarely on achieving your defined goals while keeping users and business interests at the center of every strategy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
