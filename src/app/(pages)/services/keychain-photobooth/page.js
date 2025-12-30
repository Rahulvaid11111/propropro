'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function KeychainPhotoboothPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Instant Photo Keychains',
      description: 'Every photo is instantly transformed into a durable keychain that guests can take home and use daily.',
      icon: '🔑'
    },
    {
      title: 'Durable Acrylic Construction',
      description: 'High-quality acrylic material ensures your photo keychains are scratch-resistant and long-lasting.',
      icon: '💎'
    },
    {
      title: 'Custom Shapes Available',
      description: 'Choose from various keychain shapes or create custom shapes that match your event theme.',
      icon: '⭐'
    },
    {
      title: 'Unlimited Keychain Prints',
      description: 'No limit on the number of photo keychains your guests can create during your event.',
      icon: '♾️'
    },
    {
      title: 'Digital Photo Backup',
      description: 'Receive digital copies of all photos taken, perfect for sharing and creating additional keepsakes.',
      icon: '💾'
    },
    {
      title: 'Professional Setup',
      description: 'Our experienced team handles complete setup and ensures smooth operation throughout your event.',
      icon: '⚙️'
    }
  ];

  const packages = [
    {
      name: 'Keychain Package',
      duration: '3 Hours',
      price: '$890 + Delivery',
      features: [
        'Unlimited photo keychains',
        'Durable acrylic construction',
        'Multiple keychain shapes',
        'Professional photo quality',
        'Digital backup copies',
        'Fun props included',
        'Professional attendant',
        'Complete setup service'
      ],
      popular: true
    },
    {
      name: 'Premium Keychain',
      duration: '4+ Hours',
      price: '$890 + $99/hour',
      features: [
        'Everything in Keychain Package',
        'Additional hours at $99 each',
        'Custom keychain shapes',
        'Premium materials option',
        'Event branding available',
        'Extended entertainment',
        'Flexible scheduling',
        'Professional support'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & Mike',
      event: 'Wedding Reception',
      text: 'The keychain photobooth was such a hit! Our guests loved having a practical keepsake they could use every day. Six months later, people still tell us they use their keychains!',
      rating: 5
    },
    {
      name: 'Corporate Events Plus',
      event: 'Company Retreat',
      text: 'Perfect for our team building event! The custom keychains with our company logo were a great way to build team spirit and create lasting memories.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🔑</span>
                <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Portable Memories
                </span>
              </div>
              <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
                Keychain Photobooth Rental
              </h1>
              <p className="text-lg text-gray-500 mb-8 font-light leading-relaxed">
                Turn your favorite moments into portable keepsakes with our Keychain Photobooth! Each photo is transformed into a durable, high-quality keychain that guests can attach to their keys, bags, or backpacks. A unique and practical party favor that travels with your guests.
              </p>
              <p className="text-base text-gray-500 mb-12 font-light leading-relaxed">
                Perfect for weddings, graduations, corporate events, or any celebration where you want to give guests a practical keepsake they'll use and treasure every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  Get Instant Quote
                </Link>
                <Link
                  href="#packages"
                  className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Packages
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/Services/Keychain.png"
                  alt="Keychain Photobooth"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Portable Memory Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create practical keepsakes that your guests will carry with them every day, turning every photo into a lasting memory.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow"
                onMouseEnter={() => setActiveFeature(index)}
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

      {/* Packages Section */}
      <section id="packages" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Keychain Photobooth Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect package for creating portable memories that your guests will carry and treasure every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  pkg.popular ? 'ring-2 ring-green-600 scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
                  <p className="text-3xl font-bold text-green-600">{pkg.price}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white'
                      : 'border-2 border-green-600 text-green-600 hover:bg-gradient-to-r from-green-600 to-teal-600 hover:text-white'
                  }`}
                >
                  Select Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section id="quote" className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Keychain Photobooth Quote
            </h2>
            <p className="text-xl text-gray-600">
              Configure your keychain photobooth package and get pricing instantly
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quote Calculator Temporarily Disabled
            </h3>
            <p className="text-gray-600 mb-6">
              Please contact us directly for a personalized quote for your keychain photobooth rental.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us for Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
