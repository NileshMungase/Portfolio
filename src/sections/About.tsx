import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ResumeDownload from '../components/ResumeDownload';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto origin-left"
        ></motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img
                src={profileImage}
                alt="Nilesh Mungase"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <GraduationCap size={40} className="text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Java Full Stack Developer from Pune
          </h3>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
            <span>Pune, Maharashtra - 411052</span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Motivated and detail-oriented Computer Engineering graduate with strong
            fundamentals in object-oriented programming and full-stack web
            development. I specialize in building robust backend systems using Java,
            Spring Boot, and Microservices architecture.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            With hands-on experience in developing enterprise-level applications, I'm
            passionate about writing clean, maintainable code and solving complex
            real-world problems through innovative technical solutions.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700 card-hover"
            >
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">7.61</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">CGPA</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-cyan-50 dark:bg-cyan-900/30 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700 card-hover"
            >
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">2024</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Graduated</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ResumeDownload />
    </SectionWrapper>
  );
};

export default About;
