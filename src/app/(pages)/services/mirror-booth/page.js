'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function MirrorBoothPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'HD Touch Screen Mirror',
      description: 'High-definition touchscreen mirror device that guides guests through an interactive photo experience.',
      icon: '🪞'
    },
    {
      title: 'Unlimited 4×6 Prints',
      description: 'Unlimited prints on 4×6 strips during your event so guests can take home their memories.',
      icon: '🖨️'
    },
    {
      title: 'On-Site Attendant',
      description: 'Professional attendant ensures smooth operation so you can focus on enjoying your celebration.',
      icon: '👨‍💼'
    },
    {
      title: 'Digital Copies',
      description: 'Digital copies of all pictures delivered after your event for easy sharing and keeping.',
      icon: '💾'
    },
    {
      title: 'Fun Props Collection',
      description: 'Lots of props for your guests to have fun in their photos and create memorable moments.',
      icon: '🎪'
    },
    {
      title: 'Red Carpet Option',
      description: 'Add glamour with our available red carpet and 2 sets of stanchions for $119.',
      icon: '🔴'
    }
  ];

  const packages = [
    {
      name: '2 Hours Package',
      duration: '2 Hours',
      price: '$599 + Delivery',
      features: [
        'HD touch screen mirror device',
        'Unlimited prints on 4×6 strips',
        'Professional on-site attendant',
        'Digital copies of all pictures',
        'Lots of props for fun photos',
        'Emojis and stickers',
        'Virtual props selection',
        'All-inclusive pricing'
      ],
      popular: true
    },
    {
      name: 'Extended Package',
      duration: '3+ Hours',
      price: '$599 + $50/hour',
      features: [
        'Everything in 2 Hours Package',
        'Additional hours at $50 each',
        'Extended entertainment time',
        'More photo opportunities',
        'Flexible timing options',
        'Same great service',
        'No hidden fees',
        'Professional support'
      ]
    },
    {
      name: 'Glamour Add-On',
      duration: 'Any Package',
      price: '+$119',
      features: [
        'Red carpet entrance',
        '2 sets of stanchions',
        'VIP photo experience',
        'Added sophistication',
        'Perfect for upscale events',
        'Professional setup',
        'Enhanced guest experience',
        'Premium presentation'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer & David',
      event: 'Wedding Reception',
      text: 'The mirror booth was absolutely magical! Our guests were amazed by the interactive features and the photos turned out stunning.',
      rating: 5
    },
    {
      name: 'Tech Corp',
      event: 'Product Launch',
      text: 'The custom animations with our brand colors made our product launch unforgettable. Highly professional service!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🪞</span>
                <span className="bg-purple-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Interactive Experience
                </span>
              </div>
              <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
                Mirror Photo Booth Rental
              </h1>
              <p className="text-lg text-gray-500 mb-8 font-light leading-relaxed">
                Looking for a way to make your Toronto photo booth rental experience unique and memorable? Check out our famous Toronto Mirror Photo Booth Rental. With a Mirror photo booth rental in Toronto or across Ontario, you can have guests interact with an HD touchscreen mirror to take their own pictures and add a personal flair with emojis.
              </p>
              <p className="text-base text-gray-500 mb-12 font-light leading-relaxed">
                Mirror photo booth rental also makes theme parties a blast by offering a selection of fun stickers and virtual props. This is a selfie photo booth but pictures can be taken with groups as well! Take your selfie game to the next level with our Mirror Me photo booth rental.
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
              <div className="aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/mirror-booth-red-carpet.jpg"
                  alt="Mirror Photo Booth with Red Carpet and Stanchions"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Magic of Mirror Booth Technology
            </h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto">
              Experience the future of photo entertainment with our interactive mirror booths
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-purple-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Mirror Booth Works
            </h2>
            <p className="text-xl text-purple-600">
              Simple, intuitive, and magical
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Touch to Start',
                description: 'Guests approach the mirror and touch the screen to begin their photo experience.'
              },
              {
                step: '02',
                title: 'Interactive Prompts',
                description: 'The mirror guides guests with animations, voice prompts, and pose suggestions.'
              },
              {
                step: '03',
                title: 'Instant Results',
                description: 'Photos are instantly displayed, printed, and can be shared digitally on the spot.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-purple-600 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-purple-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mirror Photo Booth Pricing
            </h2>
            <p className="text-xl text-purple-600">
              Our rental packages start at 2 hours for $599 plus delivery, with each additional hour costing $50. Add glamour with our red carpet option!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  pkg.popular ? 'ring-2 ring-purple-600 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-purple-600 mb-4">{pkg.duration}</p>
                  <p className="text-3xl font-bold text-purple-600">{pkg.price}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      ? 'bg-purple-600 hover:bg-purple-700 text-black'
                      : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-black'
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Experiences
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
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
                  <p className="text-purple-600 text-sm">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section id="quote" className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Mirror Booth Quote
            </h2>
            <p className="text-xl text-purple-600">
              Configure your interactive mirror booth experience and get pricing instantly
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quote Calculator Temporarily Disabled
            </h3>
            <p className="text-purple-600 mb-6">
              Please contact us directly for a personalized quote for your mirror booth rental.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us for Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
