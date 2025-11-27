import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    // Download the actual resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nilesh_Mungase_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex justify-center my-8"
    >
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(59, 130, 246, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
      >
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Download size={20} />
        </motion.div>
        Download My Resume
      </motion.button>
    </motion.div>
  );
};

export default ResumeDownload;
