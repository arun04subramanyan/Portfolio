const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-lg p-8 border border-border shadow-card">
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate frontend engineer with 2.5 years of experience building modern, scalable web applications. 
              My journey in web development has been driven by a love for creating intuitive user experiences and solving 
              complex problems with elegant code.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              With expertise in Angular and Next.js, I specialize in developing high-performance applications that 
              deliver exceptional user experiences. I'm constantly learning and exploring new technologies to stay 
              at the forefront of frontend development.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, reading about the latest 
              web technologies, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
