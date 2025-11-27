import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white dark:bg-gray-950 flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-blue-500 border-t-cyan-500 rounded-full"
        />

        {/* Loading text with animation */}
        <motion.h1
          className="text-2xl font-bold text-gray-900 dark:text-white"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          NM
        </motion.h1>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">Loading...</p>
      </div>
    </motion.div>
  );
};

export default Loading;
