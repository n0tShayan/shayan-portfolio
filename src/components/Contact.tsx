import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "sahibzadashayaan@gmail.com",
      action: () => window.open('mailto:sahibzadashayaan@gmail.com', '_blank')
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+92 333 8581887",
      action: () => window.open('tel:+923338581887', '_blank')
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/n0tShayan",
      action: () => window.open('https://github.com/n0tShayan', '_blank')
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/AsadShayan",
      action: () => window.open('https://linkedin.com/in/AsadShayan', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="glow-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking for a passionate developer for your team, have a project in mind, 
                  or just want to network, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glow-card hover:scale-[1.02] transition-all duration-300 cursor-pointer" onClick={info.action}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/20 p-3 rounded-lg">
                          <div className="text-primary">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.label}</h4>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="glow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Current Status</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Available for opportunities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Pakistan</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-muted-foreground">🎓 Computer Science Student</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-muted-foreground">🚀 Open to Internships & Projects</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interests</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">🤖 Machine Learning & AI</p>
                    <p className="text-sm text-muted-foreground">🎮 Game Development</p>
                    <p className="text-sm text-muted-foreground">🌐 Web Development</p>
                    <p className="text-sm text-muted-foreground">👁️ Computer Vision</p>
                    <p className="text-sm text-muted-foreground">📊 Data Science</p>
                  </div>
                </CardContent>
              </Card>

              <Button 
                variant="cyber" 
                size="lg" 
                className="w-full group"
                onClick={() => window.open('mailto:sahibzadashayaan@gmail.com?subject=Portfolio Contact&body=Hi Asad, I found your portfolio and would like to connect!', '_blank')}
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;