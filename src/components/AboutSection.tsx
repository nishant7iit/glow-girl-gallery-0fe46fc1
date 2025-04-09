
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 animate-fade-in">About Me</h2>
        <div className="w-20 h-1 bg-primary mb-10 animate-scale-in"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slide-in" style={{ animationDelay: "100ms" }}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                <p className="mb-4">
                  I'm an Electrical Engineering enthusiast pursuing my degree at NIT Jalandhar. I bring a dynamic blend
                  of technical acumen and a passion for exploring the realms beyond the core currents. With a strong logical foundation,
                  I approach challenges with an inquisitive mind.
                </p>
                <p>
                  Currently honing my skills and eager to apply them to real-world challenges and contribute to cutting-edge projects.
                  My journey extends beyond academics as I actively participate in various campus activities and roles of responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-6">
                  {educationDetails.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 py-1">
                      <h4 className="font-medium">{edu.institution}</h4>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      <div className="flex justify-between items-center mt-2">
                        <Badge variant="outline">{edu.duration}</Badge>
                        <span className="text-sm font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 animate-slide-up">
          <h3 className="text-xl font-semibold mb-4">Positions of Responsibility</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium">Placement Representative</h4>
                <p className="text-sm text-muted-foreground mb-2">EE, NIT Jalandhar (Feb 2025 - Present)</p>
                <p className="text-sm">Coordinating recruitment processes and ensuring smooth communication between students and companies.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium">WDMC: Co-Lead, Conferencing Modules</h4>
                <p className="text-sm text-muted-foreground mb-2">NIT Jalandhar (Aug 2024 - Present)</p>
                <p className="text-sm">Led the development of conferencing websites using React.js, Node.js, and Tailwind CSS.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium">D-SAMP: Student Academic Mentorship</h4>
                <p className="text-sm text-muted-foreground mb-2">NIT Jalandhar (Aug 2024 - Present)</p>
                <p className="text-sm">Conducted bi-weekly mentorship sessions for first-year students, addressing academic challenges.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
