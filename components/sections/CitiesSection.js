'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cities, formatCityName } from '@/lib/cities';

export default function CitiesSection() {
  // Get first 12 cities for the main display
  const featuredCities = cities.slice(0, 12);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Photo Booth Rentals Across the GTA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional photo booth services available in your city. Click on your location to see local packages and pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {featuredCities.map((city, index) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                href={`/locations/${city}`}
                className="block bg-white rounded-lg p-4 text-center hover:shadow-lg hover:bg-red-50 transition-all duration-300 group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {formatCityName(city)} Photobooth Rental
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Professional service in {formatCityName(city)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/cities"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-black px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            View All Cities
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
