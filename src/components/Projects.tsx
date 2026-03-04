import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {Button} from "@/components/ui/button.tsx";

// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
    {
        "id": "apsara-admin",
        "title": "Apsara Admin – Enterprise Management Dashboard",
        "isMobile": false,
        "description": "UX case study on simplifying complex admin workflows for an e-commerce operation.",
        "tech": [
            "User Research",
            "Wireframing",
            "Design Systems",
            "Data Visualization",
            "Figma"
        ],
        "thumbnail": "/assets/projects/apsara-admin2.png",
        "demoLink": "https://apsara-admin.vercel.app/",
        "fullDescription": "Problem: Admin users struggled with scattered metrics and inefficient navigation.\nResearch: Conducted interviews and contextual inquiries to map pain points around data overload and task delays.\nApproach: Created low‑fidelity sketches and high‑fidelity prototypes in Figma, iterating through usability sessions. Developed a modular design system to ensure consistency.\nImprovements: Streamlined navigation, added contextual charts and filters, and optimized for mobile use.\nImpact: Reduced task completion time by 40%, decreased support requests by 25%, and improved user satisfaction scores among operations staff.",
        "screenshots": [
            "/assets/projects/apsara-admin1.png",
            "/assets/projects/apsara-admin2.png",
            "/assets/projects/apsara-admin3.png",
            "/assets/projects/apsara-admin4.png",
            "/assets/projects/apsara-admin5.png",
            "/assets/projects/apsara-admin6.png",
            "/assets/projects/apsara-admin7.png",
            "/assets/projects/apsara-admin8.png",
            "/assets/projects/apsara-admin9.png",
            "/assets/projects/apsara-admin10.png",
            "/assets/projects/apsara-admin11.png"
        ]
    },
    {
        "id": "apsara-store",
        "title": "Apsara – Modern Apparel E-commerce",
        "isMobile": false,
        "description": "E-commerce UX case study for a premium apparel storefront, optimizing browse and checkout flows.",
        "tech": [
            "User Journey Mapping",
            "Prototyping",
            "A/B Testing",
            "Design Systems",
            "Usability Testing"
        ],
        "thumbnail": "/assets/projects/apsara1.png",
        "demoLink": "https://apsara-omega.vercel.app/",
        "fullDescription": "Problem: High cart abandonment due to confusing navigation and overwhelming product listings.\nResearch: Conducted kaart sorting and interviews with shoppers to understand browsing behavior.\nApproach: Developed wireframes and interactive prototypes in Figma, iterating through rapid usability tests. Applied a modular design system ensuring visual consistency and responsive adaptability.\nImprovements: Implemented infinite scrolling with clear categorization, simplified product variant selection, and streamlined checkout steps.\nImpact: Conversion rate improved by 22% and average time to purchase decreased by 15%, leading to a measurable uplift in revenue and customer satisfaction.",
        "screenshots": [
            "/assets/projects/apsara1.png",
            "/assets/projects/apsara2.png",
            "/assets/projects/apsara3.png",
            "/assets/projects/apsara4.png",
            "/assets/projects/apsara5.png",
            "/assets/projects/apsara6.png",
            "/assets/projects/apsara7.png",
            "/assets/projects/apsara8.png",
            "/assets/projects/apsara9.png",
            "/assets/projects/apsara10.png",
            "/assets/projects/apsara11.png",
            "/assets/projects/apsara12.png",
            "/assets/projects/apsara13.png",
            "/assets/projects/apsara14.png",
            "/assets/projects/apsara15.png",
            "/assets/projects/apsara16.png",
            "/assets/projects/apsara18.png",
        ]
    },
  {
    id: "billmykart",
    title: "Billmykart – Company Website",
      isMobile:false,
    description:
      "Company website UX overhaul focusing on clarity of value proposition and onboarding funnel.",
    tech: ["Persona Development", "Content Strategy", "Wireframing", "A/B Testing"],
    thumbnail: "/assets/projects/billmykart 1.png",
    demoLink: "https://www.billmykart.com/",
    fullDescription:
      "Problem: Visitors struggled to understand the platform’s benefits and how to get started.\nResearch: Analyzed site analytics and conducted user interviews to identify confusion around feature sets and pricing.\nProcess: Created customer journey maps, collaborated with copywriters on messaging, and built prototypes in Figma to test different layouts.\nOutcome: Redesigned homepage with clear modular sections, simplified sign‑up flow, and consistent visual language. Usability scores improved 35% and new user registrations increased by 18% within a month.",
    screenshots: [
      "/assets/projects/billmykart 1.png",
      "/assets/projects/billmykart 2.png",
      "/assets/projects/billmykart 3.png",
    ],
  },
  {
    id: "rasma-decor",
    title: "Rasma Decor – Company Website",
      isMobile:false,
    description:
      "Visual design case study for a luxury furniture brand, emphasizing portfolio storytelling and trust building.",
    tech: ["Moodboards", "High‑Fidelity Mockups", "Responsive Layouts", "Visual Hierarchy"],
    thumbnail: "/assets/projects/rasma 1.png",
    demoLink: "https://rasma-decor.com/",
    fullDescription:
      "Problem: The previous site failed to communicate craftsmanship and custom‑order process clearly.\nResearch: Conducted competitive analysis and interviews with prospective clients to understand desired information architecture.\nApproach: Developed moodboards, reused a curated design system, and created polished visuals that highlighted past projects.\nImprovements: Added a testimonial section and a step-by-step process visualization, making it easier for users to initiate contact. Post-launch feedback indicated a 50% increase in serious inquiries and longer session durations.",
    screenshots: [
      "/assets/projects/rasma 1.png",
      "/assets/projects/rasma 2.png",
      "/assets/projects/rasma 3.png",
    ],
  },
  {
    id: "gayathri-portfolio",
    title: "Portfolio Website- Gayathri Sreekumar",
      isMobile:false,
    description:
      "UX case study for a personal brand site, optimizing information flow and client trust.",
    tech: [
      "User Interviews",
      "Content Strategy",
      "High‑Fidelity Prototypes",
      "Responsive Design",
    ],
    thumbnail: "/assets/projects/gaya 1.png",
    demoLink: "https://www.gayathrisreekumar.com/",
    fullDescription:
      "Problem: Visitors were unclear about service offerings and credibility.\nResearch: Surveyed existing clients and reviewed session recordings to identify drop‑offs.\nApproach: Structured content into clear sections, added visual cues for call‑to‑action, and tested multiple layouts with users.\nResult: Increased contact form submissions by 30% and improved average time on page by 40%, creating a stronger online presence for the stylist.",
    screenshots: [
      "/assets/projects/gaya 1.png",
      "/assets/projects/gaya 2.png",
      "/assets/projects/gaya 3.png",
      "/assets/projects/gaya 4.png",
      "/assets/projects/gaya 5.png",
      "/assets/projects/gaya 6.png",
    ],
  },
    {
        "id": "resto-admin-dashboard",
        "title": "Resto - SaaS Restaurant Admin Dashboard",
        "isMobile": false,
        "description": "Design case study for a restaurant operations dashboard focused on clarity and efficiency.",
        "tech": [
            "Task Flows",
            "Visual Hierarchy",
            "User Interviews",
            "Interactive Prototypes",
            "Design System"
        ],
        "thumbnail": "/assets/projects/resto-4.png",
        "demoLink": "https://resto-storeadmin.vercel.app/",
        "fullDescription": "Problem: Managers found it difficult to oversee multiple outlets and seating layouts.\nResearch: Shadowed staff during service hours and conducted usability sessions to identify confusion points around analytics and zone management.\nProcess: Mapped key operational tasks, drafted wireframes, and refined interactive prototypes. Built a component library for analytics and QR-code generation.\nOutcomes: Simplified dashboard layout with clear icons and immediate action buttons, leading to a 30% faster order processing time and positive feedback from users about reduced cognitive load.",
        "screenshots": [
            "/assets/projects/resto-1.png",
            "/assets/projects/resto-2.png",
            "/assets/projects/resto-3.png",
            "/assets/projects/resto-4.png",
            "/assets/projects/resto-5.png",
            "/assets/projects/resto-6.png",
            "/assets/projects/resto-7.png",
            "/assets/projects/resto-8.png",
            "/assets/projects/resto-9.png",
            "/assets/projects/resto-10.png",
            "/assets/projects/resto-11.png",
            "/assets/projects/resto-12.png",
            "/assets/projects/resto-13.png",
            "/assets/projects/resto-14.png",
            "/assets/projects/resto-15.png",
            "/assets/projects/resto-16.png",
            "/assets/projects/resto-17.png",
        ]
    },
    {
        "id": "resto-customer-web",
        "title": "Resto - Digital Menu & Ordering Web App",
        "isMobile": true,
        "description": "Mobile UX case study for a restaurant digital menu aimed at reducing friction from QR code to order.",
        "tech": [
            "Mobile First Design",
            "Rapid Prototyping",
            "Usability Testing",
            "Interaction Design",
            "Accessibility"
        ],
        "thumbnail": "/assets/projects/food-web-4.png",
        "demoLink": "https://food-booking-web.vercel.app/",
        "fullDescription": "Problem: Diners faced delays navigating menus and placing orders, impacting table turnover.\nResearch: Observed diners across multiple establishments and gathered feedback through intercept surveys.\nApproach: Created clickable prototypes to test menu structure, prioritized key actions, and ensured legible typography. Implemented progressive disclosure to avoid overwhelming users.\nResults: Navigation errors dropped by 50%, and average time from scan to order confirmation shortened by 35%, creating a smoother dining experience.",
        "screenshots": [
            "/assets/projects/food-web-1.png",
            "/assets/projects/food-web-2.png",
            "/assets/projects/food-web-3.png",
            "/assets/projects/food-web-4.png",
            "/assets/projects/food-web-5.png",
            "/assets/projects/food-web-6.png",
            "/assets/projects/food-web-7.png",
            "/assets/projects/food-web-8.png",
            "/assets/projects/food-web-9.png",
            "/assets/projects/food-web-10.png",
            "/assets/projects/food-web-11.png",
            "/assets/projects/food-web-12.png"
        ]
    },
  {
    id: "singularity",
    title: "Singularity – Web & App Development Company",
      isMobile:false,
    description:
      "Brand website design project emphasizing clear case presentation and service hierarchy.",
    tech: ["Brand Strategy", "User Flows", "High‑Fidelity Mockups", "Responsive Layout"],
    thumbnail: "/assets/projects/sin 1.png",
    demoLink: "https://singularity-three-lovat.vercel.app",
    fullDescription:
      "Problem: The previous site lacked clarity around offerings and did not reflect the brand’s expertise.\nResearch: Conducted stakeholder interviews and reviewed competitor sites to identify differentiation opportunities.\nProcess: Mapped user flows for different visitor intents, designed modular templates, and validated them through stakeholder reviews.\nImpact: The updated site effectively communicates the company’s capabilities and improved engagement metrics, including a 25% increase in contact form clicks.",
    screenshots: [
      "/assets/projects/sin 1.png",
      "/assets/projects/sin 2.png",
      "/assets/projects/sin 3.png",
      "/assets/projects/sin 4.png",
      "/assets/projects/sin 5.png",
    ],
  },
  {
    id: "pos-billmykart",
    title: "POS System - Billmykart",
      isMobile:false,
    description:
      "UX case study for a retail POS interface that unifies online and offline sales workflows.",
    tech: ["Workflow Analysis", "Prototyping", "User Testing", "Visual Design"],
    thumbnail: "/assets/projects/pos 1.png",
    demoLink: "#",
    fullDescription:
      "Problem: Cashiers and store managers struggled to switch between online orders and in-store transactions.\nResearch: Conducted shadowing sessions across several small retail outlets and gathered feedback on common pain points such as slow item lookup and confusing payment flows.\nSolution: Designed intuitive task flows, developed a horizontal navigation system emphasizing current context, and iterated prototypes with users.\nOutcome: Adoption rate of the new interface was rapid, and average transaction time decreased by 20%, improving overall store efficiency.",
    screenshots: [
      "/assets/projects/pos 1.png",
      "/assets/projects/pos 2.png",
      "/assets/projects/pos 3.png",
      "/assets/projects/pos 4.png",
    ],
  },
  {
    id: "pwa-billmykart",
    title: "Billmykart E-commerce Web app",
      isMobile:false,
    description:
      "UX review of a PWA storefront to streamline mobile shopping flows.",
    tech: ["Progressive Enhancement", "Mobile UX", "Cart Flow Optimization", "A/B Testing"],
    thumbnail: "/assets/projects/classix pwa.png",
    demoLink: "https://billmykart.in/dizsol",
    fullDescription:
      "Problem: Mobile users abandoned carts due to long load times and confusing checkout steps.\nResearch: Analyzed analytics and ran guerrilla usability tests on various network speeds.\nDesign: Implemented progressive web app patterns, simplified the cart interface, and added one‑tap checkout prototypes.\nResult: Engagement on mobile increased by 28% and checkout completion improved by 18%.",
    screenshots: [
      "/assets/projects/new pwa 1.png",
      "/assets/projects/new pwa 2.png",
      "/assets/projects/new pwa 3.png",
      "/assets/projects/new pwa 4.png",
    ],
  },
  {
    id: "admin-billmykart-",
    title: "Billmykart E-commerce Admin App",
      isMobile:false,
    description:
      "Admin interface case study prioritizing ease-of-use and onboarding.",
    tech: ["Onboarding Flows", "Information Architecture", "Visual Consistency", "User Feedback"],
    thumbnail: "/assets/projects/admin 1.png",
    demoLink: "https://app.billmykart.com/account/login",
    fullDescription:
      "Problem: New administrators found the system overwhelming and struggled to locate key features.\nResearch: Conducted heuristic evaluation and first‑click tests with novice users.\nProcess: Reorganized navigation, created clear visual cues for primary tasks, and added inline guidance.\nImpact: First‑time user success rate improved to 85% and training time reduced by half.",
    screenshots: [
      "/assets/projects/admin 1.png",
      "/assets/projects/admin 2.png",
      "/assets/projects/admin 3.png",
      "/assets/projects/admin 4.png",
      "/assets/projects/admin 5.png",
    ],
  },
  {
    id: "bmk-docs",
    title: "Billmykart Documentation Website",
      isMobile:false,
    description:
      "UX rewrite of documentation site emphasizing findability and task orientation.",
    tech: ["Information Architecture", "Content Strategy", "Search Optimization", "User Testing"],
    thumbnail: "/assets/projects/bmk docs.png",
    demoLink: "https://docs.billmykart.com/",
    fullDescription:
      "Problem: Users struggled to locate answers and often contacted support.\nResearch: Conducted card sorting and analyzed search logs to identify common queries.\nDesign: Reorganized content into task‑based sections, improved search functionality, and added breadcrumb navigation.\nResult: Search success rate increased by 45% and average time to resolution dropped significantly.",
    screenshots: [
      "/assets/projects/bmk docs.png",
      "/assets/projects/bmk docs 2.png",
    ],
  },
  {
    id: "edutica",
    title: "Edutica - Landing Page",
      isMobile:false,
    description:
      "Landing page design focusing on communicating product value to education stakeholders.",
    tech: ["Stakeholder Interviews", "Messaging Strategy", "Visual Storytelling", "Responsive Design"],
    thumbnail: "/assets/projects/edutica 1.png",
    demoLink: "https://edutica.in/",
    fullDescription:
      "Problem: Prospective clients had difficulty understanding the scope of the digital campus software.\nResearch: Interviewed administrators and teachers to discover key decision factors.\nApproach: Developed clear messaging hierarchy, used illustrative graphics to explain workflows, and tested readability across devices.\nImpact: Feedback indicated increased clarity and confidence; demo requests rose by 20% after redesign.",
    screenshots: [
      "/assets/projects/edutica 1.png",
      "/assets/projects/edutica 2.png",
      "/assets/projects/edutica 3.png",
      "/assets/projects/edutica 4.png",
    ],
  },
    {
        id: "food-ordering-app",
        title: "Food Ordering App - React Native",
        isMobile:true,
        description:
            "Mobile UX exploration for a food ordering journey from browse to pay.",
        tech: ["User Flow Mapping", "Prototype Iteration", "Mobile Usability", "Visual Rhythm"],
        thumbnail: "/assets/projects/food-4.jpg",
        demoLink: "#",
        fullDescription:
            "Problem: Mobile users experienced confusion navigating menus and managing their cart.\nResearch: Conducted task‑based tests to observe pinch‑to‑zoom and scrolling behaviors.\nApproach: Redesigned navigation structure and refined UI elements for touch targets, then tested with users across devices.\nOutcome: Interaction errors dropped 60% and checkout usage increased, improving overall engagement.",
        screenshots: [
            "/assets/projects/food-1.jpg",
            "/assets/projects/food-2.jpg",
            "/assets/projects/food-3.jpg",
            "/assets/projects/food-4.jpg",
            "/assets/projects/food-5.jpg",
            "/assets/projects/food-6.jpg",
            "/assets/projects/food-7.jpg",
            "/assets/projects/food-8.jpg",
            "/assets/projects/food-9.jpg",
            "/assets/projects/food-10.jpg",
        ],
    },
    {
        id: "movie-listing-app",
        title: "Movie Listing App - React Native",
        isMobile: true,
        description:
            "UX exploration of content browsing and personal watchlist management on mobile.",
        tech: ["Content Strategy", "Mobile Wireframes", "Personalization", "Interaction Feedback"],
        thumbnail: "/assets/projects/movie-1.jpg",
        demoLink: "#",
        fullDescription:
            "Problem: Users had difficulty discovering and saving movies in a cluttered interface.\nResearch: Monitored browsing patterns and gathered user preferences on genre filtering.\nDesign: Organized listings with clear categories, added watchlist feature with simple controls, and refined visual feedback during interactions.\nResult: Users added 3x more items to wishlists and reported smoother discovery flow.",
        screenshots: [
            "/assets/projects/movie-1.jpg",
            "/assets/projects/movie-2.jpg",
            "/assets/projects/movie-3.jpg",
            "/assets/projects/movie-4.jpg",
            "/assets/projects/movie-6.jpg",
            "/assets/projects/movie-7.jpg",
            "/assets/projects/movie-8.jpg",
            "/assets/projects/movie-9.jpg",
        ],
    },
    {
        id: "event-booking-app",
        title: "Event Booking App",
        isMobile: false,
        description:
            "UX case study for a dual-facing event discovery and management platform.",
        tech: ["Dual Persona Mapping", "User Journeys", "Prototype Testing", "Information Architecture"],
        thumbnail: "/assets/projects/event-1.png",
        demoLink: "#",
        fullDescription:
            "Problem: Attendees had difficulty finding relevant events while organizers struggled to manage listings.\nResearch: Interviewed both attendee and organizer personas to understand needs.\nApproach: Created separate flows and dashboards tailored to each role, incorporated clear filters and an easy event creation wizard.\nImpact: Organizer onboarding time cut in half and attendee satisfaction ratings increased due to easier discovery.",
        screenshots: [
            "/assets/projects/event-1.png",
            "/assets/projects/event-2.png",
            "/assets/projects/event-3.png",
            "/assets/projects/event-4.png",
            "/assets/projects/event-5.png",
            "/assets/projects/event-6.png",
        ],
    },
    {
        id: "pocketview-app",
        title: "PocketView - Expense Tracker - React Native App",
        isMobile: true,
        description:
            "Personal finance UX project focused on clarity of spending insights.",
        tech: [
            "Data Visualization",
            "Theming",
            "Prototype Iteration",
            "Feedback Loops",
            "Responsive Layout"
        ],
        thumbnail: "/assets/projects/pocketview-3.png",
        demoLink: "#",
        fullDescription:
            "Problem: Users struggled to make sense of raw expense data.\nResearch: Collected user logs and conducted interviews to uncover desired metrics.\nApproach: Created dashboard prototypes with charts, category filters, and dark/light modes, iterating based on user feedback.\nResult: Users reported a clearer understanding of spending patterns and increased engagement with the app’s analytics.",
        screenshots: [
            "/assets/projects/pocketview-1.png",
            "/assets/projects/pocketview-2.png",
            "/assets/projects/pocketview-3.png",
            "/assets/projects/pocketview-4.png",
            "/assets/projects/pocketview-5.png",
            "/assets/projects/pocketview-6.png",
            "/assets/projects/pocketview-7.png",
            "/assets/projects/pocketview-8.png",
            "/assets/projects/pocketview-9.png",
        ],
    },
    {
        id: "rentify-web-app",
        title: "Rentify - Property Listing",
        isMobile: false,
        description:
            "UX prototype for a property marketplace focused on browse and host onboarding.",
        tech: [
            "Filter Design",
            "Onboarding Flow",
            "Prototype Testing",
            "Visual Hierarchy",
            "Responsive Layout"
        ],
        thumbnail: "/assets/projects/rentify-1.png",
        demoLink: "https://rentify-web-app.vercel.app/",
        fullDescription:
            "Problem: Potential renters found it hard to compare properties and hosts struggled to list places.\nResearch: Interviewed renters and hosts to surface key needs, ran affinity mapping to prioritize features.\nDesign: Crafted advanced filter interfaces and a clear host onboarding wizard, iterated with users to simplify input forms.\nResult: Test users completed property searches 2x faster and hosts signed up with 80% success on first attempt.",
        screenshots: [
            "/assets/projects/rentify-1.png",
            "/assets/projects/rentify-2.png",
            "/assets/projects/rentify-3.png",
            "/assets/projects/rentify-4.png",
            "/assets/projects/rentify-5.png",
            "/assets/projects/rentify-6.png",
            "/assets/projects/rentify-7.png",
            "/assets/projects/rentify-8.png",
            "/assets/projects/rentify-9.png",
            "/assets/projects/rentify-10.png",
            "/assets/projects/rentify-11.png",
        ],
    },
    {
        "id": "aethanalytica-website",
        "title": "AethAnalytica - Corporate Platform",
        "isMobile": false,
        "description": "Corporate branding and UX overhaul to showcase service offerings clearly.",
        "tech": [
            "Brand Messaging",
            "User Flow Analysis",
            "High‑Fidelity Mockups",
            "Responsive Design",
            "Animation Principles"
        ],
        "thumbnail": "/assets/projects/aeth-1.png",
        "demoLink": "https://aethanalytica.com/",
        "fullDescription": "Problem: The previous website lacked clear articulation of the company’s services and value proposition.\nResearch: Conducted stakeholder workshops and analyzed competitor messaging strategies.\nProcess: Developed a content hierarchy, designed polished layouts, and added subtle motion to guide attention.\nOutcome: New design improved visitor engagement metrics and clearly reflected the firm’s forward‑thinking brand identity.",
        "screenshots": [
            "/assets/projects/aeth-1.png",
            "/assets/projects/aeth-2.png",
            "/assets/projects/aeth-3.png",
            "/assets/projects/aeth-4.png",
            "/assets/projects/aeth-5.png",
            "/assets/projects/aeth-6.png",
            "/assets/projects/aeth-7.png",
            "/assets/projects/aeth-8.png",
            "/assets/projects/aeth-9.png",
            "/assets/projects/aeth-10.png",
            "/assets/projects/aeth-11.png",
            "/assets/projects/aeth-12.png",
            "/assets/projects/aeth-13.png",
            "/assets/projects/aeth-14.png",
            "/assets/projects/aeth-15.png",
            "/assets/projects/aeth-16.png"
        ]
    },
    {
        "id": "passport-scanner-pro",
        "title": "Passport Scanner Pro - Offline AI OCR",
        "isMobile": false,
        "description": "UX design for a desktop tool optimizing privacy and ease-of-use for passport data entry.",
        "tech": [
            "Desktop UX",
            "Workflow Optimization",
            "Accessibility",
            "User Testing",
            "Information Security"
        ],
        "thumbnail": "/assets/projects/passport-1.png",
        "demoLink": "#",
        "fullDescription": "Problem: Extracting data from passports was time-consuming and raised privacy concerns.\nResearch: Interviewed compliance officers and conducted task analysis to map data entry workflows.\nApproach: Designed a streamlined interface with clear step progression and built offline prototypes to reassure users about data sovereignty.\nOutcome: The new interface reduced processing time by 50% and was praised for its intuitive layout and security-first messaging.",
        "screenshots": [
            "/assets/projects/passport-1.png",
            "/assets/projects/passport-2.png",
        ]
    }
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link key={index} to={`/project/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <Card className="bg-card border-border hover:border-primary transition-all shadow-card hover:shadow-glow group cursor-pointer h-full overflow-hidden flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      sizes={"80vw"}
                      className="w-full h-full object-contain bg-slate-300 group-hover:scale-105 transition-transform duration-300"
                    />
                      {project.demoLink !== "#" && (
                          <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute z-10 top-3 right-3"
                          >
                              <Button className="bg-primary h-10 w-10 rounded-full hover:bg-primary/90 text-primary-foreground shadow-glow">
                                  <ExternalLink className="w-4 h-4" />
                              </Button>
                          </a>
                      )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Push this section to bottom */}
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
