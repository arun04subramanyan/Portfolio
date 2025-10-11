import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
};

export default Index;
