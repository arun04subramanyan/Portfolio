import { Award, Code2, Smartphone, Box, FileCode, Layout, Palette, Wrench, GitBranch, Database, Blocks, Zap, CreditCard, Shield, Flame, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

const skills: { name: string; category: string; icon: LucideIcon }[] = [
  { name: "Angular", category: "Framework", icon: Code2 },
  { name: "Next.js", category: "Framework", icon: Box },
  { name: "React", category: "Framework", icon: Code2 },
  { name: "React Native", category: "Framework", icon: Smartphone },
  { name: "TypeScript", category: "Language", icon: FileCode },
  { name: "JavaScript", category: "Language", icon: FileCode },
  { name: "HTML/CSS", category: "Core", icon: Layout },
  { name: "Responsive Design", category: "Core", icon: Smartphone },
  { name: "Tailwind CSS", category: "Styling", icon: Palette },
  { name: "NativeWind", category: "Styling", icon: Palette },
  { name: "Bootstrap", category: "Styling", icon: Palette },
  { name: "Postman", category: "Tools", icon: Wrench },
  { name: "Git", category: "Tools", icon: GitBranch },
  { name: "REST APIs", category: "Tools", icon: Database },
  { name: "WordPress", category: "Tools", icon: Blocks },
  { name: "Zustand", category: "Tools", icon: Zap },
  { name: "Context API", category: "Tools", icon: Blocks },
  { name: "Redux", category: "Tools", icon: Database },
  { name: "Firebase", category: "Tools", icon: Flame },
  { name: "Appwrite", category: "Tools", icon: Cloud },
  { name: "Sentry", category: "Tools", icon: Shield },
  { name: "Stripe", category: "Tools", icon: CreditCard },
];

const certifications = [
  {
    name: " MEAN / MERN full stack",
    issuer: "Luminar Technolab , Kochi",
    year: "2024",
  },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 sm:py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-card border border-border rounded-full px-6 py-3 transition-all duration-300 hover:border-primary hover:shadow-glow group">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">
                Certifications
              </h3>
            </div>
            <p className="text-muted-foreground">
              Professional certifications and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-5 sm:p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
