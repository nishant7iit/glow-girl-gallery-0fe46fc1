
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Civil Engineering Department Conferencing Website",
      description: "Developed a responsive React-based conferencing website for event scheduling, registration, and updates.",
      tags: ["React.js", "Node.js", "Tailwind CSS"],
      link: "#",
      sourceCode: "#",
      image: "/lovable-uploads/e9133a44-1884-4414-9847-ba2154c335b3.png"
    },
    {
      title: "Route Optimization and Delivery Management System",
      description: "Designed and integrated sorting algorithms to streamline data processing and ensure faster computations.",
      tags: ["Java", "Swing", "Dijkstra's Algorithm"],
      link: "",
      sourceCode: "#",
      image: "/lovable-uploads/e99cca49-e252-4b82-bbd0-849c895faac4.png"
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio website with dark mode support and smooth animations.",
      tags: ["React", "Tailwind CSS", "Vite"],
      link: "#",
      sourceCode: "#",
      image: "/lovable-uploads/8985397f-ea18-449f-ad03-75b24d576398.png"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4">PROJECTS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 animate-fade-in">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Showcasing my technical skills and creative problem-solving through these projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-xl transition-all duration-300 animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.link && (
                    <Button size="sm" variant="default" asChild className="rounded-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.sourceCode && (
                    <Button size="sm" variant="outline" asChild className="rounded-full">
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
