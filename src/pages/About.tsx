import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground variant="dark" />
      <Navigation showBack />
      <SocialSidebar />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="bg-text text-foreground">ABOUT</span>
      </div>

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-3xl"
        >
          <motion.div
            className="premium-card p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-display font-light text-foreground mb-8"
            >
              About <span className="text-gradient font-medium">Me</span>
            </motion.h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Hello! I'm Alex Chen, a full-stack developer with a passion for creating 
                beautiful, functional, and user-centered digital experiences. With over 
                5 years of experience in the field, I've had the privilege of working 
                with startups, agencies, and established companies.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                My journey into development started with a curiosity about how websites 
                work. What began as tinkering with HTML and CSS has evolved into a deep 
                expertise in modern web technologies, including React, TypeScript, Node.js, 
                and cloud services.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                I believe in writing clean, maintainable code and creating interfaces that 
                are not only visually appealing but also accessible and performant. Every 
                project I undertake is an opportunity to push boundaries and deliver 
                exceptional results.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good book with 
                a cup of coffee. I'm always open to discussing new projects and 
                opportunities to collaborate.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="pt-6 border-t border-border"
              >
                <h2 className="text-lg font-display font-medium text-foreground mb-4">
                  Quick Facts
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Based in San Francisco, CA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>5+ years of experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>50+ projects completed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Open to remote work</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
