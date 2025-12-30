'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LuxuryBackdropsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const luxuryBackdrops = [
    {
      id: 'luxury-red',
      name: 'Luxury Red Backdrop',
      color: 'Red',
      description: 'Opulent crimson backdrop with rich velvet textures and golden accents, perfect for sophisticated events and glamorous celebrations.',
      category: 'bold',
      mood: 'Dramatic & Passionate',
      bestFor: ['Weddings', 'Galas', 'Corporate Events', 'Anniversary Celebrations'],
      images: [
        '/backdrops/red.PNG',
        '/backdrops/red2.PNG'
      ],
      colorCode: '#8B0000',
      premium: true
    },
    {
      id: 'luxury-green',
      name: 'Luxury Green Backdrop',
      color: 'Green',
      description: 'Luxurious emerald green backdrop with botanical elegance and metallic highlights, creating an atmosphere of refined natural beauty.',
      category: 'nature',
      mood: 'Elegant & Refreshing',
      bestFor: ['Garden Parties', 'Spring Weddings', 'Corporate Launches', 'Eco-Luxury Events'],
      images: [
        '/backdrops/green.PNG',
        '/backdrops/green2.PNG'
      ],
      colorCode: '#006400',
      premium: true
    },
    {
      id: 'luxury-blue',
      name: 'Luxury Blue Backdrop',
      color: 'Blue',
      description: 'Majestic royal blue backdrop with celestial patterns and silver embellishments, evoking timeless elegance and regal sophistication.',
      category: 'classic',
      mood: 'Regal & Serene',
      bestFor: ['Royal Themed Events', 'Corporate Galas', 'Milestone Celebrations', 'Luxury Parties'],
      images: [
        '/backdrops/blue2.PNG',
        '/backdrops/blue2.PNG'
      ],
      colorCode: '#000080',
      premium: true
    },
    {
      id: 'luxury-yellow',
      name: 'Luxury Yellow Backdrop',
      color: 'Yellow',
      description: 'Brilliant golden yellow backdrop with sunburst patterns and champagne accents, radiating warmth and luxury for joyous occasions.',
      category: 'vibrant',
      mood: 'Joyful & Luxurious',
      bestFor: ['Summer Weddings', 'Celebrations', 'Brand Activations', 'Festive Events'],
      images: [
        '/backdrops/yellow.PNG',
        '/backdrops/yellow2.PNG'
      ],
      colorCode: '#FFD700',
      premium: true
    },
    {
      id: 'luxury-babypink',
      name: 'Luxury Pink Backdrop',
      color: 'Baby Pink',
      description: 'Delicate blush pink backdrop with rose gold details and soft romantic textures, perfect for intimate and feminine celebrations.',
      category: 'romantic',
      mood: 'Romantic & Dreamy',
      bestFor: ['Bridal Showers', 'Baby Showers', 'Romantic Weddings', 'Intimate Gatherings'],
      images: [
        '/backdrops/pink.PNG',
        '/backdrops/pink2.PNG'
      ],
      colorCode: '#FFB6C1',
      premium: true
    },
    {
      id: 'luxury-white',
      name: 'Luxury White Backdrop',
      color: 'White',
      description: 'Pristine white backdrop with platinum accents and crystal-like textures, offering timeless sophistication and versatile luxury.',
      category: 'classic',
      mood: 'Pure & Sophisticated',
      bestFor: ['Minimalist Weddings', 'Corporate Events', 'Art Exhibitions', 'Luxury Launches'],
      images: [
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+',
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+'
      ],
      colorCode: '#FFFFFF',
      premium: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Backdrops', count: luxuryBackdrops.length },
    { id: 'classic', name: 'Classic Elegance', count: luxuryBackdrops.filter(b => b.category === 'classic').length },
    { id: 'romantic', name: 'Romantic Collection', count: luxuryBackdrops.filter(b => b.category === 'romantic').length },
    { id: 'bold', name: 'Bold & Dramatic', count: luxuryBackdrops.filter(b => b.category === 'bold').length },
    { id: 'nature', name: 'Natural Luxury', count: luxuryBackdrops.filter(b => b.category === 'nature').length },
    { id: 'vibrant', name: 'Vibrant Elegance', count: luxuryBackdrops.filter(b => b.category === 'vibrant').length }
  ];

  const filteredBackdrops = activeCategory === 'all' 
    ? luxuryBackdrops 
    : luxuryBackdrops.filter(backdrop => backdrop.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">✨</span>
              <span className="bg-gradient-to-r from-gold-400 to-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold tracking-wider">
                PREMIUM COLLECTION
              </span>
            </div>
            <h1 className="text-6xl font-light text-white mb-8 tracking-tight">
              Luxury Backdrop Collection
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your photobooth experience with our exquisite collection of luxury backdrops. Each backdrop is meticulously crafted with premium materials and sophisticated design elements to create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#collection"
                className="bg-gradient-to-r from-gold-400 to-yellow-400 hover:from-gold-500 hover:to-yellow-500 text-black px-10 py-4 text-sm uppercase tracking-wider font-bold transition-all duration-300 transform hover:scale-105"
              >
                Explore Collection
              </Link>
              <Link
                href="/quote"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-4 text-sm uppercase tracking-wider font-bold transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Curated by Style & Mood
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each backdrop in our luxury collection is designed to evoke specific emotions and complement your event's unique atmosphere.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Debug Section - Remove this later */}
      <section className="py-8 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold mb-4">Debug: Testing Image Paths</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm">Red backdrop:</p>
              <img src="/backdrops/red.PNG" alt="Red test" className="w-32 h-32 object-contain border bg-gray-50" />
              <p className="text-xs">/backdrops/red.PNG</p>
            </div>
            <div>
              <p className="text-sm">Green backdrop:</p>
              <img src="/backdrops/green.PNG" alt="Green test" className="w-32 h-32 object-contain border bg-gray-50" />
              <p className="text-xs">/backdrops/green.PNG</p>
            </div>
            <div>
              <p className="text-sm">Blue backdrop:</p>
              <img src="/backdrops/blue2.PNG" alt="Blue test" className="w-32 h-32 object-contain border bg-gray-50" />
              <p className="text-xs">/backdrops/blue2.PNG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Backdrop Collection */}
      <section id="collection" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBackdrops.map((backdrop, index) => (
              <motion.div
                key={backdrop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Backdrop Preview */}
                <div className="relative aspect-[5/7] overflow-hidden cursor-pointer" onClick={() => setSelectedImage({src: backdrop.images[0], alt: backdrop.name})}>
                  <img
                    src={backdrop.images[0]}
                    alt={backdrop.name}
                    className="w-full h-full object-contain bg-gray-100 hover:scale-105 transition-transform duration-300"
                    onLoad={() => console.log('Image loaded successfully:', backdrop.images[0])}
                    onError={(e) => {
                      console.log('Image failed to load:', backdrop.images[0]);
                      console.log('Full path would be:', window.location.origin + backdrop.images[0]);
                      e.target.style.backgroundColor = backdrop.colorCode;
                      e.target.style.opacity = '0.3';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-30"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-gold-400 to-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      LUXURY
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: backdrop.colorCode }}
                      ></div>
                      <span className="text-sm font-semibold">{backdrop.color}</span>
                    </div>
                  </div>
                </div>

                {/* Backdrop Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {backdrop.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {backdrop.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-purple-600">Mood:</span>
                      <span className="text-sm text-gray-700">{backdrop.mood}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-sm font-semibold text-purple-600 block mb-3">Perfect For:</span>
                    <div className="flex flex-wrap gap-2">
                      {backdrop.bestFor.map((use, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href="/quote"
                      className="w-full block text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Why Choose Our Luxury Backdrops?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every backdrop in our collection represents the pinnacle of photographic elegance and sophistication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💎',
                title: 'Premium Materials',
                description: 'Crafted with the finest fabrics and materials for exceptional quality and durability.'
              },
              {
                icon: '🎨',
                title: 'Artistic Design',
                description: 'Each backdrop features unique artistic elements and sophisticated color palettes.'
              },
              {
                icon: '✨',
                title: 'Luxury Finishes',
                description: 'Metallic accents, embossed textures, and premium finishes for stunning visual impact.'
              },
              {
                icon: '📸',
                title: 'Photo Perfect',
                description: 'Optimized for photography with perfect lighting reflection and color accuracy.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to Elevate Your Event?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let our luxury backdrops transform your photobooth experience into an unforgettable journey of elegance and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-gradient-to-r from-gold-400 to-yellow-400 hover:from-gold-500 hover:to-yellow-500 text-black px-10 py-4 text-sm uppercase tracking-wider font-bold transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-4 text-sm uppercase tracking-wider font-bold transition-all duration-300"
              >
                Contact Our Designers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50" onClick={() => setSelectedImage(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-semibold bg-black bg-opacity-50 rounded-lg px-4 py-2 inline-block">
                {selectedImage.alt}
              </p>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
