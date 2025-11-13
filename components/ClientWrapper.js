'use client';

import { motion } from 'framer-motion';

export default function ClientWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      className="flex-grow pt-16"
    >
      {children}
    </motion.main>
  );
}
