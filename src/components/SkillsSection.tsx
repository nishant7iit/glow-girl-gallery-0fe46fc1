
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  const skillsCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "HTML/CSS", "JavaScript", "Python"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman API", "Figma", "Canva", "Visual Studio Code"]
    },
    {
      title: "Core CS Concepts",
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
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 animate-fade-in">Skills & Certifications</h2>
        <div className="w-20 h-1 bg-primary mb-10 animate-scale-in"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillsCategories.map((category, idx) => (
            <div key={idx} className="animate-slide-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="py-1.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="animate-slide-up">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
