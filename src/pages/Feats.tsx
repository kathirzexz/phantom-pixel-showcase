import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, Star, Zap, Wrench, Medal } from "lucide-react";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const feats = [
  {
    title: "Naan Mudhalvan Hackathon Winner",
    subtitle: " Won 3rd Prize - 2025",
    tags: ["#NaanMudhalvan", "#Naan Mudhalvan Hackathon", "#HackathonWinner", "#ThirdPrize" , "#TeamWork"],
    description: "Won 3rd Prize in the Naan Mudhalvan Hackathon for innovative project work.",
    icon: Trophy,
    category: "ACHIEVEMENT",
  },
  {
    title: "EMGLITZ Technologies Summer Internship",
    subtitle: "Working Experience On Core Projects",
    tags: ["#EMGLITZTechnologies", "#CoreProjects", "#HandsOnExperience", "#IndustryExperience"],
    description: "Hands-on experience working on core projects at EMGLITZ Technologies, enhancing practical engineering skills.",
    icon: Wrench,
    category: "INTERNSHIP & TRAINING",
  },
  {
    title: "TECHVOLT Software Summer Internship",
    subtitle: "Training Experience On Embedded Systems",
    tags: ["#TechvoltSoftware", "#SummerInternship", "#IndustryExperience"],
    description: "Completed summer internship training at Techvolt Software with hands-on project experience.",
    icon: GraduationCap,
    category: "ACHIEVEMENT",
  },
  {
    title: "Selvam College Of Technology Certificate Of Appreciation ",
    subtitle: "Won 1st Prize In Connection Contest",
    tags: ["#SelvamCollegeOfTechnology", "#FirstPrize", "#CertificateOfAppreciation","#Achievement"],
    description: "Secured First Prize and received a Certificate of Appreciation in a college-level contest at Selvam College of Technology.",
    icon: Medal,
    category: "ACHIEVEMENT",
  },
];

const Feats = () => {
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
        <span className="text-[22vw] sm:text-[20vw] md:text-[15vw] font-display font-bold text-foreground/[0.04] tracking-widest select-none uppercase">
          FEATS
        </span>
      </div>

      <main className="relative z-10 min-h-screen px-3 sm:px-4 md:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-lg mx-auto space-y-4 sm:space-y-6"
        >
          {feats.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
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
                  {/* Header with Icon */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/30 
                                    flex items-center justify-center shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]
                                    group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    
                    {/* Title & Subtitle */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground tracking-tight leading-tight">
                        {feat.title}
                      </h2>
                      <p className="text-muted-foreground mt-0.5 sm:mt-1 text-xs sm:text-sm md:text-base">
                        {feat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span className="inline-block mt-4 sm:mt-5 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] font-semibold 
                                 border border-primary/40 text-primary bg-primary/10 rounded-lg
                                 shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]">
                    {feat.category}
                  </span>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-4 sm:my-5" />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1.5 sm:gap-y-2">
                    {feat.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground/90 text-xs sm:text-sm md:text-base leading-relaxed mt-3 sm:mt-4">
                    {feat.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
};

export default Feats;
