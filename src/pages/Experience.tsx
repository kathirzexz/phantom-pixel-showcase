import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const experiences = [
  {
    company: "Zoho Corporation",
    role: "Project Trainee",
    duration: "Jul 2022 - Jun 2023",
    location: "Chennai, Tamil Nadu, India",
    mode: "On-site",
    type: "INTERNSHIP",
    tags: ["GraphQL", "Java", "Spring Boot", "MySQL", "Redis", "JavaScript", "REST APIs"],
    expertise: "GraphQL Expert, Service Orientated Architecture, ORM, Serverless, Cloud Infrastructure.",
    bullets: [
      "Developed GraphQL APIs and REST services",
      "Worked with Redis, MySQL, Java, JavaScript, Handlebars, Highcharts",
    ],
  },
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
        <span className="text-[18vw] md:text-[15vw] font-display font-bold text-foreground/[0.03] tracking-widest select-none">
          EXPERIENCE
        </span>
      </div>

      <main className="relative z-10 min-h-screen px-4 md:px-6 pt-24 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-2xl overflow-hidden bg-card/80 backdrop-blur-md border border-primary/30 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
            >
              <div className="p-5 md:p-6">
                {/* Company */}
                <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                  {exp.company}
                </h2>
                
                {/* Role */}
                <p className="text-base md:text-lg text-foreground/90 mt-1">{exp.role}</p>
                
                {/* Duration */}
                <p className="text-muted-foreground mt-2 text-sm">{exp.duration}</p>
                
                {/* Location & Mode */}
                <p className="text-muted-foreground/70 italic text-sm">
                  {exp.location} · {exp.mode}
                </p>

                {/* Type Badge */}
                <span className="inline-block mt-4 px-4 py-1.5 text-xs tracking-widest font-medium border border-primary/50 text-primary bg-primary/10 rounded-md">
                  {exp.type}
                </span>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-sm border border-border/60 rounded-full text-foreground/80 bg-background/30 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Section - Outside card visually but connected */}
              <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4">
                {/* Expertise */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {exp.expertise}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 border-l-2 border-primary/30 pl-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Experience;
