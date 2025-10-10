const skills = [
  { name: "Angular", level: 90, category: "Framework" },
  { name: "Next.js", level: 85, category: "Framework" },
  { name: "React", level: 88, category: "Framework" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "JavaScript", level: 92, category: "Language" },
  { name: "HTML/CSS", level: 95, category: "Core" },
  { name: "Tailwind CSS", level: 88, category: "Styling" },
  { name: "Git", level: 85, category: "Tools" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Skills & Technologies
        </h2>
        
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-card rounded-full border border-border hover:border-primary hover:shadow-glow transition-all animate-fade-in group cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
