import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-blue-900/20 overflow-hidden hover:shadow-2xl dark:hover:shadow-blue-900/40 transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700/50"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <Button variant="outline" href={githubUrl} className="flex items-center gap-2">
              <Github size={18} />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button variant="primary" href={liveUrl} className="flex items-center gap-2">
              <ExternalLink size={18} />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
