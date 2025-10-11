import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Palette, Smartphone } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: "650+", label: "Projects Done" },
    { value: "99%", label: "Happy Client" },
    { value: "240+", label: "Fine Artworks" }
  ];

  const floatingIcons = [
    { Icon: Code2, className: "top-12 right-20" },
    { Icon: Palette, className: "top-32 left-16" },
    { Icon: Smartphone, className: "bottom-24 right-12" }
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-hero px-4 md:px-8 py-12">
      {/* Hero Content */}
      <div className="container mx-auto py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Make <span className="bg-gradient-primary bg-clip-text text-transparent">Designs</span> That<br />
                Engage, Delight,<br />
                and Connect
              </h1>
              <p className="text-lg text-foreground/70 max-w-md">
                Hi, I'm Travis! With more than 10 years of experience, I'm ready to be a part of your wonderful project!
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl"></div>
              
              {/* Main Profile Circle with Gradient Border */}
              <div className="relative w-full h-full">
                <svg className="absolute inset-0 w-full h-full -rotate-12" viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "hsl(271 91% 65%)", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "hsl(217 91% 60%)", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="250" cy="250" r="240" fill="none" stroke="url(#borderGradient)" strokeWidth="8" />
                </svg>

                <div className="absolute inset-4 rounded-full overflow-hidden bg-background shadow-2xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Icon Decorations */}
              {floatingIcons.map(({ Icon, className }, index) => (
                <div 
                  key={index}
                  className={`absolute ${className} w-16 h-16 bg-background rounded-2xl shadow-lg flex items-center justify-center animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
