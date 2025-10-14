import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-20 bg-card relative overflow-hidden">
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
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  I’m a passionate{" "}
                  <span className="font-semibold text-primary">
                    Frontend Developer
                  </span>{" "}
                  with over 2 years of experience building dynamic and scalable
                  web applications. My focus lies in creating intuitive,
                  high-performing user interfaces that combine clean design with
                  efficient code.
                </p>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  I’ve worked with technologies like{" "}
                  <span className="font-semibold text-primary">
                    Angular, Next.js, and React { " "}
                  </span>
                  to develop e-commerce platforms, ERP dashboards, and admin
                  panels. I specialize in responsive design, performance
                  optimization, and SEO — ensuring every project not only looks
                  great but performs exceptionally well.
                </p>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  Beyond coding, I enjoy exploring new frameworks, enhancing UX
                  strategies, and contributing to projects that merge creativity
                  with technology. My goal is to keep learning, improving, and
                  delivering meaningful digital experiences that leave an
                  impact.
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
