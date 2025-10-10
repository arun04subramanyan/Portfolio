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
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.category}</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                />
              </div>
              <div className="mt-2 text-right text-sm text-primary font-medium">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
