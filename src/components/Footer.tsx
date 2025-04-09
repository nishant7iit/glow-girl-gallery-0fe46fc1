
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <Link 
              to="/" 
              className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            >
              Muskan
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Electrical Engineering Student & Frontend Developer
            </p>
          </div>

          <div className="flex justify-center">
            <p className="text-sm text-center text-muted-foreground">
              &copy; {currentYear} Muskan. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center justify-end space-x-6">
            <a 
              href="https://github.com/muskan" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/muskan" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:muskanece98881@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
            <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a></li>
            <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a></li>
            <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
