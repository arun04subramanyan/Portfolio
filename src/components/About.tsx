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
          About Me
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
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-light">
                  I&apos;m a <span className="font-normal">Senior Product Designer and emerging Design Leader with <span className="font-semibold">7+ years</span> of experience</span> shaping digital products across enterprise, fintech, legal tech and EdTech. I bring together product strategy, design thinking and technical understanding to turn complex challenges into scalable, user-centred solutions.
                </p>

                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-light">
                  I take ownership of the design process from discovery and defining product direction to execution and delivery. I enjoy driving design decisions, aligning cross-functional teams, mentoring designers and building design systems that create consistency and accelerate product development.
                </p>

                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-light">
                  I&apos;m particularly interested in the intersection of <span className="font-normal">AI, product innovation and user experience</span>, exploring new ways to improve how products are designed, built and experienced.
                </p>

                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-light">
                  Beyond delivering great interfaces, my focus is on creating design impact, strengthening design culture and building products that deliver lasting value to both users and businesses.
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
