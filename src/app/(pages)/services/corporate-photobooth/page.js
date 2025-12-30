'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CorporatePhotoboothPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Custom Corporate Branding',
      description: 'Full customization with your company logo, colors, and branding elements integrated throughout the experience.',
      icon: '🏢'
    },
    {
      title: 'Professional Backgrounds',
      description: 'Sophisticated backdrop options that reflect your corporate image and event theme.',
      icon: '🎯'
    },
    {
      title: 'LinkedIn-Ready Photos',
      description: 'Professional headshot-quality photos perfect for LinkedIn profiles and business networking.',
      icon: '💼'
    },
    {
      title: 'Business Card Integration',
      description: 'Photos can be formatted for business cards or professional marketing materials.',
      icon: '📇'
    },
    {
      title: 'Company Logo Overlay',
      description: 'Subtle company branding overlay on photos for professional marketing and networking use.',
      icon: '🏷️'
    },
    {
      title: 'Networking Features',
      description: 'QR codes and digital sharing options to facilitate professional networking and connections.',
      icon: '🤝'
    }
  ];

  const packages = [
    {
      name: 'Professional Package',
      duration: '4 Hours',
      price: 'Contact Us for Pricing',
      features: [
        'Custom corporate branding',
        'Professional backgrounds',
        'Business card integration',
        'LinkedIn-ready photos',
        'Company logo overlay',
        'Networking features',
        'Professional attendant',
        'Complete branding setup'
      ],
      popular: true
    },
    {
      name: 'Executive Package',
      duration: '6+ Hours',
      price: 'Contact Us for Pricing',
      features: [
        'Everything in Professional Package',
        'Additional hours at $99 each',
        'Premium branding options',
        'Multiple background choices',
        'Custom print templates',
        'Extended networking time',
        'Flexible event scheduling',
        'Dedicated support team'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Tech Solutions Inc.',
      event: 'Annual Conference',
      text: 'The corporate photobooth was perfect for our conference! Professional quality photos with our branding, and great for networking. Highly recommend for business events.',
      rating: 5
    },
    {
      name: 'Marketing Director',
      event: 'Product Launch',
      text: 'Excellent service for our product launch event. The branded photos were perfect for our social media campaign and the networking features were a huge hit.',
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
                <span className="text-4xl mr-3">🏢</span>
                <span className="bg-gradient-to-r from-slate-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Professional Grade
                </span>
              </div>
              <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
                Corporate PhotoBooth Rental
              </h1>
              <p className="text-lg text-gray-500 mb-8 font-light leading-relaxed">
                Elevate your corporate events with our Professional Corporate PhotoBooth! Featuring custom branding, professional backgrounds, and networking-friendly formats, this service is perfect for conferences, trade shows, company parties, and team building events.
              </p>
              <p className="text-base text-gray-500 mb-12 font-light leading-relaxed">
                Create professional headshots, branded marketing content, and networking opportunities that enhance your corporate image while providing valuable content for your business.
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
                  src="/Services/Brandactivation.png"
                  alt="Corporate PhotoBooth"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Success Story: Microsoft Canada Annual Summit
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we transformed Microsoft's corporate event into an engaging brand experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">MS</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Microsoft Canada</h3>
                    <p className="text-gray-600">Annual Leadership Summit</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-600 text-sm">Create professional networking opportunities and branded content for 500+ executives while maintaining Microsoft's premium brand standards.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                    <p className="text-gray-600 text-sm">Multi-station corporate photobooth experience with custom Microsoft Azure-themed backdrops and professional networking features.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🎯</span>
                    <h4 className="font-semibold text-gray-900">Professional Headshots Station</h4>
                  </div>
                  <p className="text-gray-600 text-sm">LinkedIn-ready headshots with Microsoft branding for all attendees, resulting in 500+ professional photos for networking.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-600">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🏷️</span>
                    <h4 className="font-semibold text-gray-900">Custom Trading Cards</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Executive trading cards featuring attendee photos, titles, and fun facts - became the event's most popular networking tool.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-600">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🧲</span>
                    <h4 className="font-semibold text-gray-900">Branded Magnets & Keychains</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Microsoft Azure-branded photo magnets and keychains as premium takeaways, extending brand visibility beyond the event.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-600">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🎨</span>
                    <h4 className="font-semibold text-gray-900">Custom Props & Backdrops</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Azure cloud-themed props and gradient backdrops matching Microsoft's brand guidelines, creating Instagram-worthy content.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Results That Speak Volumes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Professional Headshots</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Attendee Participation</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2,000+</div>
                <div className="text-blue-100">Social Media Shares</div>
              </div>
            </div>
          </motion.div>
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
              Professional Corporate Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your corporate events with professional branding, networking opportunities, and business-quality photo experiences.
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
              Corporate Photobooth Packages
            </h2>
            <p className="text-xl text-gray-600">
              Professional packages designed for corporate events, conferences, and business networking opportunities.
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
                  pkg.popular ? 'ring-2 ring-slate-600 scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-slate-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
                  <p className="text-3xl font-bold text-slate-600">{pkg.price}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-slate-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      ? 'bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white'
                      : 'border-2 border-slate-600 text-slate-600 hover:bg-gradient-to-r from-slate-600 to-blue-600 hover:text-white'
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
              What Our Corporate Clients Say
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
      <section id="quote" className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Corporate Photobooth Quote
            </h2>
            <p className="text-xl text-gray-600">
              Configure your corporate photobooth package and get pricing instantly
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quote Calculator Temporarily Disabled
            </h3>
            <p className="text-gray-600 mb-6">
              Please contact us directly for a personalized quote for your corporate photobooth rental.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us for Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
