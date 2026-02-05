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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
      <Navigation showBack />
      <SocialSidebar />

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[18vw] sm:text-[15vw] md:text-[12vw] font-display font-bold text-foreground/[0.04] tracking-widest select-none uppercase">
          EXPERIENCE
        </span>
      </div>

      <main className="relative z-10 min-h-screen px-3 sm:px-4 md:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-lg mx-auto space-y-6 sm:space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-card/60 backdrop-blur-xl border border-primary/20 
                         shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)] 
                         hover:shadow-[0_0_60px_-10px_hsl(var(--primary)/0.4)] 
                         hover:border-primary/40 transition-all duration-500"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-4 sm:p-6 md:p-8">
                {/* Company */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">
                  {exp.company}
                </h2>
                
                {/* Role */}
                <p className="text-base sm:text-lg md:text-xl text-foreground/90 font-medium mt-1.5 sm:mt-2">
                  {exp.role}
                </p>
                
                {/* Duration */}
                <p className="text-muted-foreground mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
                  {exp.duration}
                </p>
                
                {/* Location & Mode */}
                <p className="text-muted-foreground/70 italic text-xs sm:text-sm">
                  {exp.location} · {exp.mode}
                </p>

                {/* Type Badge */}
                <span className="inline-block mt-4 sm:mt-5 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] font-semibold 
                               border border-primary/40 text-primary bg-primary/10 rounded-lg
                               shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
                  {exp.type}
                </span>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2.5 mt-4 sm:mt-6">
                  {exp.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border border-border/50 rounded-full 
                                 text-foreground/80 bg-background/40 backdrop-blur-sm
                                 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Section - Expertise & Bullets */}
              <div className="relative px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 space-y-4 sm:space-y-5">
                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                
                {/* Expertise */}
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
                  {exp.expertise}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 sm:space-y-3 border-l-2 border-primary/30 pl-3 sm:pl-5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-xs sm:text-sm md:text-base">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">▸</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Experience;
