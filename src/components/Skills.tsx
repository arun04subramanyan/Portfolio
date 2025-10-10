import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Angular", category: "Framework", color: "bg-gradient-to-br from-red-50 to-red-100" },
  { name: "Next.js", category: "Framework", color: "bg-gradient-to-br from-slate-50 to-slate-100" },
  { name: "React", category: "Framework", color: "bg-gradient-to-br from-cyan-50 to-cyan-100" },
  { name: "TypeScript", category: "Language", color: "bg-gradient-to-br from-blue-50 to-blue-100" },
  { name: "JavaScript", category: "Language", color: "bg-gradient-to-br from-yellow-50 to-yellow-100" },
  { name: "HTML/CSS", category: "Core", color: "bg-gradient-to-br from-orange-50 to-orange-100" },
  { name: "Tailwind CSS", category: "Styling", color: "bg-gradient-to-br from-teal-50 to-teal-100" },
  { name: "Git", category: "Tools", color: "bg-gradient-to-br from-purple-50 to-purple-100" },
  { name: "REST APIs", category: "Tools", color: "bg-gradient-to-br from-green-50 to-green-100" },
  { name: "Responsive Design", category: "Core", color: "bg-gradient-to-br from-pink-50 to-pink-100" },
];

const certifications = [
  { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2024" },
  { name: "React Advanced Certification", issuer: "Meta", year: "2023" },
  { name: "TypeScript Professional", issuer: "Microsoft", year: "2023" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`${skill.color} rounded-xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-glow border border-border/50`}>
                  <span className="text-sm font-semibold text-foreground mb-1">
                    {skill.name}
                  </span>
                  <Badge variant="secondary" className="text-xs mt-2">
                    {skill.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Certifications</h3>
            </div>
            <p className="text-muted-foreground">Professional certifications and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in group"
                style={{ animationDelay: `${(skills.length + index) * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
