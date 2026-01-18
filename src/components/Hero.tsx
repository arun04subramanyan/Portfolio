import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ArrowRight,
  Code2,
  Palette,
  Smartphone,
  Download,
  ChevronDown,
  User,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "650+", label: "Projects Done" },
    { value: "99%", label: "Happy Client" },
    { value: "240+", label: "Fine Artworks" },
  ];

  const floatingIcons = [
    { Icon: Code2, className: "top-0 sm:top-6 right-20" },
    { Icon: Palette, className: "top-32 left-0 sm:left-2" },
    { Icon: Smartphone, className: "bottom-0 sm:bottom-14 right-12" },
  ];

  return (
    <section
      id="hero"
      className="relative sm:min-h-screen overflow-hidden px-4 md:px-12 lg:px-20 py-8 sm:py-12"
    >
      {/* Hero Content */}
      <div className="container px-3 sm:px-auto mx-auto  py-8 max-sm:pt-3 sm:py-12 md:py-20">
        {/* Mobile Profile Card */}
        <motion.div
          className="md:hidden mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <Card className="border-foreground/10">
              <CardContent className="p-4">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      {/* <User className="w-6 h-6 text-primary-foreground" /> */}
                      <img
                        src="cv image.png"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-foreground">
                        Bijin EV
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        bijinev55@gmail.com
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground/60 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="mt-4 pt-4 border-t border-foreground/10 space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70">
                        bijinev55@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70">+91 9048769548</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70">
                        Nilambur, Kerala, India
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Linkedin className="w-4 h-4 text-primary flex-shrink-0" />
                      <a
                        href="https://www.linkedin.com/in/bijin-vijayan/"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        linkedin.com/in/bijin-vijayan
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Github className="w-4 h-4 text-primary flex-shrink-0" />
                      <a
                        href="https://github.com/BijinVijayan"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        github.com/BijinVijayan
                      </a>
                    </div>
                  </div>
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
              <div className="space-y-4">
                  <h1 className="text-[34px] sm:text-4xl md:text-6xl font-bold text-foreground leading-tight">
                      Building{" "}
                      <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Modern & Scalable
                    </span>{" "}
                      Digital Experiences
                  </h1>

                  <p className="text-base sm:text-lg text-foreground/70 max-w-md">
                      I'm <span className="font-semibold">Bijin EV</span>, a Frontend / Full-Stack Developer
                      with 2.5+ years of experience delivering high-performance web applications using
                      <span className="font-semibold"> Next.js, React, and Angular</span>.
                      I specialize in creating fast, accessible, and visually polished interfaces
                      that solve real business problems.Passionate about clean architecture, modern UI, and
                      building products that scale.
                      <br />
                  </p>
              </div>


              <div className="flex gap-3 sm:gap-4 ">
              <Button
                size="lg"
                className="bg-gradient-primary px-5 sm:px-auto text-primary-foreground hover:opacity-90 shadow-glow"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 group"
                onClick={scrollToProjects}
              >
                Previous Works
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <motion.div
              className="flex sm:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary w-full text-primary-foreground hover:opacity-90 shadow-glow group"
                asChild
              >
                <a href="/Bijin Resume.pdf" download="Bijin Resume.pdf">
                  Download CV
                  <Download className="ml-2 w-4 h-4 " />
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </motion.div>

          {/* Right Column - Profile Image (Hidden on Mobile) */}
          <motion.div
            className="hidden md:flex relative items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl"></div>

              {/* Main Profile Circle with Gradient Border */}
              <div className="relative w-full h-full">
                <svg
                  className="absolute inset-0 w-full h-full -rotate-12"
                  viewBox="0 0 500 500"
                >
                  <defs>
                    <linearGradient
                      id="borderGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{
                          stopColor: "hsl(271 91% 65%)",
                          stopOpacity: 1,
                        }}
                      />
                      <stop
                        offset="100%"
                        style={{
                          stopColor: "hsl(217 91% 60%)",
                          stopOpacity: 1,
                        }}
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="250"
                    cy="250"
                    r="240"
                    fill="none"
                    stroke="url(#borderGradient)"
                    strokeWidth="8"
                  />
                </svg>

                <div className="absolute inset-4 rounded-full overflow-hidden bg-background shadow-2xl">
                  <img
                    src="cv image.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Icon Decorations */}
              {floatingIcons.map(({ Icon, className }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${className} w-16 h-16 bg-background rounded-2xl shadow-lg flex items-center justify-center`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
              ))}

              {/* Download CV Button */}
              {/* Download CV Button */}
              <motion.div
                className="absolute hidden  -bottom-16 left-1/2 -translate-x-1/2 sm:flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow group"
                  asChild
                >
                  <a href="/BIJIN EV - RESUME.pdf" download="BIJIN EV - RESUME.pdf">
                    Download CV
                    <Download className="ml-2 w-4 h-4 " />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
