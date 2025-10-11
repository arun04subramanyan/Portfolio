import { Home, User, Briefcase, Code, FolderOpen, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", icon: Home, href: "#hero" },
  { name: "About", icon: User, href: "#about" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Skills", icon: Code, href: "#skills" },
  { name: "Projects", icon: FolderOpen, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-card/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg">
      <div className="flex items-center gap-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              aria-label={item.name}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default FloatingNav;
