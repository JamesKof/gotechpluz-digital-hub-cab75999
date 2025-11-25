import { Target, Eye, Globe2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Gotechpluz</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A registered Ghanaian-based tech agency with a global reach, dedicated to enhancing the digital experience of brands worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-medium transition-shadow animate-fade-in-up border-primary/10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                Empowering Global Success Through Innovative Digital Solutions
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-medium transition-shadow animate-fade-in-up border-primary/10" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To be leaders in shaping a dynamic and innovative digital landscape, redefining success benchmarks
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-medium transition-shadow animate-fade-in-up border-primary/10" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary">
                <Globe2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Reach</h3>
              <p className="text-muted-foreground">
                Serving clients in Switzerland, United States, United Kingdom, and beyond
              </p>
            </Card>
          </div>

          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Client Satisfaction",
                "Innovation & Creativity",
                "Transparency & Integrity",
                "Continuous Learning"
              ].map((value, index) => (
                <div 
                  key={value} 
                  className="bg-background/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-background transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mx-auto mb-3"></div>
                  <p className="font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
