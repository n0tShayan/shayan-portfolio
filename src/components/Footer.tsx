import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold glow-text mb-2">Asad Shayan</h3>
            <p className="text-sm text-muted-foreground">
              Computer Science Student & Game Developer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/n0tShayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/AsadShayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:sahibzadashayaan@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" /> by SMAS
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Sahibzada Muhammad Asad Shayan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
