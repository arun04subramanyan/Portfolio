import { useParams, Link } from "react-router-dom";
import { projects } from "@/components/Projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link to="/#projects">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-secondary text-secondary-foreground px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {project.demoLink !== "#" && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-8"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
            </a>
          )}

          <Card className="bg-card border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About This Project
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              {project.fullDescription}
            </p>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Screenshots</h2>
            <div className={`grid grid-cols-1   gap-6 max-w-6xl mx-auto ${project?.isMobile ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-card border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
