import { Code, Megaphone, Palette, ShoppingCart, Smartphone, Video, Search, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Front-end and Back-end Development, Custom Website or App Development",
      color: "primary"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Social Media Marketing, SEO, SEM, SMM, Content Marketing Strategies",
      color: "accent"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Logo Design, Branding Collateral, Web Graphics, Print Design",
      color: "primary"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Robust Online Shopping Experiences, Payment Integration",
      color: "accent"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "iOS and Android Applications, Cross-platform Solutions",
      color: "primary"
    },
    {
      icon: Video,
      title: "Media Production",
      description: "Video Production, Animation, Live Streaming Services",
      color: "accent"
    },
    {
      icon: Search,
      title: "Advertising",
      description: "Branding, Creative Designs, Media Purchasing",
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "IT Consultancy",
      description: "Management Systems, POS Systems, Custom Software Solutions",
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand and drive results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="p-6 hover:shadow-medium transition-all duration-300 group cursor-pointer border-border hover:border-primary/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`w-14 h-14 mb-4 rounded-xl flex items-center justify-center ${
                    service.color === "primary" 
                      ? "bg-primary/10 group-hover:bg-gradient-primary" 
                      : "bg-accent/10 group-hover:bg-gradient-accent"
                  } transition-all duration-300`}>
                    <Icon className={`h-7 w-7 ${
                      service.color === "primary" ? "text-primary" : "text-accent"
                    } group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Strategic Creativity", desc: "Innovative solutions that drive results" },
                { title: "Versatility", desc: "Comprehensive services under one roof" },
                { title: "Cutting-Edge Design", desc: "Modern trends and best practices" },
                { title: "Collaborative Approach", desc: "Your success is our priority" },
                { title: "Timely Delivery", desc: "On-time project completion" },
                { title: "Global Experience", desc: "International client portfolio" }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="bg-background/80 backdrop-blur-sm rounded-xl p-6 hover:bg-background transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mb-3"></div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
