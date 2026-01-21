import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, User, Code, FolderOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
      <Navigation />
      <SocialSidebar />

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl"
        >
          {/* Main Card */}
          <motion.div
            variants={itemVariants}
            className="premium-card glow-effect p-8 md:p-12"
          >
            <div className="flex flex-col items-center md:items-start gap-8">
              {/* Text Content */}
              <div className="text-center md:text-left space-y-6">
                <motion.p
                  variants={itemVariants}
                  className="text-primary text-sm font-medium tracking-widest uppercase"
                >
                  Welcome to my portfolio
                </motion.p>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground leading-tight"
                >
                  Hi, I'm{" "}
                  <span className="text-gradient font-medium">Kathirvel J</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg"
                >
                  I design and develop intelligent embedded systems by combining electronics 
                  & firmware programming | Automation, IoT, and AI-driven logic.
                </motion.p>

                {/* Navigation Links */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
                >
                  <Link to="/about">
                    <motion.button
                      className="nav-button flex items-center gap-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <User className="w-4 h-4" />
                      <span>About</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    </motion.button>
                  </Link>

                  <Link to="/skills">
                    <motion.button
                      className="nav-button flex items-center gap-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Code className="w-4 h-4" />
                      <span>My Skills</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    </motion.button>
                  </Link>

                  <Link to="/projects">
                    <motion.button
                      className="nav-button flex items-center gap-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FolderOpen className="w-4 h-4" />
                      <span>Projects</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom subtle indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12"
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-muted-foreground"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
              <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
