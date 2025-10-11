import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Angular", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "HTML/CSS", category: "Core" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Git", category: "Tools" },
  { name: "REST APIs", category: "Tools" },
  { name: "Responsive Design", category: "Core" },
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
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bg-card border border-border rounded-full px-6 py-3 transition-all duration-300 hover:border-primary hover:shadow-glow group">
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
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
