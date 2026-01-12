import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, full-featured e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description: "An intelligent content generation tool powered by machine learning that helps creators produce high-quality content efficiently.",
    techStack: ["Next.js", "Python", "OpenAI", "MongoDB", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Project Management App",
    description: "A collaborative project management application with real-time updates, task tracking, and team communication features.",
    techStack: ["React", "Firebase", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Financial Dashboard",
    description: "A comprehensive financial analytics dashboard with data visualization, budget tracking, and investment portfolio management.",
    techStack: ["Vue.js", "D3.js", "Node.js", "GraphQL"],
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media Analytics",
    description: "A powerful analytics platform for tracking social media metrics, engagement rates, and audience growth across multiple platforms.",
    techStack: ["React", "Python", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Mobile Fitness App",
    description: "A cross-platform fitness application with workout tracking, nutrition planning, and progress visualization features.",
    techStack: ["React Native", "Node.js", "MongoDB", "Redux"],
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
      <Navigation showBack />
      <SocialSidebar />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="bg-text text-foreground">WORK</span>
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
              My <span className="text-gradient font-medium">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              A selection of projects I've worked on, showcasing my skills in 
              full-stack development and problem-solving.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
