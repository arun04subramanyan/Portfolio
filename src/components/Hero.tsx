import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-primary p-1 shadow-glow">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
              ME
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Frontend Engineer
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-2xl mx-auto">
          Building exceptional web experiences with Angular & Next.js
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          2.5 years of crafting modern, scalable applications
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
