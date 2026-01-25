import { motion } from "framer-motion";
import { Award, Trophy, GraduationCap, Star, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const feats = [
  {
    title: "Amazon ML Summer School",
    subtitle: "Mentee - Machine Learning Program",
    tags: ["#ML", "#MachineLearning", "#DataScience", "#DeepLearning"],
    description: "4-week intensive apprenticeship program focused on advanced machine learning concepts and real-world applications.",
    icon: GraduationCap,
    category: "CERTIFICATION",
  },
  {
    title: "Zoho Summer Internship",
    subtitle: "Software Development Intern",
    tags: ["#SQL", "#JDBC", "#Java", "#Kafka"],
    description: "Hands-on experience building enterprise-grade applications with industry-standard technologies.",
    icon: Award,
    category: "INTERNSHIP",
  },
  {
    title: "National Hackathon Winner",
    subtitle: "1st Place - CodeStorm 2023",
    tags: ["#React", "#Node.js", "#Innovation", "#Teamwork"],
    description: "Led a team of 4 to build an AI-powered solution that won among 500+ participants nationwide.",
    icon: Trophy,
    category: "ACHIEVEMENT",
  },
  {
    title: "AWS Cloud Practitioner",
    subtitle: "Certified Cloud Professional",
    tags: ["#AWS", "#Cloud", "#DevOps", "#Infrastructure"],
    description: "Demonstrated expertise in cloud concepts, security, technology, and billing/pricing models.",
    icon: Star,
    category: "CERTIFICATION",
  },
  {
    title: "Open Source Contributor",
    subtitle: "React & TypeScript Libraries",
    tags: ["#OpenSource", "#GitHub", "#Community", "#Code"],
    description: "Active contributor to major open-source projects with 50+ merged pull requests.",
    icon: Zap,
    category: "CONTRIBUTION",
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
        <span className="text-[20vw] md:text-[15vw] font-display font-bold text-foreground/[0.04] tracking-widest select-none uppercase">
          FEATS
        </span>
      </div>

      <main className="relative z-10 min-h-screen px-4 md:px-6 pt-28 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-lg mx-auto space-y-6"
        >
          {feats.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative rounded-3xl overflow-hidden bg-card/60 backdrop-blur-xl border border-primary/20 
                           shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)] 
                           hover:shadow-[0_0_60px_-10px_hsl(var(--primary)/0.4)] 
                           hover:border-primary/40 transition-all duration-500"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 md:p-8">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 
                                    flex items-center justify-center shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]
                                    group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Title & Subtitle */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-tight leading-tight">
                        {feat.title}
                      </h2>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base">
                        {feat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span className="inline-block mt-5 px-4 py-1.5 text-xs tracking-[0.15em] font-semibold 
                                 border border-primary/40 text-primary bg-primary/10 rounded-lg
                                 shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]">
                    {feat.category}
                  </span>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-5" />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {feat.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground/90 text-sm md:text-base leading-relaxed mt-4">
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
