'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import QuoteCalculator from '../../../../components/QuoteCalculator';
import Head from 'next/head';

export default function OpenAirPhotoboothPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Unlimited 4×6 Prints',
      description: 'Unlimited 4×6 prints during the event, so that your guests can relive their cherished memories long after the event is over.',
      icon: '🖨️'
    },
    {
      title: 'Digital Photos',
      description: 'We\'ll send you a copy of the digital photos after the event so you can keep them and share them with your family & friends.',
      icon: '💾'
    },
    {
      title: 'On-Site Attendant',
      description: 'An on-site attendant will ensure that the photo booth runs smoothly throughout the event so that you can focus on enjoying your celebration.',
      icon: '👨‍💼'
    },
    {
      title: 'Live Preview',
      description: 'Live view and touchscreen capabilities, allow guests to preview and adjust their photos before printing them, ensuring that each photo captures the perfect moment.',
      icon: '📱'
    },
    {
      title: 'Custom Backdrops',
      description: 'The flexibility to choose a photo booth backdrop that complements the theme of your event, making your photos even more memorable.',
      icon: '🎭'
    },
    {
      title: 'Fun Props',
      description: 'Tons of fun props are provided for your guests to use, ensuring that everyone has a blast taking photos.',
      icon: '🎪'
    }
  ];

  const packages = [
    {
      name: '2 Hours Package',
      duration: '2 Hours',
      price: '$478 + Delivery',
      features: [
        'Professional on-site attendant',
        'Unlimited 4×6 prints',
        'Digital photos delivered after event',
        'Live preview touchscreen',
        'Custom backdrop selection',
        'Fun props collection',
        'Setup 3 hours in advance',
        'All-inclusive pricing'
      ],
      popular: true
    },
    {
      name: 'Extended Package',
      duration: '3+ Hours',
      price: '$478 + $50/hour',
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
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & Mike',
      event: 'Wedding Reception',
      text: 'The open air photobooth was a huge hit at our wedding! The quality of photos was amazing and our guests loved the instant prints.',
      rating: 5
    },
    {
      name: 'Corporate Events Inc.',
      event: 'Annual Gala',
      text: 'Professional service and high-quality results. The custom branding made our corporate event feel extra special.',
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
                <span className="text-4xl mr-3">📸</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
                Open Air Classic Photo Booth Rental
              </h1>
              <p className="text-lg text-gray-500 mb-8 font-light leading-relaxed">
                Our Open-Air Photo Booth rental is the best way to add excitement to your event. Having a photo booth allows your guests to blow off some steam in an appropriate way! Your guests will love the entertainment environment you will add to your event after all who does not want to have good-looking pictures?
              </p>
              <p className="text-base text-gray-500 mb-12 font-light leading-relaxed">
                With our Toronto photo booth rentals, you have the ultimate hand in customization. Not only can you choose from our collection of backdrops and props, but by customizing the template for your prints, you can keep your Toronto photo booth and event cohesive and pleasing to look at.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#quote"
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
                  src="/images/open-air-photobooth-enclosure.jpg"
                  alt="Open Air Photo Booth Enclosure"
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
              Features Included in the Open-Air Photo Booth Rental
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At PhotoBooth Canada, we provide premium open-air photo booth rentals for weddings and events throughout Ontario. Our Toronto photo booth rental is top-rated and extends through other cities in the GTA including Mississauga, Brampton, Niagara Falls, Burlington, and beyond.
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
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Affordable Photo Booth Pricing
            </h2>
            <p className="text-xl text-gray-600">
              PhotoBoothCanada is committed to offering the best photo booth rental experience at the most affordable rates. Our packages are all-inclusive with no hidden fees!
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
                  pkg.popular ? 'ring-2 ring-red-600 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
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
                  href="#quote"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-black'
                      : 'border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-black'
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
                className="bg-gray-50 rounded-2xl p-8"
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
      <section id="quote" className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Instant Quote
            </h2>
            <p className="text-xl text-gray-600">
              Configure your open air photobooth package and get pricing instantly
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quote Calculator Temporarily Disabled
            </h3>
            <p className="text-gray-600 mb-6">
              Please contact us directly for a personalized quote for your open air photobooth rental.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us for Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
