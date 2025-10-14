import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Footer = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <footer className="py-8 bg-card border-t border-border max-sm:pb-20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground max-sm:text-center">
            © {new Date().getFullYear()} Bijin Ev - Frontend Engineer. All rights reserved.
          </p>
          
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
