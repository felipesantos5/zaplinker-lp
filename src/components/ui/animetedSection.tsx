// components/AnimatedSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  return (
    <motion.section
      className={`${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;



// import { motion } from 'framer-motion';

// const AnimatedSection = ({ className, children }) => (
//   <motion.section
//     className={`${className}`}
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, ease: 'easeOut' }} // Transição mais rápida
//     viewport={{ once: false, amount: 0.1 }} // Ajustado para disparar mais cedo
//     style={{ willChange: 'transform, opacity' }} // Opcional: para ajudar a performance
//   >
//     {children}
//   </motion.section>
// );

// export default AnimatedSection;