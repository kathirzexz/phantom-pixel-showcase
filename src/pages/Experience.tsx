import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Nexus Technologies",
    role: "Senior Software Engineer",
    duration: "Jan 2023 – Present",
    location: "San Francisco, CA | Remote",
    tags: ["#React", "#TypeScript", "#Node.js", "#PostgreSQL"],
    description: "Leading frontend architecture for enterprise SaaS platform serving 50K+ daily active users.",
  },
  {
    company: "Quantum Labs",
    role: "Full Stack Developer",
    duration: "Jun 2021 – Dec 2022",
    location: "Austin, TX | Hybrid",
    tags: ["#Next.js", "#GraphQL", "#AWS", "#MongoDB"],
    description: "Built and maintained microservices powering real-time analytics dashboard for fintech clients.",
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

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl"
        >
          <motion.div variants={itemVariants} className="premium-card glow-effect p-8 md:p-12">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-display font-light mb-8"
            >
              My <span className="text-gradient font-medium">Experience</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground text-lg">{exp.company}</h3>
                          <p className="text-muted-foreground text-sm">{exp.role}</p>
                          <p className="text-muted-foreground/70 text-xs mt-1">
                            {exp.duration} · {exp.location}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {exp.tags.map((tag, i) => (
                              <span key={i} className="text-xs text-primary/80">{tag}</span>
                            ))}
                          </div>
                          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Experience;
