import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company?: string;
  period: string;
  description: string[];
  technologies?: string[];
  index: number;
}

const TimelineItem = ({
  title,
  company,
  period,
  description,
  technologies,
  index,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400"
    >
      <motion.div 
        className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      ></motion.div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-blue-900/20 p-6 hover:shadow-xl dark:hover:shadow-blue-900/40 transition-all duration-300 border border-gray-100 dark:border-gray-700"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
            {company && <p className="text-blue-600 dark:text-blue-400 font-medium">{company}</p>}
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">{period}</span>
        </div>

        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 mb-3">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
