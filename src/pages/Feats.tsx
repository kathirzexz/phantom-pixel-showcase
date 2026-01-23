import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const feats = [
  {
    name: "AWS Certified Solutions Architect",
    subtitle: "Professional Certification",
    tags: ["#AWS", "#CloudArchitecture", "#Infrastructure", "#DevOps"],
    description: "4 months certification program",
    bgColor: "from-orange-500/20 to-orange-600/30",
    textColor: "text-orange-400",
  },
  {
    name: "Google Cloud Professional Developer",
    subtitle: "Professional Certification",
    tags: ["#GCP", "#CloudNative", "#Kubernetes", "#Serverless"],
    description: "Cloud development expertise certification",
    bgColor: "from-blue-500/20 to-blue-600/30",
    textColor: "text-blue-400",
  },
  {
    name: "Meta Frontend Developer",
    subtitle: "Professional Certificate",
    tags: ["#React", "#JavaScript", "#CSS", "#WebDev"],
    description: "6 months professional training program",
    bgColor: "from-cyan-500/20 to-cyan-600/30",
    textColor: "text-cyan-400",
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
          className="w-full max-w-2xl mx-auto space-y-6"
        >
          {feats.map((feat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="premium-card glow-effect overflow-hidden"
            >
              {/* Image/Banner Area */}
              <div className={`h-32 md:h-40 bg-gradient-to-br ${feat.bgColor} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                <span className={`text-2xl md:text-3xl font-display font-bold ${feat.textColor} tracking-wide`}>
                  {feat.name.split(' ')[0]}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  {feat.name}
                </h2>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-border via-border/50 to-transparent my-4" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {feat.tags.map((tag, i) => (
                    <span key={i} className="text-sm text-primary/80">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mt-4">
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
