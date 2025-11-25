import { Card } from "@/components/ui/card";
import { Award, Briefcase } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Talent Homecare Projects",
      description: "Comprehensive healthcare management solutions"
    },
    {
      title: "Prudential Insurance Website",
      description: "Professional insurance platform with client portal"
    },
    {
      title: "Welhaven Homecare Application",
      description: "Cross-platform mobile apps for iOS and Android"
    },
    {
      title: "Graphic Designs & Logos",
      description: "Brand identity design for various clients"
    }
  ];

  const achievements = [
    {
      title: "Charitable Fellows Recognition",
      description: "Technical support at A pad a girl outreach in Lawoshieme"
    },
    {
      title: "Viva Health Magazine",
      description: "Recognition for outstanding contribution to the foundation"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Briefcase className="h-4 w-4 text-accent" />
              <span className="text-accent font-semibold text-sm">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Projects & <span className="bg-gradient-accent bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Delivering excellence across diverse projects and earning recognition for our impact
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="p-6 hover:shadow-medium transition-all duration-300 group cursor-pointer border-border hover:border-primary/30 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              Achievements & Recognition
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className="p-6 hover:shadow-medium transition-all duration-300 group border-accent/20 hover:border-accent/40 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mb-4 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
