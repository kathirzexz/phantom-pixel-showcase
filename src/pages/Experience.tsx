import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const experiences = [
  {
    company: "Naan Mudhalvan Hackathon 2025",
    role: "Embedded System Innovator – Raspberry Pi Project",
    duration: "2025",
    location: "Tamil Nadu, India",
    mode: "On-site",
    type: "HACKATHON",
    tags: ["Raspberry Pi", "Embedded Systems", "Prototyping", "Innovation"],
    expertise:
      "Developed an innovative embedded system prototype using Raspberry Pi and secured 3rd prize in a state-level hackathon.",
    bullets: [
      "Designed and developed a functional embedded system prototype",
      "Integrated sensors and hardware modules using Raspberry Pi",
      "Demonstrated real-time working model to judges",
      "Won 3rd Prize for innovation and technical implementation",
    ],
  },
  {
    company: "Techvolt Software Pvt. Ltd.",
    role: "Embedded Systems & IoT Trainee",
    duration: "Dec 2025 – Jan 2026",
    location: "Coimbatore, India",
    mode: "On-site",
    type: "INTERNSHIP",
    tags: ["Embedded Systems", "IoT", "Microcontrollers", "Sensors", "Automation"],
    expertise:
      "Hands-on training in embedded system design and IoT-based automation using real hardware components.",
    bullets: [
      "Built and tested embedded prototypes using microcontrollers",
      "Worked with sensors and IoT modules for automation projects",
      "Gained practical exposure to real-time hardware implementation",
    ],
  },
  {
    company: "Techvolt Software Pvt. Ltd.",
    role: "Embedded Systems Intern",
    duration: "14 Jul 2025 – 20 Jul 2025",
    location: "Coimbatore, India",
    mode: "On-site",
    type: "INTERNSHIP",
    tags: ["Embedded Systems", "IoT", "Microcontrollers", "Industry 4.0"],
    expertise:
      "Completed an intensive internship focused on embedded systems development and Industry 4.0 technologies.",
    bullets: [
      "Worked with embedded system fundamentals and microcontroller programming",
      "Learned sensor interfacing and basic IoT system integration",
      "Understood real-time applications of embedded systems in Industry 4.0",
      "Participated in hands-on technical training and project-based learning",
    ],
  },
  {
    company: "EMGLITZ Technologies",
    role: "Technical Project Intern",
    duration: "May 2024",
    location: "India",
    mode: "On-site",
    type: "INTERNSHIP",
    tags: ["Core Engineering Projects", "Firmware", "Hardware Interfacing", "System Development"],
    expertise:
      "Worked on company core engineering projects involving firmware development and hardware interfacing.",
    bullets: [
      "Contributed to real-time core engineering projects",
      "Assisted in firmware development and debugging",
      "Performed hardware interfacing with embedded modules",
      "Supported system testing and performance optimization",
    ],
  },
  {
    company: "IRRD Automations",
    role: "Intern – ASIC Design for AI using SPICE",
    duration: "01 Feb 2025 – 10 Feb 2025",
    location: "Karur / Coimbatore, India",
    mode: "On-site",
    type: "INTERNSHIP",
    tags: ["ASIC Design", "SPICE Simulation", "Artificial Intelligence Hardware"],
    expertise:
      "Gained exposure to ASIC design concepts and circuit simulation techniques for AI hardware applications.",
    bullets: [
      "Learned fundamentals of ASIC design workflow",
      "Worked with SPICE tools for circuit simulation",
      "Understood hardware-level implementation for AI systems",
    ],
  },
  {
    company: "CodeBind Technologies",
    role: "Workshop Participant – Web Development",
    duration: "02 Feb 2026",
    location: "Trichy, India",
    mode: "On-site",
    type: "WORKSHOP",
    tags: ["Web Development", "HTML", "CSS", "Frontend Basics"],
    expertise:
      "Participated in a hands-on web development workshop focusing on modern frontend fundamentals.",
    bullets: [
      "Learned core concepts of website structure and design",
      "Built basic responsive web pages",
      "Understood real-world web development workflow",
    ],
  },
  {
    company: "PGP College of Engineering and Technology",
    role: "Quiz Organizer – ElectroSwaggers 2025",
    duration: "2025",
    location: "Namakkal, India",
    mode: "On-site",
    type: "LEADERSHIP",
    tags: ["Event Management", "Technical Quiz", "Student Leadership"],
    expertise:
      "Organized and coordinated a technical quiz event as part of the department student association activities.",
    bullets: [
      "Managed quiz event planning and execution",
      "Coordinated with participants and faculty",
      "Developed communication and leadership skills",
    ],
  }
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
