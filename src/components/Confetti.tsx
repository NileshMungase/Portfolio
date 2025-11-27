import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  delay: number;
}

const Confetti = ({ trigger }: { trigger: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        delay: Math.random() * 0.3,
      }));
      setParticles(newParticles);

      // Clear particles after animation
      const timer = setTimeout(() => setParticles([]), 2000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            left: particle.left,
            top: '-10px',
            opacity: 1,
            rotate: 0,
          }}
          animate={{
            top: '100vh',
            opacity: 0,
            rotate: 360,
          }}
          transition={{
            duration: 2,
            delay: particle.delay,
            ease: 'easeIn',
          }}
          className={`absolute w-2 h-2 ${
            particle.id % 3 === 0
              ? 'bg-blue-500'
              : particle.id % 3 === 1
              ? 'bg-cyan-400'
              : 'bg-purple-500'
          } rounded-full`}
        />
      ))}
    </div>
  );
};

export default Confetti;
