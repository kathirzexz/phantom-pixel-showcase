import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Twitter, Facebook } from "lucide-react";

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
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/KathirZexz",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/kathir.j.3110",
  },
];

const SocialSidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2"
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
  );
};

export default SocialSidebar;
