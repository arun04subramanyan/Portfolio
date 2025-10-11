import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce application built with Next.js and TypeScript. Implemented product catalog, cart functionality, and payment integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    demoLink: "#",
    fullDescription: "A comprehensive e-commerce solution featuring advanced product search, real-time inventory management, secure checkout process with Stripe integration, and responsive design for seamless shopping across all devices.",
    screenshots: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "enterprise-dashboard",
    title: "Enterprise Dashboard",
    description: "Complex Angular dashboard for data visualization and analytics. Features real-time updates, charts, and role-based access control.",
    tech: ["Angular", "RxJS", "NgRx", "Chart.js"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demoLink: "#",
    fullDescription: "An enterprise-grade analytics dashboard with real-time data visualization, interactive charts, customizable widgets, and comprehensive role-based access control for secure data management.",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description: "Real-time social media application with posts, comments, and likes. Built with React and integrated with RESTful APIs.",
    tech: ["React", "Redux", "REST API", "CSS Modules"],
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    demoLink: "#",
    fullDescription: "A dynamic social media platform featuring real-time post updates, interactive comment threads, like functionality, user profiles, and a responsive feed optimized for engagement.",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=800&fit=crop"
    ]
  },
  {
    id: "task-management-tool",
    title: "Task Management Tool",
    description: "Collaborative task management application with drag-and-drop functionality. Supports team collaboration and project tracking.",
    tech: ["Angular", "TypeScript", "Material UI", "Firebase"],
    thumbnail: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    demoLink: "#",
    fullDescription: "A powerful project management tool with intuitive drag-and-drop task boards, team collaboration features, real-time updates, and comprehensive project tracking capabilities.",
    screenshots: [
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link 
              key={index}
              to={`/project/${project.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
              <Card 
                className="bg-card border-border hover:border-primary transition-all shadow-card hover:shadow-glow group cursor-pointer h-full overflow-hidden"
              >
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
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
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
