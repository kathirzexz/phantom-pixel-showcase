import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Password Security App",
    description: "A secure password manager with encryption, breach detection, and password strength analysis for maximum security.",
    techStack: ["React", "Node.js", "MongoDB", "Crypto", "JWT"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Realtime Monitoring Dashboard",
    description: "Live system monitoring dashboard with real-time metrics, alerts, and performance analytics visualization.",
    techStack: ["Next.js", "WebSocket", "PostgreSQL", "Chart.js", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description: "An intelligent content generation tool powered by machine learning that helps creators produce high-quality content.",
    techStack: ["Python", "OpenAI", "FastAPI", "React", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Analytics System",
    description: "Comprehensive analytics platform for tracking user behavior, engagement metrics, and conversion funnels.",
    techStack: ["Vue.js", "D3.js", "Node.js", "GraphQL", "AWS"],
    githubUrl: "https://github.com",
  },
  {
    title: "E-Commerce Platform",
    description: "A modern, full-featured e-commerce platform with real-time inventory management and secure payments.",
    techStack: ["React", "Stripe", "PostgreSQL", "Tailwind", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness application with workout tracking, nutrition planning, and progress visualization.",
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
        <span className="text-[15vw] sm:text-[12vw] md:text-[15vw] font-display font-bold tracking-tighter text-foreground/[0.03] select-none">
          PROJECTS
        </span>
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
              My <span className="text-gradient font-medium">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-2"
            >
              A selection of projects I've worked on, showcasing my skills in 
              full-stack development and problem-solving.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
