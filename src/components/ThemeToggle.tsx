import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg dark:bg-white/10 bg-black/10 hover:dark:bg-white/20 hover:bg-black/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 dark:text-white text-black" />
      ) : (
        <Moon className="h-5 w-5 dark:text-white text-black" />
      )}
    </motion.button>
  );
}