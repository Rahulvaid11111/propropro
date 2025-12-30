'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BrandActivationsPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Full Brand Customization',
      description: 'Complete customization with your brand colors, logos, messaging, and visual identity integrated throughout.',
      icon: '🎨'
    },
    {
      title: 'Social Media Integration',
      description: 'Seamless integration with all major social platforms for instant sharing and maximum brand exposure.',
      icon: '📱'
    },
    {
      title: 'Custom Hashtag Campaigns',
      description: 'Branded hashtag campaigns that amplify your message and create trackable social media engagement.',
      icon: '#️⃣'
    },
    {
      title: 'Branded Digital Overlays',
      description: 'Custom digital frames, filters, and overlays that reinforce your brand message in every photo.',
      icon: '🖼️'
    },
    {
      title: 'Real-time Social Sharing',
      description: 'Instant sharing capabilities that get your branded content circulating on social media immediately.',
      icon: '⚡'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting on engagement, reach, and campaign performance metrics.',
      icon: '📊'
    }
  ];

  const packages = [
    {
      name: 'Activation Package',
      duration: '4 Hours',
      price: 'Contact Us for Pricing',
      features: [
        'Full brand customization',
        'Social media integration',
        'Custom hashtag campaigns',
        'Branded digital overlays',
        'Real-time social sharing',
        'Analytics and reporting',
        'Professional brand specialist',
        'Complete activation setup'
      ],
      popular: true
    },
    {
      name: 'Campaign Package',
      duration: '6+ Hours',
      price: 'Contact Us for Pricing',
      features: [
        'Everything in Activation Package',
        'Additional hours at $99 each',
        'Multi-platform integration',
        'Advanced analytics',
        'Custom content creation',
        'Extended campaign support',
        'Flexible activation timing',
        'Dedicated campaign team'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Brand Marketing Agency',
      event: 'Product Launch Campaign',
      text: 'The brand activation photobooth was incredible for our product launch! The social media integration and analytics helped us track our campaign success in real-time.',
      rating: 5
    },
    {
      name: 'Fashion Brand',
      event: 'Pop-up Store Opening',
      text: 'Perfect for our brand activation! The custom overlays and hashtag campaign generated amazing social media buzz. Highly recommend for any marketing event.',
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
                <span className="text-4xl mr-3">🚀</span>
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Marketing Power
                </span>
              </div>
              <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
                Brand Activations PhotoBooth
              </h1>
              <p className="text-lg text-gray-500 mb-8 font-light leading-relaxed">
                Transform your brand activation with our custom Brand Activation PhotoBooth! Designed for marketing events, product launches, and brand experiences, this service creates Instagram-worthy content that amplifies your brand message and engages your target audience.
              </p>
              <p className="text-base text-gray-500 mb-12 font-light leading-relaxed">
                Perfect for product launches, pop-up stores, trade shows, influencer events, and any marketing activation where you need to create shareable content and measurable engagement.
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
                  src="/Services/Corporate.png"
                  alt="Brand Activations PhotoBooth"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Success Story: Nike Air Max Launch Campaign
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we amplified Nike's product launch with viral-ready brand activations across Toronto
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
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Nike Canada</h3>
                    <p className="text-gray-600">Air Max Launch Campaign</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-600 text-sm">Create buzz for the new Air Max release across multiple Toronto locations while generating authentic user-generated content and social media engagement.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                    <p className="text-gray-600 text-sm">Multi-location brand activation with custom Nike-themed photobooths, creating shareable content and collectible branded merchandise.</p>
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
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🎨</span>
                    <h4 className="font-semibold text-gray-900">Custom Air Max Backdrops</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Giant Air Max sole backdrops with LED lighting and Nike swoosh elements, creating Instagram-perfect shots that screamed "Just Do It".</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🏷️</span>
                    <h4 className="font-semibold text-gray-900">Athlete Trading Cards</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Participants became "Nike Athletes" with custom trading cards featuring their photos in Air Max gear - 5,000+ cards created in 3 days.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🔑</span>
                    <h4 className="font-semibold text-gray-900">Limited Edition Keychains</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Exclusive Air Max keychain photos with holographic Nike branding - became instant collectibles with participants queuing for multiple shots.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🧲</span>
                    <h4 className="font-semibold text-gray-900">Swoosh Magnets & Props</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Nike swoosh magnets and oversized Air Max props created shareable moments, with custom hashtag #AirMaxToronto trending locally.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Campaign Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Social Media Reach</span>
                    <span className="text-2xl font-bold">2.3M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>User-Generated Posts</span>
                    <span className="text-2xl font-bold">8,500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hashtag Uses</span>
                    <span className="text-2xl font-bold">15K+</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Engagement Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Photo Sessions</span>
                    <span className="text-2xl font-bold">12,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Branded Takeaways</span>
                    <span className="text-2xl font-bold">25K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Brand Sentiment</span>
                    <span className="text-2xl font-bold">94%+</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <blockquote className="text-xl italic text-gray-700 max-w-4xl mx-auto">
              "The photobooth activation exceeded all our expectations. We saw a 340% increase in social engagement during the campaign period, and the branded takeaways are still being shared months later. It perfectly captured the energy and excitement we wanted for the Air Max launch."
            </blockquote>
            <p className="mt-4 text-gray-600 font-semibold">— Sarah Chen, Nike Canada Marketing Director</p>
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
              Brand Activation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amplify your brand message with cutting-edge technology, social media integration, and comprehensive analytics for maximum marketing impact.
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
              Brand Activation Packages
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive packages designed to maximize your brand exposure and create measurable marketing results.
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
                  pkg.popular ? 'ring-2 ring-pink-600 scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
                  <p className="text-3xl font-bold text-pink-600">{pkg.price}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-pink-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white'
                      : 'border-2 border-pink-600 text-pink-600 hover:bg-gradient-to-r from-pink-600 to-purple-600 hover:text-white'
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
              What Our Brand Partners Say
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
      <section id="quote" className="py-12 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Brand Activation Quote
            </h2>
            <p className="text-xl text-gray-600">
              Configure your brand activation package and get pricing instantly
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quote Calculator Temporarily Disabled
            </h3>
            <p className="text-gray-600 mb-6">
              Please contact us directly for a personalized quote for your brand activation photobooth.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us for Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
