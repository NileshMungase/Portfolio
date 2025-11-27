import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Hide floating button when contact section is in viewport
        setIsContactVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      color: 'bg-red-500',
      href: 'mailto:nileshmungase101@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'WhatsApp',
      color: 'bg-green-500',
      href: 'https://wa.me/917447847064',
    },
  ];

  // Hide button when contact section is visible
  if (isContactVisible) return null;

  return (
    <motion.div className="fixed bottom-8 right-8 z-40">
      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-blue-500 dark:bg-blue-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle size={24} />
        </motion.div>
      </motion.button>

      {/* Contact Options */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-20 right-0 space-y-3"
      >
        {contactOptions.map((option, index) => (
          <motion.a
            key={option.label}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 10,
            }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 group"
            whileHover={{ x: -10 }}
          >
            <span className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-2 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {option.label}
            </span>
            <motion.div
              className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl`}
              whileHover={{ scale: 1.1 }}
            >
              {option.icon}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FloatingContactButton;
