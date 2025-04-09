
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  const skillsCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Java", "HTML/CSS", "JavaScript", "Python"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚛️",
      skills: ["React.js", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Postman API", "Figma", "Canva", "Visual Studio Code"]
    },
    {
      title: "Core CS Concepts",
      icon: "🧠",
      skills: ["Data Structures", "Algorithms", "Object Oriented Programming"]
    }
  ];
  
  const certificates = [
    "Career Essentials in Data Analysis by Microsoft and LinkedIn",
    "Introduction to Career Skills in Data Analytics",
    "Learning Data Analytics Part 2: Extending and Applying Core Knowledge",
    "Learning Data Analytics: Foundations",
    "Google Cloud Computing Foundations Certificate"
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4">SKILLS & CERTIFICATIONS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 animate-fade-in">Technical Proficiency</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            My toolkit of technologies, frameworks, and skills that I've acquired through studies and projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillsCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="animate-fade-in" 
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Card className="h-full hover:shadow-md transition-all border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <Badge key={skill} className="bg-secondary/60 hover:bg-secondary/80 text-foreground border-none">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="animate-slide-up bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <div key={idx} className="flex gap-3 items-start group">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary transition-colors">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
