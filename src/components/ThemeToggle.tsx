import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle-container"
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background Track */}
      <div className="theme-toggle-track">
        {/* Icons container */}
        <div className="theme-toggle-icons">
          <div className={`theme-toggle-icon ${isDark ? "active" : ""}`}>
            <Moon className="w-3.5 h-3.5" />
          </div>
          <div className={`theme-toggle-icon ${!isDark ? "active" : ""}`}>
            <Sun className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Sliding indicator */}
        <motion.div
          className="theme-toggle-indicator"
          initial={false}
          animate={{
            x: isDark ? 0 : 28,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
