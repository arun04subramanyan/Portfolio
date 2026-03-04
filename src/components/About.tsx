import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 sm:py-20 bg-card relative overflow-hidden"
    >
      {/* Elegant SVG Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="30"
                cy="30"
                r="1.5"
                fill="currentColor"
                className="text-primary"
              />
              <circle
                cx="0"
                cy="0"
                r="1.5"
                fill="currentColor"
                className="text-primary"
              />
              <circle
                cx="60"
                cy="0"
                r="1.5"
                fill="currentColor"
                className="text-primary"
              />
              <circle
                cx="0"
                cy="60"
                r="1.5"
                fill="currentColor"
                className="text-primary"
              />
              <circle
                cx="60"
                cy="60"
                r="1.5"
                fill="currentColor"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Mee
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Decorative gradient blur */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

            <motion.div
              className="relative backdrop-blur-sm bg-background/50 rounded-2xl p-5 sm:p-10 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  I’m a UX Designer with 3 years of experience shaping digital
                  products through research-driven design. I thrive on turning
                  insights from users and stakeholders into clear, accessible
                  interfaces that solve real problems and deliver measurable value.
                </p>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  My projects span e-commerce platforms, enterprise dashboards,
                  and service websites. I lead user interviews, create journey
                  maps and wireframes, and build scalable design systems that
                  support consistency across screens and devices.
                </p>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  hahahhaa , and I aim to empower product
                  teams with clarity, empathy, and focus.
                </p>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  Outside of work, you'll find me sketching interfaces, studying
                  interaction patterns, and staying current with design system
                  practices. My mission is to craft digital experiences that
                  users understand, enjoy, and return to.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
