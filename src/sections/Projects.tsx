import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Biometric Attendance System',
      description:
        'Developed a full-stack biometric attendance tracking application with secure REST APIs for authentication, user roles, and attendance logs. Integrated fingerprint hardware with backend services, reducing manual effort by 90%.',
      technologies: [
        'Java',
        'Spring Boot',
        'JPA',
        'MySQL',
        'REST API',
        'JWT',
      ],
      githubUrl: 'https://github.com/NileshMungase',
    },
    {
      title: 'Office Store Integration System',
      description:
        'Built RESTful APIs for inventory, employee accounts, and item tracking. Collaborated with AngularJS frontend team for integration and testing. Improved resource management efficiency and reduced frontend bugs by 60%.',
      technologies: [
        'Java',
        'Spring Boot',
        'MongoDB',
        'AngularJS',
        'REST API',
      ],
      githubUrl: 'https://github.com/NileshMungase',
    },
  ];

  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-gray-900">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto mb-4 origin-left"
        ></motion.div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Showcasing real-world applications built with modern technologies and
          best practices
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
