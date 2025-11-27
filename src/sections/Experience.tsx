import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import TimelineItem from '../components/TimelineItem';

const Experience = () => {
  const experiences = [
    {
      title: 'Java Full-Stack Development Certification',
      company: 'Naresh i Technologies, Hyderabad',
      period: '2024',
      description: [
        'Completed comprehensive training in Java ecosystem',
        'Mastered Spring Boot, Microservices, and REST API development',
        'Gained expertise in full-stack technologies including HTML, CSS, JavaScript',
        'Learned database management with Oracle and MySQL',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Hibernate',
        'Microservices',
        'Oracle',
      ],
    },
    {
      title: 'Biometric Attendance System',
      period: '2024',
      description: [
        'Developed secure REST APIs for authentication and user management',
        'Integrated fingerprint hardware with backend services',
        'Implemented JWT security and analytics dashboard',
        'Reduced manual effort by 90% through automation',
      ],
      technologies: ['Spring Boot', 'JPA', 'MySQL', 'JWT', 'REST API'],
    },
    {
      title: 'Office Store Integration System',
      period: '2023',
      description: [
        'Built RESTful APIs for inventory and employee management',
        'Collaborated with frontend team for seamless integration',
        'Improved resource management efficiency significantly',
        'Reduced frontend bugs by 60% through robust API design',
      ],
      technologies: ['Spring Boot', 'MongoDB', 'AngularJS', 'REST API'],
    },
    {
      title: 'Bachelor of Engineering in Computer Engineering',
      company: 'VACOEA, Pune University',
      period: 'Aug 2020 - May 2024',
      description: [
        'Graduated with CGPA: 7.61/10',
        'Strong fundamentals in object-oriented programming',
        'Extensive coursework in data structures and algorithms',
        'Hands-on experience with software development projects',
      ],
    },
  ];

  return (
    <SectionWrapper id="experience" className="bg-gray-50 dark:bg-gray-900">
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
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto origin-left"
        ></motion.div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
