import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  index: number;
}

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
      className="project-card group"
    >
      {/* Image placeholder */}
      <div className="relative h-48 overflow-hidden bg-secondary/50">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-primary">
                {title.charAt(0)}
              </span>
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-display font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2">
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
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ x: 2 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
