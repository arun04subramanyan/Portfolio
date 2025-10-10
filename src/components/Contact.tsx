import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about frontend development.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            onClick={() => window.open('https://linkedin.com', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Connect on LinkedIn
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.location.href = 'mailto:your.email@example.com'}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Frontend Engineer Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
