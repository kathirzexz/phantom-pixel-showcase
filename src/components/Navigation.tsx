import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  showBack?: boolean;
}

const Navigation = ({ showBack = false }: NavigationProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const resumeLink = "https://drive.google.com/file/d/1-YNd1sWeJmQDbGMVD4fTz91e2iAMeLN4/view?usp=drivesdk";

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

        {/* Center - Empty spacer */}
        <div className="flex-1" />

        {/* Right Side Actions */}
        <div className="flex-1 flex items-center justify-end gap-2.5 sm:gap-3">
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button hidden sm:flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Download CV
          </motion.a>
          
          <Link to="/contact">
            <motion.button
              className="nav-button-primary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Mail className="w-4 h-4" />
              <span>Let's Talk</span>
            </motion.button>
          </Link>
          
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
