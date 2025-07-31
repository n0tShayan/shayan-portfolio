import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Database, Gamepad2, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Based SMS Spam Detection",
      description: "Developed a high-accuracy (>99%) spam SMS classifier using Natural Language Processing (NLP) and Recurrent Neural Networks (RNN). Performed data preprocessing, built a multi-layer deep learning model, and utilized TensorBoard for training visualization and performance monitoring.",
      icon: <Brain className="h-6 w-6" />,
      tags: ["Python", "NLP", "RNN", "TensorBoard", "Machine Learning"],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      title: "Tycoon Simulator Game",
      description: "Designed and implemented a 2D Tycoon Simulator game featuring dynamic decision-making algorithms and SQLite database integration. User choices directly impacted gameplay progression and influenced multiple outcome scenarios, enhancing player engagement and replayability.",
      icon: <Gamepad2 className="h-6 w-6" />,
      tags: ["Unity", "C#", "SQLite", "Game Development", "2D"],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      title: "Facial Recognition Attendance System",
      description: "Developed an automated attendance system in Python using OpenCV and the face_recognition library, designed for deployment in educational and corporate environments.",
      icon: <Eye className="h-6 w-6" />,
      tags: ["Python", "OpenCV", "Face Recognition", "Computer Vision"],
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      title: "Bitmap Data Clustering",
      description: "Implemented bitmap data clustering using Machine Learning, Object-Oriented Programming (OOP), and Visual C++ to enable efficient analysis and visualization.",
      icon: <Database className="h-6 w-6" />,
      tags: ["Visual C++", "Machine Learning", "OOP", "Data Analysis"],
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="glow-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across game development, machine learning, and computer vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glow-card group hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${project.bgColor}`}>
                    <div className={project.color}>
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="neon" 
                    size="sm"
                    onClick={() => window.open('https://github.com/n0tShayan', '_blank')}
                    className="group/btn"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:text-primary"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="cyber" 
            size="lg"
            onClick={() => window.open('https://github.com/n0tShayan', '_blank')}
            className="group"
          >
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;