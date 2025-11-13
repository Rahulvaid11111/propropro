'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AwardBadges() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight">
            Award-Winning Excellence
          </h3>
          <p className="text-gray-600 text-base font-light">
            Awarded as Toronto's Best Photobooth 2025
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <Image
              src="/images/award.png"
              alt="Toronto's Best Photobooth 2025"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-6 py-3">
            <span className="text-gray-900 text-xl mr-3">⭐</span>
            <p className="text-gray-900 font-medium text-sm">
              Trusted by 5,000+ events across the GTA
            </p>
            <span className="text-gray-900 text-xl ml-3">⭐</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
