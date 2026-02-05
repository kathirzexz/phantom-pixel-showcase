import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  index: number;
}

const SkillCard = ({ title, icon: Icon, skills, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="skill-card group p-4 sm:p-6"
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <motion.div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
        </motion.div>
        <h3 className="text-base sm:text-lg font-display font-medium text-foreground">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {skills.map((skill, skillIndex) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium bg-secondary text-secondary-foreground rounded-lg cursor-default transition-colors hover:bg-primary/10 hover:text-primary"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
