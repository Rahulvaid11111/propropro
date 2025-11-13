'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import QuoteCalculator from '../../../../components/QuoteCalculator';

export default function ThreeSixtyPhotoBoothPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'All-Inclusive 360 Video Booth',
      description: 'Complete setup with ring light and internet connectivity to share with your phone. Includes delivery, setup, and takedown.',
      icon: '🎥'
    },
    {
      title: 'Disco Lights',
      description: 'Amazing disco lighting effects that make every video pop and create the perfect party atmosphere.',
      icon: '💡'
    },
    {
      title: 'On-Site Attendant',
      description: 'We bring on-site video booth attendants to help with taking pictures and ensure smooth operation.',
      icon: '👨‍💼'
    },
    {
      title: 'Fun Props Collection',
      description: 'A variety of video booth props so you and your guests can take fun photos and videos.',
      icon: '🎪'
    },
    {
      title: 'Stanchions & Setup',
      description: 'Suitable for up to 1-3 people at a time with 2 sets of stanchions surrounding the 360 video booth.',
      icon: '🚫'
    },
    {
      title: 'FREE Bubble Gun',
      description: 'Bubble Gun included for FREE to add extra fun and magical effects to your videos!',
      icon: '🫧'
    }
  ];

  const packages = [
    {
      name: '2 Hours Package',
      duration: '2 Hours',
      price: '$499 + Delivery',
      features: [
        'All-inclusive 360 video booth',
        'Ring light and internet connectivity',
        'Delivery, setup, and takedown',
        'Disco lights included',
        'On-site video booth attendant',
        'Variety of video booth props',
        '2 sets of stanchions',
        'FREE Bubble Gun included!'
      ],
      popular: true
    },
    {
      name: 'Extended Package',
      duration: '3+ Hours',
      price: '$499 + $50/hour',
      features: [
        'Everything in 2 Hours Package',
        'Additional hours at $50 each',
        'Extended entertainment time',
        'More video opportunities',
        'Perfect for longer events',
        'Same great service',
        'No hidden fees',
        'Professional support'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Maria & Carlos',
      event: 'Wedding Celebration',
      text: 'The 360 photo booth was the highlight of our wedding! Our guests couldn\'t stop talking about the amazing videos.',
      rating: 5
    },
    {
      name: 'Event Planners Pro',
      event: 'Corporate Gala',
      text: 'Absolutely stunning results! The 360 videos added such a modern, high-end feel to our corporate event.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🎥</span>
                <span className="bg-blue-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Premium Experience
                </span>
              </div>
              <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
                360 Video Booth Rental
              </h1>
              <p className="text-lg text-gray-500 mb-8 font-light leading-relaxed">
                Ready for your next TikTok challenge? Get the perfect shot with a 360 Video booth rental in Toronto! Whether you're looking to capture videos at regular speed or slow-mo, our cutting-edge technology has all angles covered.
              </p>
              <p className="text-base text-gray-500 mb-12 font-light leading-relaxed">
                Share fun and creative videos with this TikTok booth of you and your friends that make every angle pop together on social media. Let's see what amazing results we can create! This Tik Tok 360 video booth is new and exciting. We offer this 360 video booth in Mississauga, Brampton, Toronto, Niagara Falls, Hamilton and across Ontario.
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
              <div className="relative aspect-[3/4] bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/360-video-booth.jpg"
                  alt="360 Video Booth"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
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
              Revolutionary 360° Technology
            </h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto">
              Experience the future of event entertainment with our cutting-edge 360-degree video booth
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How 360° Video Works
            </h2>
            <p className="text-xl text-purple-600">
              Simple steps to create amazing memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Step on Platform',
                description: 'Guests step onto the illuminated LED platform and strike their pose.'
              },
              {
                step: '02',
                title: 'Camera Rotates',
                description: 'Our professional camera system rotates 360° around the platform.'
              },
              {
                step: '03',
                title: 'Video Processing',
                description: 'Advanced software instantly processes the footage into stunning slow-motion video.'
              },
              {
                step: '04',
                title: 'Instant Sharing',
                description: 'Guests receive their video immediately via QR code or text message.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="bg-purple-600 text-black w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
      <section id="packages" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Affordable 360 Video Booth Pricing
            </h2>
            <p className="text-xl text-purple-600">
              We are a top Toronto photo booth company offering this fun 360 photo booth. Our rental packages start at 2 hours for $499 plus delivery, with each additional hour costing $50.
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
                  href="#quote"
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

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose 360° Video?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  'Creates viral-worthy content for social media',
                  'Captures every guest from every angle',
                  'Professional slow-motion effects',
                  'Unique and memorable experience',
                  'Perfect for all types of events',
                  'Instant digital delivery'
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center text-lg"
                  >
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-white rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600"
                  alt="360 Video Benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
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
              360° Success Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-purple-50 rounded-2xl p-8"
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
              Get Your 360° Booth Quote
            </h2>
            <p className="text-xl text-purple-600">
              Configure your 360-degree video experience and get pricing instantly
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quote Calculator Temporarily Disabled
            </h3>
            <p className="text-purple-600 mb-6">
              Please contact us directly for a personalized quote for your 360° photo booth rental.
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
