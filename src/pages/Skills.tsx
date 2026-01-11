import { motion } from "framer-motion";
import { Code, Layout, Wrench, Database, Cloud, Smartphone } from "lucide-react";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import SkillCard from "@/components/SkillCard";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
  },
  {
    title: "Software Engineering",
    icon: Code,
    skills: ["JavaScript", "Python", "Git", "Testing", "CI/CD", "Agile", "System Design"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "Vercel", "Firebase", "GitHub Actions"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android", "Responsive Design"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["VS Code", "Figma", "Postman", "Jira", "Notion", "Terminal", "Webpack"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen theme-light bg-background relative overflow-hidden">
      <ParticlesBackground variant="light" />
      <Navigation showBack />
      <SocialSidebar />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="bg-text text-foreground">SKILLS</span>
      </div>

      <main className="relative z-10 min-h-screen px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-display font-light text-foreground mb-4"
            >
              My <span className="text-gradient font-medium">Skills</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              A comprehensive toolkit built over years of crafting digital experiences.
              Always learning, always growing.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
