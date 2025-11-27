import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Wrench,
  Layers,
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2 }}
          className="text-blue-600 dark:text-blue-400 font-semibold"
        >
          {level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillsByCategory = [
    {
      icon: <Code2 size={32} />,
      title: 'Languages',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 85 },
      ],
    },
    {
      icon: <Layers size={32} />,
      title: 'Frameworks',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Spring Boot', level: 92 },
        { name: 'Hibernate/JPA', level: 88 },
        { name: 'Microservices', level: 85 },
        { name: 'Spring Security', level: 80 },
      ],
    },
    {
      icon: <Database size={32} />,
      title: 'Databases',
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'Oracle', level: 82 },
        { name: 'MongoDB', level: 78 },
      ],
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools & DevOps',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Maven', level: 85 },
        { name: 'Postman', level: 88 },
      ],
    },
  ];

  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto origin-left"
        ></motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {skillsByCategory.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(59, 130, 246, 0.2)' }}
            className="cursor-pointer"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-blue-900/20 p-6 border border-gray-100 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-blue-900/40 transition-all duration-300 h-full">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </motion.div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.15 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Soft Skills
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Problem Solving',
            'Team Collaboration',
            'Communication',
            'Time Management',
            'Code Review',
            'Documentation',
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.08 }}
              whileHover={{ scale: 1.08, y: -5, boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)' }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-700/50 hover:shadow-md dark:hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer"
            >
              <p className="font-semibold text-gray-700 dark:text-gray-200">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
