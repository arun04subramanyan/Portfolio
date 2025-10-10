import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce application built with Next.js and TypeScript. Implemented product catalog, cart functionality, and payment integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Enterprise Dashboard",
    description: "Complex Angular dashboard for data visualization and analytics. Features real-time updates, charts, and role-based access control.",
    tech: ["Angular", "RxJS", "NgRx", "Chart.js"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Social Media App",
    description: "Real-time social media application with posts, comments, and likes. Built with React and integrated with RESTful APIs.",
    tech: ["React", "Redux", "REST API", "CSS Modules"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Task Management Tool",
    description: "Collaborative task management application with drag-and-drop functionality. Supports team collaboration and project tracking.",
    tech: ["Angular", "TypeScript", "Material UI", "Firebase"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all shadow-card hover:shadow-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
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
                      className="bg-muted text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.links.demo}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a 
                    href={project.links.github}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Source Code</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
