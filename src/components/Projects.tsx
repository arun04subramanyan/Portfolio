import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const projects = [
  {
    id: "billmykart",
    title: "Billmykart – Product Website",
    description:
      "Billmykart is an e-commerce platform that allows businesses and individuals to launch a professional online store quickly and easily.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/assets/projects/billmykart 1.png",
    demoLink: "https://www.billmykart.com/",
    fullDescription:
      "Billmykart is an all-in-one e-commerce platform designed to help businesses launch and manage online stores quickly and easily—without requiring any technical skills. It offers website and mobile app creation, inventory and order management, customizable branding, integrated payment gateways, marketing tools, and multi-channel selling across platforms like Instagram and Facebook. This website serves as an informative platform that explains the features, pricing plans, and overall functionality of the Billmykart system. It was built entirely as a solo project using Next.js, Tailwind CSS, and TypeScript.",
    screenshots: [
      "/assets/projects/billmykart 1.png",
      "/assets/projects/billmykart 2.png",
      "/assets/projects/billmykart 3.png",
    ],
  },
  {
    id: "rasma-decor",
    title: "Rasma Decor – Company Website",
    description:
      "Rasma Decor is a company specializing in bespoke, order-based furniture and interior fittings, focusing on personalized, luxury solutions for both homes and businesses. ",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/assets/projects/rasma 1.png",
    demoLink: "https://rasma-decor.com/",
    fullDescription:
      "Rasma Decor & Trading is a bespoke furniture and interior solutions company specializing in custom order-based fittings and design services for both residential and commercial spaces. The company provides a complete end-to-end process—from initial design and 3D visualization to material sourcing and final installation—ensuring every project reflects the client’s unique vision and lifestyle. Their offerings include luxury furniture, décor accessories, lighting solutions, and smart automation integration to enhance both aesthetics and functionality. This website was built entirely as a solo project using Next.js, TypeScript, Tailwind CSS, and Framer Motion. It serves as a showcase platform for the company’s services, features, and product portfolio, highlighting its craftsmanship, design philosophy, and project gallery through a smooth and responsive user experience.",
    screenshots: [
      "/assets/projects/rasma 1.png",
      "/assets/projects/rasma 2.png",
      "/assets/projects/rasma 3.png",
    ],
  },
  {
    id: "gayathri-portfolio",
    title: "Portfolio Website- Gayathri S",
    description:
      "Gayathri Sreekumar is a personal stylist and nutritionist based in Bangalore, India, offering a wide range of personalized styling and image consulting services. This website showcases her expertise and services her works and achievements.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Sanity CMS",
    ],
    thumbnail: "/assets/projects/gaya 1.png",
    demoLink: "https://www.gayathrisreekumar.com/",
    fullDescription:
      "Gayathri Sreekumar has been a personal stylist since 2016 and is the founder of her namesake brand. With a degree in Fashion/Apparel Design from Garden City University, she brings rich experience as a fashion lecturer, designer, and merchandiser. Operating from Bangalore, she also offers global online styling consultations. This website was built entirely as a solo project using Next.js, TypeScript, Tailwind CSS, and Framer Motion, with Sanity CMS integrated for dynamic blog management. It serves as a comprehensive digital portfolio that highlights her professional journey, styling services, blog content, and client testimonials through a visually elegant and responsive design.",
    screenshots: [
      "/assets/projects/gaya 1.png",
      "/assets/projects/gaya 2.png",
      "/assets/projects/gaya 3.png",
      "/assets/projects/gaya 4.png",
      "/assets/projects/gaya 5.png",
      "/assets/projects/gaya 6.png",
    ],
  },
  {
  id: "singularity",
  title: "Singularity – Web & App Development Company",
  description:
    "Singularity is a web and mobile application development service company specializing in Webflow-based website solutions, UI/UX design, branding, SEO, and digital marketing services.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  thumbnail: "/assets/projects/sin 1.png",
  demoLink: "https://singularity-three-lovat.vercel.app",
  fullDescription:
    "Singularity is a web and mobile application development service company that primarily focuses on building high-performance websites using Webflow. The company also provides creative and technical services including UI/UX design, branding, SEO optimization, and digital marketing solutions. This project is an ongoing development for a startup that is currently in its planning and early-stage growth phase. The entire website was developed solely by me using Next.js, TypeScript, Tailwind CSS, and Framer Motion. It serves as a digital presence to showcase the company’s vision, service offerings, and brand identity through a modern and responsive interface.",
  screenshots: [
    "/assets/projects/sin 1.png",
    "/assets/projects/sin 2.png",
    "/assets/projects/sin 3.png",
    "/assets/projects/sin 4.png",
    "/assets/projects/sin 5.png",
  ],
},
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link key={index} to={`/project/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="bg-card border-border hover:border-primary transition-all shadow-card hover:shadow-glow group cursor-pointer h-full overflow-hidden flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Push this section to bottom */}
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
