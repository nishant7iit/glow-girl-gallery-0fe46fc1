
import { ArrowDownCircle, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[5%] w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col animate-slide-in" style={{ animationDelay: '100ms' }}>
            <Badge className="w-fit px-4 py-1.5 text-sm mb-6 bg-secondary/80 hover:bg-secondary/80 border-none text-foreground">
              Electrical Engineering Student & Frontend Developer
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 font-display">
              Hi, I'm <span className="text-primary">Muskan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Turning ideas into reality with code & creativity
            </p>
            
            <p className="mb-8 text-muted-foreground max-w-lg">
              B.Tech student at NIT Jalandhar specializing in electrical engineering
              and frontend development. Creating responsive interfaces with modern tools.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="/resume.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-6 mt-10">
              <a 
                href="https://github.com/muskan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/muskan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:muskanece98881@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src="/lovable-uploads/895cfcdd-951b-4e9c-8497-0ab0ce258d0f.png" 
                  alt="Muskan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="h-8 w-8 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
