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

// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {
    id: "billmykart",
    title: "Billmykart – Product Website",
      isMobile:false,
    description:
      "Billmykart is an e-commerce platform that allows businesses and individuals to launch a professional online store quickly and easily.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/assets/projects/billmykart 1.png",
    demoLink: "https://www.billmykart.com/",
    fullDescription:
      "Billmykart is an all-in-one e-commerce platform designed to help businesses launch and manage online stores quickly and easily—without requiring any technical skills. It offers website and mobile app creation, inventory and order management, customizable branding, integrated payment gateways, marketing tools, and multi-channel selling across platforms like Instagram and Facebook. This website serves as an informative platform that explains the features, pricing plans, and overall functionality of the Billmykart system. It was built entirely as a solo project using Next.js, Tailwind CSS, and TypeScript.",
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
      "Rasma Decor is a company specializing in bespoke, order-based furniture and interior fittings, focusing on personalized, luxury solutions for both homes and businesses. ",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/assets/projects/rasma 1.png",
    demoLink: "https://rasma-decor.com/",
    fullDescription:
      "Rasma Decor & Trading is a bespoke furniture and interior solutions company specializing in custom order-based fittings and design services for both residential and commercial spaces. The company provides a complete end-to-end process—from initial design and 3D visualization to material sourcing and final installation—ensuring every project reflects the client’s unique vision and lifestyle. Their offerings include luxury furniture, décor accessories, lighting solutions, and smart automation integration to enhance both aesthetics and functionality. This website was built entirely as a solo project using Next.js, TypeScript, Tailwind CSS, and Framer Motion. It serves as a showcase platform for the company’s services, features, and product portfolio, highlighting its craftsmanship, design philosophy, and project gallery through a smooth and responsive user experience.",
    screenshots: [
      "/assets/projects/rasma 1.png",
      "/assets/projects/rasma 2.png",
      "/assets/projects/rasma 3.png",
    ],
  },
  {
    id: "gayathri-portfolio",
    title: "Portfolio Website- Gayathri S",
      isMobile:false,
    description:
      "Gayathri Sreekumar is a personal stylist and nutritionist based in Bangalore, India, offering a wide range of personalized styling and image consulting services. This website showcases her expertise and services her works and achievements.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Sanity CMS",
    ],
    thumbnail: "/assets/projects/gaya 1.png",
    demoLink: "https://www.gayathrisreekumar.com/",
    fullDescription:
      "Gayathri Sreekumar has been a personal stylist since 2016 and is the founder of her namesake brand. With a degree in Fashion/Apparel Design from Garden City University, she brings rich experience as a fashion lecturer, designer, and merchandiser. Operating from Bangalore, she also offers global online styling consultations. This website was built entirely as a solo project using Next.js, TypeScript, Tailwind CSS, and Framer Motion, with Sanity CMS integrated for dynamic blog management. It serves as a comprehensive digital portfolio that highlights her professional journey, styling services, blog content, and client testimonials through a visually elegant and responsive design.",
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
        "description": "A modern SaaS admin platform built with Next.js 16 and MongoDB, featuring OTP authentication via Resend, Recharts analytics, and comprehensive zone management.",
        "tech": [
            "Next.js 16",
            "TypeScript",
            "MongoDB (Mongoose)",
            "Next.js API Routes",
            "Resend (OTP Auth)",
            "Cloudinary",
            "Recharts",
            "Zustand",
            "Tailwind CSS"
        ],
        "thumbnail": "/assets/projects/resto-4.png",
        "demoLink": "https://resto-storeadmin.vercel.app/",
        "fullDescription": "Resto Admin is a comprehensive SaaS platform designed for managing multi-outlet restaurant operations, built on the cutting-edge **Next.js 16** framework. The application utilizes a robust serverless backend powered entirely by **Next.js API routes**, ensuring seamless data flow and scalability. Security is streamlined through a passwordless authentication system that leverages **Resend** for reliable, instant OTP delivery via email.\n\nThe platform handles rich media efficiently using **Cloudinary** for secure storage and optimization of store branding assets, such as logos and menu item images. A key feature of the dashboard is its analytics suite, powered by **Recharts**, which provides owners with visual insights into key performance metrics. \n\nOperational tools include a dynamic Hall and Table management system where admins can configure physical dining zones and track real-time occupancy. The system also features an automated generator for unique, branded QR codes linked to specific table IDs, enabling a frictionless digital menu experience for customers.",
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
        "description": "A mobile-first customer dining interface built with Next.js 16, allowing users to scan QR codes, browse dynamic menus, and place orders seamlessly.",
        "tech": [
            "Next.js 16",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "Framer Motion",
            "PWA Capable"
        ],
        "thumbnail": "/assets/projects/food-web-4.png",
        "demoLink": "https://food-booking-web.vercel.app/",
        "fullDescription": "The Resto Customer Web App is the consumer-facing component of the Resto ecosystem, designed to deliver a frictionless dining experience. Built as a high-performance **Next.js 16** application, it functions as a digital concierge for restaurant guests. \n\nThe core journey begins with a QR code scan, which dynamically routes the user to a specific store, hall, and table context using URL parameter parsing. The app features a highly responsive, mobile-optimized interface styled with **Tailwind CSS**, ensuring fast load times even on mobile networks. \n\nState management is handled by **Zustand**, maintaining a persistent cart and dining session as users navigate through categories and items. **Framer Motion** is utilized extensively to create app-like page transitions and interaction feedback, making the web experience feel native. The app communicates directly with the Resto Admin backend APIs to fetch real-time menu availability and pricing.",
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
      "Singularity is a web and mobile application development service company specializing in Webflow-based website solutions, UI/UX design, branding, SEO, and digital marketing services.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/assets/projects/sin 1.png",
    demoLink: "https://singularity-three-lovat.vercel.app",
    fullDescription:
      "Singularity is a web and mobile application development service company that primarily focuses on building high-performance websites using Webflow. The company also provides creative and technical services including UI/UX design, branding, SEO optimization, and digital marketing solutions. This project is an ongoing development for a startup that is currently in its planning and early-stage growth phase. The entire website was developed solely by me using Next.js, TypeScript, Tailwind CSS, and Framer Motion. It serves as a digital presence to showcase the company’s vision, service offerings, and brand identity through a modern and responsive interface.",
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
      "A unified POS and eCommerce platform designed for retailers and businesses of all sizes to seamlessly manage both online and in-store sales in one system. ",
    tech: ["TypeScript", "Angular", "Bootstrap", "Npm packages"],
    thumbnail: "/assets/projects/pos 1.png",
    demoLink: "#",
    fullDescription:
      "The POS software facilitates end-to-end retail management, including inventory control, real-time sales tracking, customer data synchronization, multi-channel integration, and centralized reporting.",
    screenshots: [
      "/assets/projects/pos 1.png",
      "/assets/projects/pos 2.png",
      "/assets/projects/pos 3.png",
      "/assets/projects/pos 4.png",
    ],
  },
  {
    id: "pwa-billmykart",
    title: "Billmykart Customer App",
      isMobile:false,
    description:
      "E-commerce website that created with billmykart platform. It offers a seamless shopping experience with features like product browsing, cart management, secure checkout, and order tracking.",
    tech: ["TypeScript", "Angular", "Bootstrap", "Npm packages"],
    thumbnail: "/assets/projects/classix pwa.png",
    demoLink: "https://dizfresh.com/",
    fullDescription:
      "E-commerce website that created with billmykart platform. It offers a seamless shopping experience with features like product browsing, cart management, secure checkout, and order tracking.",
    screenshots: [
      "/assets/projects/new pwa 1.png",
      "/assets/projects/new pwa 2.png",
      "/assets/projects/new pwa 3.png",
      "/assets/projects/new pwa 4.png",
    ],
  },
  {
    id: "admin-billmykart-",
    title: "Billmykart Admin App",
      isMobile:false,
    description:
      "Billmykart's admin website and tools are designed for ease-of-use and scalability, making it suitable for entrepreneurs from startups to enterprises aiming for professional e-commerce operations.",
    tech: ["TypeScript", "Angular", "Bootstrap", "Npm packages"],
    thumbnail: "/assets/projects/admin 1.png",
    demoLink: "https://app.billmykart.com/account/login",
    fullDescription:
      "The Billmykart admin app offers a powerful suite of features designed to streamline e-commerce management and maximize business growth. With its intuitive dashboard, administrators can centrally manage users, products, orders, and inventory, ensuring seamless operations even for large-scale stores. The app provides customizable templates and premium themes, enabling tailored storefronts without technical expertise. Advanced marketing tools—including SEO optimization, automated refunds, coupons, and special offers—help attract and retain customers, while integrated analytics deliver actionable insights for performance improvement. Multi-currency support and fast checkout options enhance the shopping experience and expand global reach. ",
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
      "Comprehensive documentation website for Billmykart, providing detailed guides, tutorials, and references to help users effectively utilize the Billmykart platform and its features.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/assets/projects/bmk docs.png",
    demoLink: "https://docs.billmykart.com/",
    fullDescription:
      "The Billmykart documentation website serves as an essential resource for users of the Billmykart e-commerce platform. It offers a wide range of materials, including step-by-step guides, video tutorials, API references, and FAQs to assist users in navigating and maximizing the platform's capabilities. The documentation is organized into clear sections covering topics such as account setup, product management, order processing, payment integration, and marketing tools. This website was built entirely as a solo project using Next.js, Tailwind CSS, and TypeScript, with Framer Motion integrated for smooth animations and enhanced user experience.",
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
      "This project is a landing page for Edutica, a cutting-edge digital campus software ",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/assets/projects/edutica 1.png",
    demoLink: "https://edutica.in/",
    fullDescription:
      "This project is a landing page for Edutica, a cutting-edge digital campus software designed to streamline and enhance the management of educational institutions. The landing page serves as an informative platform that highlights the features, benefits, and overall functionality of the Edutica system. It was built entirely as a solo project using Next.js, Tailwind CSS, and TypeScript, with Framer Motion integrated for smooth animations and an engaging user experience.",
    screenshots: [
      "/assets/projects/edutica 1.png",
      "/assets/projects/edutica 2.png",
      "/assets/projects/edutica 3.png",
      "/assets/projects/edutica 4.png",
    ],
  },
    {
        id: "food-ordering-app",
        title: "Food Ordering App",
        isMobile:true,
        description:
            "A full-featured React Native food ordering app built with Expo, inspired by a JSMastery tutorial and extended with custom features.",
        tech: ["React Native", "Expo", "Zustand", "Stripe", "TypeScript", "AppWrite"],
        thumbnail: "/assets/projects/food-4.jpg",
        demoLink: "#",
        fullDescription:
            "This Food Ordering App was initially developed by following a JSMastery YouTube tutorial as a base project. After completing the guided sections, I went beyond the tutorial to finish the remaining UI screens using the provided Figma design, implementing the missing parts entirely on my own. The app uses Zustand for state management and includes authentication, a functional cart system, and Stripe test integration for payments. This project gave me hands-on experience with React Native, Expo, and integrating real-world features like secure checkout and state persistence.",
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
        title: "Movie Listing App",
        isMobile: true,
        description:
            "A React Native app built with Expo that lists and manages movies using TMDB API and Appwrite backend.",
        tech: ["React Native", "Expo", "Appwrite", "TMDB API", "Context API"],
        thumbnail: "/assets/projects/movie-1.jpg",
        demoLink: "#",
        fullDescription:
            "This Movie Listing App was my first React Native project built while learning mobile development with Expo. The base concept was inspired by a tutorial from the JSMastery YouTube channel. Beyond the tutorial, I expanded the app by integrating Appwrite as the backend for database and authentication, and TMDB API for fetching real-time movie data. I also implemented Context API for state management, added user authentication, and built extra features like wishlist management and a profile page. This project helped me understand how to structure scalable React Native apps, handle API data, and manage global state effectively.",
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
            "A full-stack Next.js 16 web application for discovering and managing events with an integrated admin dashboard.",
        tech: ["Next.js 16", "MongoDB", "Tailwind CSS", "TypeScript"],
        thumbnail: "/assets/projects/event-1.png",
        demoLink: "#",
        fullDescription:
            "This Event Booking App is a full-stack web application built with Next.js 16, designed for browsing and managing events. The base project was inspired by a tutorial from the JSMastery YouTube channel, which I later expanded upon with custom features. I implemented a dedicated admin section, accessible via authentication, where admins can view, add, and delete events. The app uses MongoDB for data storage and leverages Next.js’s built-in API routes for backend functionality. I also configured a proxy.js file to handle routing between admin and user pages and styled the entire app using Tailwind CSS. Developing this project helped me explore the new features and architectural improvements introduced in the latest version of Next.js while strengthening my full-stack development skills.",
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
        title: "PocketView - Expense Tracker",
        isMobile: true,
        description:
            "A personal finance tracker built with React Native and Firebase, featuring dark/light themes, analytics, and category-based insights.",
        tech: [
            "React Native",
            "Expo",
            "Firebase",
            "Zustand",
            "NativeWind",
            "TypeScript"
        ],
        thumbnail: "/assets/projects/pocketview-3.png",
        demoLink: "#",
        fullDescription:
            "PocketView is an ongoing side project I’m building to learn and experiment with advanced React Native concepts while creating something practical. It’s a personal finance tracking app developed with Expo and React Native, where users can log and analyze their expenses with detailed category filtering and spending summaries. The app uses Firebase for authentication and real-time database management, and Zustand for state management. It supports both light and dark themes, implemented using NativeWind for seamless styling. The app includes screens for login/registration, dashboard overview, adding expenses, budget management, detailed reports, and user profile with settings. PocketView continues to evolve as I deepen my React Native skills and explore new features like chart visualizations and cloud sync.",
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
            "A property listing platform built with Next.js 16 and MongoDB, allowing users to browse homes and hosts to list properties.",
        tech: [
            "Next.js 16",
            "MongoDB",
            "Tailwind",
            "Zustand",
            "Typescript",
            "Cloudinary"
        ],
        thumbnail: "/assets/projects/rentify-1.png",
        demoLink: "https://rentify-web-app.vercel.app/",
        fullDescription:
            "Rentify is an ongoing side project I am building to master backend development using Next.js 16 and TypeScript. It is a real estate platform that utilizes Next.js API routes for backend logic and MongoDB for database management. The current build allows users to browse featured properties on the homepage and provides a 'Become a Host' functionality where authenticated users can list their own properties. As a learning initiative, the project is actively evolving; I am currently working on implementing a dedicated property listing page with advanced filters, adding more detailed property fields, and refining the overall user experience.",
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
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-contain bg-slate-300 group-hover:scale-105 transition-transform duration-300"
                    />
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
