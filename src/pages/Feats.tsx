import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";

const Feats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              My <span className="text-gradient font-medium">Feats</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Achievements and accomplishments coming soon...
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Feats;
