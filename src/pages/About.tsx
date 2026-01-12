import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
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
                Hello! I'm Kathirvel, an ECE undergraduate with hands-on experience in designing and developing intelligent embedded systems powered by automation, IoT, and AI-driven logic. I work at the intersection of electronics, firmware programming, and artificial intelligence to build smart, efficient, and connected solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                My technical interests include embedded AI, sensor data processing, real-time decision-making, and intelligent automation systems. I integrate machine learning models with microcontrollers and edge devices to enable predictive behavior, anomaly detection, and smart control in embedded environments.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                I have experience working with microcontrollers, communication protocols, and IoT platforms, along with applying AI techniques such as data analysis, model inference, and logic optimization to enhance system intelligence and performance.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                I focus on creating reliable firmware, optimized hardware-software integration, and scalable intelligent systems. Whether it's building AI-powered IoT applications or automated embedded solutions, I enjoy turning complex problems into practical, real-world technology.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                I'm continuously learning and experimenting with emerging technologies in AI, embedded systems, and automation, and I'm always open to collaborating on innovative projects.
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
                    <span>ECE Undergraduate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Embedded Systems & IoT</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>AI & Automation Enthusiast</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Based in India</span>
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
