import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kathirvel03",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/kathirzexz",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/x_kathireh",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:kathirzexz@gmail.com",
  },
];

const SocialSidebar = () => {
  return (
    <>
      {/* Desktop Vertical Sidebar - visible on lg screens and up */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="vertical-line" />
        
        <div className="flex flex-col gap-1">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>
        
        <div className="vertical-line" />
      </motion.aside>

      {/* Mobile/Tablet Bottom Floating Bar - visible below lg screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex lg:hidden items-center gap-1 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-glow"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={`mobile-${link.name}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" strokeWidth={1.5} />
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default SocialSidebar;
