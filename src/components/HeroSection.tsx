
import { ArrowDownCircle, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col animate-slide-in" style={{ animationDelay: '100ms' }}>
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Muskan
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 text-balance">
              Electrical Engineering student & Frontend Developer
            </h2>
            <p className="mb-8 max-w-md text-balance">
              I'm a B.Tech student at NIT Jalandhar with a passion for web development, 
              creating responsive interfaces using React and Tailwind CSS.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/muskan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/muskan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:muskanece98881@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-first md:order-last flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30">
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
