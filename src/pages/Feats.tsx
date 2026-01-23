import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialSidebar from "@/components/SocialSidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const feats = [
  {
    name: "AWS Certified Solutions Architect",
    title: "Professional Certification",
    duration: "Issued Mar 2024",
    location: "Amazon Web Services",
    tags: ["#AWS", "#CloudArchitecture", "#Infrastructure", "#DevOps"],
    description: "Validated expertise in designing distributed systems and deploying scalable applications on AWS cloud infrastructure.",
  },
  {
    name: "Google Cloud Professional Developer",
    title: "Professional Certification",
    duration: "Issued Nov 2023",
    location: "Google Cloud Platform",
    tags: ["#GCP", "#CloudNative", "#Kubernetes", "#Serverless"],
    description: "Demonstrated proficiency in building and deploying applications using Google Cloud services and best practices.",
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

            <motion.div variants={itemVariants} className="space-y-4">
              {feats.map((feat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground text-lg">{feat.name}</h3>
                          <p className="text-muted-foreground text-sm">{feat.title}</p>
                          <p className="text-muted-foreground/70 text-xs mt-1">
                            {feat.duration} · {feat.location}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {feat.tags.map((tag, i) => (
                              <span key={i} className="text-xs text-primary/80">{tag}</span>
                            ))}
                          </div>
                          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                            {feat.description}
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

export default Feats;
