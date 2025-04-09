
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Picapool (Startup)",
      duration: "2 months",
      description: [
        "Developed and integrated frontend components using React.js and Tailwind CSS",
        "Collaborated with the team to enhance UI/UX and improve website responsiveness"
      ]
    },
    {
      role: "Public Relations Communication",
      company: "SEED Club, NIT Jalandhar",
      duration: "Sep 2024 - Present",
      description: [
        "Managed social media presence and promotional activities to enhance event outreach",
        "Coordinated with teams to organize technical and sustainability-related events"
      ]
    },
    {
      role: "Frontend Web Developer",
      company: "WDMC - Web Development Management Committee",
      duration: "May 2024 - Present",
      description: [
        "Led the development of conferencing websites using React.js, Node.js, and Tailwind CSS",
        "Managing a six-member team for seamless event scheduling and real-time updates"
      ]
    },
    {
      role: "Student Director",
      company: "Unstop",
      duration: "Oct 2024 - Mar 2025",
      description: [
        "Helped organize campus events and competitions",
        "Promoted student participation in various online challenges"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 animate-fade-in">Experience</h2>
        <div className="w-20 h-1 bg-primary mb-10 animate-scale-in"></div>
        
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="animate-slide-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary/10 p-6 flex items-center justify-center md:w-1/5">
                      <Briefcase className="h-10 w-10 text-primary" />
                    </div>
                    <div className="p-6 md:w-4/5">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge className="mt-2 md:mt-0 w-fit">{exp.duration}</Badge>
                      </div>
                      <ul className="list-disc list-inside space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-sm md:text-base">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
