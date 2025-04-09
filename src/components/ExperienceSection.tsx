
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

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
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4">EXPERIENCE</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 animate-fade-in">Work & Experience</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey includes internships and leadership roles that have
            helped me grow as a developer and collaborator.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`md:flex items-center mb-16 last:mb-0 animate-fade-in ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
              </div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <Card className="overflow-hidden transition-all hover:shadow-md border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.duration}
                      </Badge>
                    </div>
                    <ul className="list-disc list-inside space-y-2 marker:text-primary">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
