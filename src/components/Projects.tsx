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
  {
    id: "pos-billmykart",
    title: "POS System - Billmykart",
    description:
      "A unified POS and eCommerce platform designed for retailers and businesses of all sizes to seamlessly manage both online and in-store sales in one system. ",
    tech: ["TypeScript", "Angular", "Bootstrap", "Npm packages"],
    thumbnail: "/assets/projects/pos 1.png",
    demoLink: "#",
    fullDescription:
      "The POS software facilitates end-to-end retail management, including inventory control, real-time sales tracking, customer data synchronization, multi-channel integration, and centralized reporting.",
    screenshots: [
      "/assets/projects/pos 1.png",
      "/assets/projects/pos 2.png",
      "/assets/projects/pos 3.png",
      "/assets/projects/pos 4.png",
    ],
  },
  {
    id: "pwa-billmykart",
    title: "Billmykart Customer App",
    description:
      "E-commerce website that created with billmykart platform. It offers a seamless shopping experience with features like product browsing, cart management, secure checkout, and order tracking.",
    tech: ["TypeScript", "Angular", "Bootstrap", "Npm packages"],
    thumbnail: "/assets/projects/classix pwa.png",
    demoLink: "https://dizfresh.com/",
    fullDescription:
      "E-commerce website that created with billmykart platform. It offers a seamless shopping experience with features like product browsing, cart management, secure checkout, and order tracking.",
    screenshots: [
      "/assets/projects/new pwa 1.png",
      "/assets/projects/new pwa 2.png",
      "/assets/projects/new pwa 3.png",
      "/assets/projects/new pwa 4.png",
    ],
  },
  {
    id: "admin-billmykart-",
    title: "Billmykart Admin App",
    description:
      "Billmykart's admin website and tools are designed for ease-of-use and scalability, making it suitable for entrepreneurs from startups to enterprises aiming for professional e-commerce operations.",
    tech: ["TypeScript", "Angular", "Bootstrap", "Npm packages"],
    thumbnail: "/assets/projects/admin 1.png",
    demoLink: "https://app.billmykart.com/account/login",
    fullDescription:
      "The Billmykart admin app offers a powerful suite of features designed to streamline e-commerce management and maximize business growth. With its intuitive dashboard, administrators can centrally manage users, products, orders, and inventory, ensuring seamless operations even for large-scale stores. The app provides customizable templates and premium themes, enabling tailored storefronts without technical expertise. Advanced marketing tools—including SEO optimization, automated refunds, coupons, and special offers—help attract and retain customers, while integrated analytics deliver actionable insights for performance improvement. Multi-currency support and fast checkout options enhance the shopping experience and expand global reach. ",
    screenshots: [
      "/assets/projects/admin 1.png",
      "/assets/projects/admin 2.png",
      "/assets/projects/admin 3.png",
      "/assets/projects/admin 4.png",
      "/assets/projects/admin 5.png",
    ],
  },
  {
    id: "bmk-docs",
    title: "Billmykart Documentation Website",
    description:
      "Comprehensive documentation website for Billmykart, providing detailed guides, tutorials, and references to help users effectively utilize the Billmykart platform and its features.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/assets/projects/bmk docs.png",
    demoLink: "https://docs.billmykart.com/",
    fullDescription:
      "The Billmykart documentation website serves as an essential resource for users of the Billmykart e-commerce platform. It offers a wide range of materials, including step-by-step guides, video tutorials, API references, and FAQs to assist users in navigating and maximizing the platform's capabilities. The documentation is organized into clear sections covering topics such as account setup, product management, order processing, payment integration, and marketing tools. This website was built entirely as a solo project using Next.js, Tailwind CSS, and TypeScript, with Framer Motion integrated for smooth animations and enhanced user experience.",
    screenshots: [
      "/assets/projects/bmk docs.png",
      "/assets/projects/bmk docs 2.png",
    ],
  },
  {
    id: "edutica",
    title: "Edutica - Landing Page",
    description:
      "This project is a landing page for Edutica, a cutting-edge digital campus software ",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/assets/projects/edutica 1.png",
    demoLink: "https://edutica.in/",
    fullDescription:
      "This project is a landing page for Edutica, a cutting-edge digital campus software designed to streamline and enhance the management of educational institutions. The landing page serves as an informative platform that highlights the features, benefits, and overall functionality of the Edutica system. It was built entirely as a solo project using Next.js, Tailwind CSS, and TypeScript, with Framer Motion integrated for smooth animations and an engaging user experience.",
    screenshots: [
      "/assets/projects/edutica 1.png",
      "/assets/projects/edutica 2.png",
      "/assets/projects/edutica 3.png",
      "/assets/projects/edutica 4.png",
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
