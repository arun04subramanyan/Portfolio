import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Junior Frontend Developer",
    company: "Aeth Analytica",
    period: "Apr 2024 - Sep 2025 | UL Cyberpark, Calicut",
    description:
      "Contributed to the design and development of BillMyKart — a scalable e-commerce platform and admin panel. Built custom admin modules, improved workflow efficiency, and implemented performance optimizations using Next.js for faster load times and better UX.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Performance Optimization"]
  },
  {
    title: "Fullstack Developer",
    company: "Objective Tech",
    period: "Jan 2024 - Apr 2024 | Nilambur",
    description:
      "Developed an ERP Admin Panel for EminenceTel (UK), focusing on dashboard functionalities and UI/UX design. Also built a full-stack Angular application for an educational institute, managing both frontend and backend modules.",
    skills: ["Angular", "Node.js", "MongoDB", "TypeScript", "UI/UX Design"]
  },
  {
    title: "MERN Stack Intern",
    company: "Luminar Technolab",
    period: "Oct 2022 - Apr 2023 | Kochi",
    description:
      "Gained hands-on experience in modern web development with AngularJS and React.js. Built sample applications, explored state management, and learned core frontend concepts through real-world projects.",
    skills: ["AngularJS", "React.js", "JavaScript", "HTML", "CSS"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-10 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all shadow-card hover:shadow-glow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg hidden sm:block">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-foreground/90 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;