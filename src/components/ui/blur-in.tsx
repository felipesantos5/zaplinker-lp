"use client";

import { motion } from "framer-motion";

import { cn } from "../../lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h2
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "",
        className,
      )}
    >
      {word}
    </motion.h2>
  );
};

export default BlurIn;

{/* text-4xl sm:text-5xl font-medium tracking-tight text-center md:text-7xl max-w-4xl */ }