import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from '../components/Button';

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Parallax effects for background elements
  const blurY = useTransform(scrollY, [0, 300], [0, 100]);
  const cyanY = useTransform(scrollY, [0, 300], [0, -100]);
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.5]);

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Split main heading into words for animation
  const mainHeading = ['Hi,', "I'm", 'Nilesh', 'Mungase'];
  const subtitle = ['Java', 'Full', 'Stack', 'Developer'];

  const handleWordClick = (index: number) => {
    setSelectedWord(selectedWord === index ? null : index);
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 pt-16 relative overflow-hidden"
    >
      {/* Animated background elements with parallax */}
      <motion.div 
        style={{ y: blurY }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-30 animate-float"
      />
      <motion.div 
        style={{ y: cyanY, animationDelay: '2s' }}
        className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-30 animate-float"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white flex flex-wrap justify-center gap-2 md:gap-3 cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {mainHeading.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                onClick={() => handleWordClick(index)}
                whileHover={{ scale: 1.1, color: '#06b6d4' }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block px-2 rounded transition-all ${
                  selectedWord === index
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : isHovering
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : ''
                } ${index === 2 || index === 3 ? 'gradient-text' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 flex flex-wrap justify-center gap-2 md:gap-3 cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {subtitle.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                onClick={() => handleWordClick(index + 10)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block px-2 rounded transition-all ${
                  selectedWord === index + 10
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : isHovering
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Passionate about solving real-world problems through clean code and
              optimizing backend logic with expertise in Spring Boot, Microservices,
              and full-stack development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" onClick={handleScrollToContact}>
                Get In Touch
              </Button>
              <Button
                variant="outline"
                href="/resume.pdf"
                className="flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, repeat: Infinity, duration: 2 }}
              className="mt-16"
            >
              <ArrowDown size={32} className="mx-auto text-gray-400 dark:text-gray-600 animate-bounce" />
            </motion.div>
          </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
