import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";

const About = () => {
  const skills = [
    "Python", "C++", "JavaScript", "React JS", "Next JS", "Three JS", 
    "Node JS", "C#", "Unity", "Machine Learning", "PostgreSQL", "MongoDB",
    "OpenCV", "TensorBoard", "Visual C++", "Linux", "Photoshop"
  ];

  const certifications = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      provider: "Stanford University",
      date: "Aug 2024",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Complete C# 2D Unity Game Development",
      provider: "Udemy",
      date: "Jul 2024",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      provider: "Dr. Angela Yu - Udemy",
      date: "Aug 2024",
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="glow-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate Computer Science student with a strong foundation in software development, 
            machine learning, and game design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <Card className="glow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Bachelor of Computer Science</h4>
                  <p className="text-sm text-muted-foreground">
                    Ghulam Ishaq Khan Institute of Engineering Sciences and Technology
                  </p>
                  <p className="text-sm text-muted-foreground">Sep 2023 - 2027</p>
                  <p className="text-sm text-primary font-medium">CGPA: 3.39/4.00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Leadership</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">ACM GIKI Chapter - Member</h4>
                    <p className="text-sm text-muted-foreground">Sep 2023 - Present</p>
                    <p className="text-sm text-muted-foreground">
                      Organized SoftCom Speed Programming Competition & ICPC Asia Regional
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">IEEE GIKI Student Branch - Member</h4>
                    <p className="text-sm text-muted-foreground">Feb 2024 - Present</p>
                    <p className="text-sm text-muted-foreground">
                      Organized & Hosted NEO Robotics Event
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-primary mt-1">{cert.icon}</div>
                      <div>
                        <h4 className="font-medium text-sm">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground">{cert.provider}</p>
                        <p className="text-xs text-primary">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;