import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      colors: {
        border: "rgb(from var(--border) r g b / <alpha-value>)",
        input: "rgb(from var(--input) r g b / <alpha-value>)",
        ring: "rgb(from var(--ring) r g b / <alpha-value>)",
        background: "rgb(from var(--background) r g b / <alpha-value>)",
        foreground: "rgb(from var(--foreground) r g b / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(from var(--primary) r g b / <alpha-value>)",
          foreground: "rgb(from var(--primary-foreground) r g b / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(from var(--secondary) r g b / <alpha-value>)",
          foreground: "rgb(from var(--secondary-foreground) r g b / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(from var(--destructive) r g b / <alpha-value>)",
          foreground: "rgb(from var(--destructive-foreground) r g b / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(from var(--muted) r g b / <alpha-value>)",
          foreground: "rgb(from var(--muted-foreground) r g b / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(from var(--accent) r g b / <alpha-value>)",
          foreground: "rgb(from var(--accent-foreground) r g b / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(from var(--popover) r g b / <alpha-value>)",
          foreground: "rgb(from var(--popover-foreground) r g b / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(from var(--card) r g b / <alpha-value>)",
          foreground: "rgb(from var(--card-foreground) r g b / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "rgb(from var(--sidebar-background) r g b / <alpha-value>)",
          foreground: "rgb(from var(--sidebar-foreground) r g b / <alpha-value>)",
          primary: "rgb(from var(--sidebar-primary) r g b / <alpha-value>)",
          "primary-foreground": "rgb(from var(--sidebar-primary-foreground) r g b / <alpha-value>)",
          accent: "rgb(from var(--sidebar-accent) r g b / <alpha-value>)",
          "accent-foreground": "rgb(from var(--sidebar-accent-foreground) r g b / <alpha-value>)",
          border: "rgb(from var(--sidebar-border) r g b / <alpha-value>)",
          ring: "rgb(from var(--sidebar-ring) r g b / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-name': 'var(--gradient-name)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px #3B82F64D"
          },
          "50%": {
            boxShadow: "0 0 40px #3B82F699"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
