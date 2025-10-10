const About = () => {
  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Elegant SVG Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-primary"/>
              <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-primary"/>
              <circle cx="60" cy="0" r="1.5" fill="currentColor" className="text-primary"/>
              <circle cx="0" cy="60" r="1.5" fill="currentColor" className="text-primary"/>
              <circle cx="60" cy="60" r="1.5" fill="currentColor" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative gradient blur */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative backdrop-blur-sm bg-background/50 rounded-2xl p-10 md:p-12">
              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I'm a passionate frontend engineer with <span className="font-semibold text-primary">2.5 years of experience</span> building modern, scalable web applications. 
                  My journey in web development has been driven by a love for creating intuitive user experiences and solving 
                  complex problems with elegant code.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  With expertise in <span className="font-semibold text-primary">Angular</span> and <span className="font-semibold text-primary">Next.js</span>, I specialize in developing high-performance applications that 
                  deliver exceptional user experiences. I'm constantly learning and exploring new technologies to stay 
                  at the forefront of frontend development.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  When I'm not coding, you can find me contributing to open-source projects, reading about the latest 
                  web technologies, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
