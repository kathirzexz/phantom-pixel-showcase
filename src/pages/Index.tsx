import { motion } from "framer-motion";
import { ArrowRight, User, Code, FolderOpen, Trophy, Briefcase } from "lucide-react";
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

                {/* Navigation Links - Row 1 */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 justify-center md:justify-start pt-4"
                >
                  <motion.a
                    href="#about"
                    className="hero-button group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-4 h-4" />
                    <span>About</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  </motion.a>

                  <motion.a
                    href="#skills"
                    className="hero-button group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Code className="w-4 h-4" />
                    <span>My Skills</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  </motion.a>

                  <motion.a
                    href="#projects"
                    className="hero-button group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FolderOpen className="w-4 h-4" />
                    <span>Projects</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  </motion.a>
                </motion.div>

                {/* Navigation Links - Row 2 */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 justify-center md:justify-start"
                >
                  <motion.a
                    href="#feat"
                    className="hero-button group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Trophy className="w-4 h-4" />
                    <span>Feat</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  </motion.a>

                  <motion.a
                    href="#experience"
                    className="hero-button group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Experience</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  </motion.a>
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

      {/* About Section */}
      <section id="about" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl"
        >
          <div className="premium-card glow-effect p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate embedded systems developer with expertise in electronics, firmware programming, and IoT solutions. 
              I love creating intelligent systems that bridge the gap between hardware and software, 
              bringing automation and AI-driven logic to real-world applications.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl"
        >
          <div className="premium-card glow-effect p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
              <span className="text-gradient">My Skills</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Embedded C/C++", "Python", "IoT Protocols", "PCB Design", "ARM Cortex", "RTOS"].map((skill) => (
                <div key={skill} className="skill-card text-center">
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl"
        >
          <div className="premium-card glow-effect p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore my portfolio of embedded systems projects, IoT solutions, and automation systems 
              that showcase my technical expertise and problem-solving abilities.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Feat Section */}
      <section id="feat" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl"
        >
          <div className="premium-card glow-effect p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
              <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Highlights of my accomplishments, certifications, and recognitions in the field of 
              embedded systems and electronics engineering.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl"
        >
          <div className="premium-card glow-effect p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My professional journey in embedded systems development, from firmware engineering 
              to leading innovative IoT and automation projects.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
