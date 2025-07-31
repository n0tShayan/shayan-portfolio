import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="glow-text">Work Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience in game development and software engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glow-card">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-primary/20 p-3 rounded-lg mr-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Game Developer</h3>
                    <p className="text-lg text-primary font-medium">M-Labs, Pakistan</p>
                    <Badge variant="secondary" className="mt-2">
                      Internship
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Jun - Aug 2024</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Designed and implemented particle systems and lighting effects to enhance visual appeal 
                    of three distinct game levels
                  </p>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-primary font-semibold">15% improvement</span> in user engagement 
                    metrics through visual enhancements
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Unity", "C#", "Game Development", "Particle Systems", "Lighting", "Visual Effects"].map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;