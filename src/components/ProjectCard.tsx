import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  index: number;
}

// Random project images from picsum with different seeds
const getRandomProjectImage = (index: number) => {
  const seeds = [
    'tech', 'code', 'dashboard', 'app', 'design', 
    'data', 'analytics', 'security', 'ai', 'web'
  ];
  return `https://picsum.photos/seed/${seeds[index % seeds.length]}/600/400`;
};

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
  index,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden bg-[#0F0F0F] p-3">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <img
            src={image || getRandomProjectImage(index)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground border border-border rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer with Links */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 2 }}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </motion.a>
            )}
          </div>
          
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
