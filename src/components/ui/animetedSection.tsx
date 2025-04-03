// components/AnimatedSection.jsx
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const AnimatedSection = ({ children, className }: any) => {
  return (
    <motion.section
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20% 0px" }} // Ativa animação 20% antes da seção entrar na tela
    >
      <motion.div variants={childVariants}>
        {children}
      </motion.div>
    </motion.section>
  );
};

export default AnimatedSection