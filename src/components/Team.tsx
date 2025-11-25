import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "James Dakey",
      role: "Team Lead",
      initials: "JD"
    },
    {
      name: "David Kissward",
      role: "Multimedia Lead",
      initials: "DK"
    },
    {
      name: "John Setsoafia",
      role: "Full Stack Developer",
      initials: "JS"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold text-sm">Meet Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The <span className="bg-gradient-primary bg-clip-text text-transparent">Gotechpluz</span> Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to bringing your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="p-8 text-center hover:shadow-medium transition-all duration-300 group border-border hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-2 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{member.initials}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {member.role}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
