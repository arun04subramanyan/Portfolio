import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto relative">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="blobClip">
                  <path fill="currentColor" d="M42.7,-62.9C54.4,-54.5,62.5,-41.5,68.1,-27.3C73.7,-13.1,76.8,2.3,73.8,16.1C70.8,29.9,61.7,42.1,50.1,51.4C38.5,60.7,24.4,67.1,9.3,70.8C-5.8,74.5,-22,75.5,-36.2,69.8C-50.4,64.1,-62.6,51.7,-68.9,37C-75.2,22.3,-75.6,5.3,-72.1,-10.5C-68.6,-26.3,-61.2,-40.9,-50.2,-49.6C-39.2,-58.3,-24.6,-61.1,-10.3,-63.5C4,-65.9,31,-67.3,42.7,-62.9Z" transform="translate(100 100)" />
                </clipPath>
              </defs>
            </svg>
            <div className="w-full h-full rounded-full bg-gradient-primary p-1 shadow-glow" style={{ clipPath: 'url(#blobClip)' }}>
              <img 
                src="/placeholder.svg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                style={{ clipPath: 'url(#blobClip)' }}
              />
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
