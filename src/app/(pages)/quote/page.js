'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function QuotePage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@photoboothcanada.ca?subject=Quote Request&body=Hi, I would like to request a quote for my event.%0D%0A%0D%0AEvent Details:%0D%0A- Event Type: %0D%0A- Event Date: %0D%0A- Duration: %0D%0A- Location: %0D%0A- Number of Guests: %0D%0A%0D%0APlease provide me with pricing information.%0D%0A%0D%0AThank you!';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light mb-8 tracking-tight text-gray-900"
          >
            Get Your Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 mb-12 font-light"
          >
            Contact us for personalized pricing for your perfect photo booth experience
          </motion.p>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
          >
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Email us with your event details and we'll send you a personalized quote within 24 hours
            </p>
            
            {/* Email Button */}
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-12 py-5 text-sm uppercase tracking-wider font-medium transition-all duration-300 mb-6"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us for a Quote
            </button>

            {/* Email Address Display */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-sm text-gray-600 mb-2">Send your quote request to:</p>
              <a 
                href="mailto:support@photoboothcanada.ca"
                className="text-2xl md:text-3xl font-bold text-purple-600 hover:text-purple-600 transition-colors"
              >
                support@photoboothcanada.ca
              </a>
            </div>

            {/* What to Include */}
            <div className="text-left max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📝 What to Include in Your Email:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Event Type:</strong> Wedding, Corporate Event, Birthday Party, etc.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Event Date:</strong> When is your event?</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Duration:</strong> How many hours do you need?</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Location:</strong> Where is your event taking place?</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Number of Guests:</strong> Approximate headcount</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Preferred Photo Booth:</strong> Open Air, Mirror, or 360°</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees or surprise charges. What you see is what you pay.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center p-6"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">We respond to all quote requests within 24 hours.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center p-6"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple booking process with instant confirmation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Prefer to Talk?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17059707860">
              <button
                className="bg-white border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300"
              >
                📞 +1 (705) 970-7860
              </button>
            </a>
            <Link href="/">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300">
                🏠 Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
