import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      className="fixed top-6 right-6 z-50 flex items-center gap-2 group"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Tooltip */}
      <motion.span
        className="absolute right-16 px-3 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </motion.span>

      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="relative p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-yellow-500 dark:to-orange-500 hover:from-blue-600 hover:to-cyan-600 dark:hover:from-yellow-600 dark:hover:to-orange-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        whileHover={{ scale: 1.12, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <motion.div
          key={theme}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {theme === 'light' ? (
            <Moon size={24} className="text-white" />
          ) : (
            <Sun size={24} className="text-white" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
