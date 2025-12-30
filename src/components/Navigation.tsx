import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

interface NavigationProps {
  showBack?: boolean;
}

const Navigation = ({ showBack = false }: NavigationProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const resumeLink = "https://drive.google.com/file/d/1cNPUzEogTaIliX6rl9Qs0NJ25tMUz0DL/view";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Back Button - Left Side */}
        <div className="flex-1">
          {!isHome && showBack && (
            <Link to="/" className="back-button">
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
          )}
        </div>

        {/* Center - Can be used for logo */}
        <div className="flex-1 flex justify-center">
          {isHome && (
            <motion.span 
              className="text-sm font-medium tracking-widest uppercase text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Portfolio
            </motion.span>
          )}
        </div>

        {/* Right Side Actions */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button hidden sm:flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume
          </motion.a>
          
          <Link to="/contact">
            <motion.button
              className="nav-button-primary flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              <span>Say Hi</span>
            </motion.button>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
