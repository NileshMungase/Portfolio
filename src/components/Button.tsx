import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  href,
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    'px-6 py-3 rounded-lg font-medium transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white hover:shadow-lg hover:scale-105 active:scale-95',
    secondary:
      'bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 hover:shadow-lg hover:scale-105',
    outline:
      'border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:scale-105 dark:hover:border-blue-500',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className} ${disabled ? disabledStyles : ''}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={combinedClassName}
    >
      {children}
    </motion.button>
  );
};

export default Button;
