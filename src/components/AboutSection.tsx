
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export function AboutSection() {
  const educationDetails = [
    {
      institution: "Dr. B.R. Ambedkar National Institute of Technology, Jalandhar",
      degree: "Bachelor of Technology in Electrical Engineering",
      duration: "November 2022 - June 2026",
      grade: "CGPA: 8.2/10.0"
    },
    {
      institution: "Government Senior Secondary Smart School Pheelkhana",
      degree: "Non-medical",
      duration: "May 2019 - June 2021",
      grade: "Grade: 96.4"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4">ABOUT ME</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 animate-fade-in">Discover My Story</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Engineering student with a passion for technology and development. I combine electrical engineering 
            fundamentals with modern web development to create impactful digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Educational Journey
            </h3>

            <div className="space-y-8">
              {educationDetails.map((edu, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-lg">{edu.institution}</h4>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <div className="flex justify-between items-center mt-3">
                      <Badge variant="outline">{edu.duration}</Badge>
                      <span className="text-sm font-medium">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="text-primary" />
              Positions of Responsibility
            </h3>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg">Placement Representative</h4>
                  <p className="text-muted-foreground">EE, NIT Jalandhar (Feb 2025 - Present)</p>
                  <p className="mt-3 text-sm">
                    Coordinating recruitment processes and ensuring smooth communication between students and companies.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg">WDMC: Co-Lead, Conferencing Modules</h4>
                  <p className="text-muted-foreground">NIT Jalandhar (Aug 2024 - Present)</p>
                  <p className="mt-3 text-sm">
                    Led the development of conferencing websites using React.js, Node.js, and Tailwind CSS.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg">D-SAMP: Student Academic Mentorship</h4>
                  <p className="text-muted-foreground">NIT Jalandhar (Aug 2024 - Present)</p>
                  <p className="mt-3 text-sm">
                    Conducted bi-weekly mentorship sessions for first-year students, addressing academic challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
