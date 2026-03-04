import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "UX Designer",
    company: "Aeth Analytica",
    period: "Apr 2024 - Sep 2025 | UL Cyberpark, Calicut",
    description:
      "Led user research and interface redesign for the BillMyKart e-commerce suite. Conducted stakeholder workshops, defined personas, and created high‑fidelity prototypes that reduced checkout friction. Established a component-based design system and validated flows through usability testing, resulting in a 30% uplift in task completion and happier merchants.",
    skills: ["User Research", "Prototyping", "Design Systems", "Usability Testing", "Information Architecture"]
  },
  {
    title: "Product UX Designer",
    company: "Objective Tech",
    period: "Jan 2024 - Apr 2024 | Nilambur",
    description:
      "Designed the UX for an ERP admin panel for EminenceTel (UK), focusing on clarity and efficiency for back-office users. Mapped workflows, created interactive prototypes, and ran iterative testing sessions with real users. Delivered a clean, scalable UI kit that streamlined feature development and cut support tickets by 20%.",
    skills: ["Workflow Mapping", "Wireframing", "User Testing", "Visual Design", "Stakeholder Collaboration"]
  },
  {
    title: "UX Design Intern",
    company: "Luminar Technolab",
    period: "Oct 2022 - Apr 2023 | Kochi",
    description:
      "Supported multiple product teams by conducting user interviews, drafting wireframes, and refining UI components. Gained foundational experience in interaction design and usability principles through hands-on projects and mentor feedback.",
    skills: ["Wireframing", "User Interviews", "Interaction Design", "Accessibility", "Design Thinking"]
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
              className="bg-card rounded-lg p-5 sm:p-6 border border-border hover:border-primary transition-all shadow-card hover:shadow-glow"
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