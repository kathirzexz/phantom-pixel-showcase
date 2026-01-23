import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const feats = [
  {
    name: "Mentee - Amazon ML Summer School",
    bannerText: "Amazon ML Summer School",
    tags: ["#ML", "#MachineLearning", "#DataScience", "#DataAnalysis"],
    description: "4 weeks apprenticeship program",
    bgColor: "bg-gradient-to-br from-teal-700 to-teal-900",
    accentColor: "text-orange-400",
  },
  {
    name: "Google Cloud Professional Developer",
    bannerText: "Google Cloud",
    tags: ["#GCP", "#CloudNative", "#Kubernetes", "#Serverless"],
    description: "Cloud development expertise certification",
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    accentColor: "text-blue-400",
  },
  {
    name: "AWS Certified Solutions Architect",
    bannerText: "AWS Certified",
    tags: ["#AWS", "#CloudArchitecture", "#Infrastructure", "#DevOps"],
    description: "4 months certification program",
    bgColor: "bg-gradient-to-br from-orange-600 to-orange-800",
    accentColor: "text-orange-400",
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

      <main className="relative z-10 min-h-screen px-6 pt-24 pb-12">
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
              className="rounded-2xl overflow-hidden bg-card border border-border/30 shadow-lg"
            >
              {/* Banner Image Area */}
              <div className={`h-28 md:h-36 ${feat.bgColor} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
                <div className="text-center">
                  <span className={`text-lg md:text-xl font-medium ${feat.accentColor}`}>
                    {feat.bannerText.split(' ')[0]}
                  </span>
                  <span className="text-lg md:text-xl font-medium text-white ml-1">
                    {feat.bannerText.split(' ').slice(1).join(' ')}
                  </span>
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
