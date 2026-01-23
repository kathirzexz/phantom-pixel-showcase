import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Nexus Technologies",
    role: "Senior Software Engineer",
    duration: "Jan 2023 – Present",
    location: "San Francisco, CA",
    mode: "Remote",
    type: "FULL-TIME",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    expertise: "Frontend Architecture, System Design, Team Leadership, Agile Development.",
    bullets: [
      "Led frontend architecture for enterprise SaaS platform serving 50K+ daily active users",
      "Mentored junior developers and conducted code reviews for 8-member team",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    company: "Quantum Labs",
    role: "Full Stack Developer",
    duration: "Jun 2021 – Dec 2022",
    location: "Austin, TX",
    mode: "Hybrid",
    type: "FULL-TIME",
    tags: ["Next.js", "GraphQL", "AWS", "MongoDB", "Redis", "Kubernetes"],
    expertise: "API Development, Microservices, Cloud Infrastructure, Real-time Systems.",
    bullets: [
      "Built and maintained microservices powering real-time analytics dashboard",
      "Designed GraphQL APIs handling 10M+ requests daily",
      "Optimized database queries reducing response time by 40%",
    ],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
      <Navigation showBack />
      <SocialSidebar />

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-display font-bold text-foreground/[0.03] tracking-widest select-none">
          EXPERIENCE
        </span>
      </div>

      <main className="relative z-10 min-h-screen px-6 pt-24 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl mx-auto space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="premium-card glow-effect p-6 md:p-8"
            >
              {/* Company & Role */}
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                {exp.company}
              </h2>
              <p className="text-lg text-foreground/90 mt-1">{exp.role}</p>
              
              {/* Duration & Location */}
              <p className="text-muted-foreground mt-2">{exp.duration}</p>
              <p className="text-muted-foreground/70 italic text-sm">
                {exp.location} · {exp.mode}
              </p>

              {/* Type Badge */}
              <Badge 
                variant="outline" 
                className="mt-4 border-primary/50 text-primary bg-primary/10 text-xs tracking-wider"
              >
                {exp.type}
              </Badge>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm border border-border/50 rounded-full text-foreground/80 bg-card/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-6" />

              {/* Expertise */}
              <p className="text-muted-foreground leading-relaxed">
                {exp.expertise}
              </p>

              {/* Bullet Points */}
              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Experience;
