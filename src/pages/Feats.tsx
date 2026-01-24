import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const feats = [
  {
    name: "Mentee - Amazon ML Summer School",
    bannerText: "Amazon ML",
    bannerSubtext: "Summer School",
    tags: ["#ML", "#MachineLearning", "#DataScience", "#DataAnalysis"],
    description: "4 weeks apprenticeship program",
    bgColor: "bg-gradient-to-br from-teal-700 to-teal-900",
    accentColor: "text-orange-400",
    isDark: true,
  },
  {
    name: "Zoho - Summer Intern",
    bannerText: "ZOHO",
    bannerSubtext: "CRM",
    tags: ["#SQL", "#JDBC", "#JAVA", "#KAFKA"],
    description: "Software Development Intern",
    bgColor: "bg-white",
    accentColor: "text-foreground",
    isDark: false,
    isColorful: true,
  },
  {
    name: "Bit Brothers - Junior Javascript",
    bannerText: "BIT",
    bannerSubtext: "BROTHERS",
    tags: ["#JavaScript", "#React", "#NodeJS", "#MongoDB"],
    description: "Junior Developer Program",
    bgColor: "bg-white",
    accentColor: "text-foreground",
    isDark: false,
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
        <span className="text-[25vw] font-display font-bold text-foreground/[0.03] tracking-widest select-none">
          FEATS
        </span>
      </div>

      <main className="relative z-10 min-h-screen px-4 md:px-6 pt-24 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md mx-auto space-y-6"
        >
          {feats.map((feat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-2xl overflow-hidden bg-card/80 backdrop-blur-md border border-border/30 shadow-lg"
            >
              {/* Banner Image Area */}
              <div className={`h-32 md:h-40 ${feat.bgColor} flex items-center justify-center relative overflow-hidden`}>
                {feat.isDark && (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
                )}
                
                {/* Banner decorative elements for light cards */}
                {!feat.isDark && (
                  <>
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-muted-foreground/20" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-muted-foreground/20" />
                  </>
                )}
                
                <div className="text-center z-10">
                  {feat.isColorful ? (
                    <div className="flex items-center justify-center gap-0.5">
                      <span className="text-2xl md:text-3xl font-bold text-blue-500">Z</span>
                      <span className="text-2xl md:text-3xl font-bold text-red-500">O</span>
                      <span className="text-2xl md:text-3xl font-bold text-yellow-500">H</span>
                      <span className="text-2xl md:text-3xl font-bold text-green-500">O</span>
                    </div>
                  ) : (
                    <span className={`text-xl md:text-2xl font-bold ${feat.isDark ? feat.accentColor : 'text-gray-800'}`}>
                      {feat.bannerText}
                    </span>
                  )}
                  <span className={`block text-lg md:text-xl font-medium ${feat.isDark ? 'text-white' : 'text-gray-700'} mt-0.5`}>
                    {feat.bannerSubtext}
                  </span>
                  
                  {/* Amazon smile for ML School */}
                  {feat.name.includes("Amazon") && (
                    <div className="mt-1">
                      <svg className="w-8 h-4 mx-auto text-orange-400" viewBox="0 0 32 16" fill="currentColor">
                        <path d="M2 8 Q16 16 30 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                        <circle cx="30" cy="8" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 bg-card">
                <h2 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                  {feat.name}
                </h2>

                {/* Divider */}
                <div className="w-full h-px bg-border my-3" />

                {/* Tags */}
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {feat.tags.map((tag, i) => (
                    <span key={i} className="text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mt-3">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Feats;
