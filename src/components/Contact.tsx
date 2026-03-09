import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Behance from "@/components/icons/Behance";

const Contact = () => {
  return (
    <section id="contact" className="py-10 sm:py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-base sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm always open to discussing new opportunities, collaborations, or just having a chat about UX design.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            onClick={() => window.open('https://www.linkedin.com/in/arun-subramanyan-192388285/', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Connect on LinkedIn
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.location.href = 'mailto:arun04subramanyan@gmail.com'}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open('https://www.behance.net/arunsubramanyan', '_blank')}
          >
            <Behance className="w-5 h-5 mr-2" />
            View Behance
          </Button>
        </motion.div>


      </div>
    </section>
  );
};

export default Contact;
