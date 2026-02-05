import { motion } from "framer-motion";
import { Code, Layout, Wrench, Database, Cloud, Smartphone } from "lucide-react";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import SkillCard from "@/components/SkillCard";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C", "Embedded C", "Python", "HTML", "CSS"],
  },
  {
    title: "Programming & AI",
    icon: Database,
    skills: ["Python", "LLMs", "AI & Machine Learning", "Embedded Systems Programming"],
  },
  {
    title: "Deployment & Version Control",
    icon: Cloud,
    skills: ["Git", "GitHub", "REST APIs", "Cloud Deployment"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Wokwi", "Blynk", "ThingSpeak", "Firebase", "MATLAB", "LTspice"],
  },
  {
    title: "Hardware Platforms",
    icon: Smartphone,
    skills: ["Arduino", "ESP32", "Raspberry Pi"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layout,
    skills: ["TensorFlow"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
      <Navigation showBack />
      <SocialSidebar />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="bg-text text-foreground">SKILLS</span>
      </div>

      <main className="relative z-10 min-h-screen px-4 sm:px-6 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-foreground mb-3 sm:mb-4"
            >
              My <span className="text-gradient font-medium">Skills</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-2"
            >
              A comprehensive toolkit built over years of crafting digital experiences.
              Always learning, always growing.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
