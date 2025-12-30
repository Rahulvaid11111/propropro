'use client';

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Simulate API call - replace with actual newsletter signup logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/images/1.svg" 
                alt="Photobooth Canada" 
                className="h-40 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Creating unforgettable memories across Canada with premium photo booth experiences. 
              Professional service, modern equipment, and endless fun for every occasion.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/photoboothcanada.ca/?hl=en" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/faqs" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/quote" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Get Quote
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services/open-air-photobooth" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Open Air Photobooth
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/vintage-classic-photobooth" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Vintage Classic Photobooth
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/magnet-photobooth" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Magnet Photobooth
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/keychain-photobooth" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Keychain Photobooth
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/sportscard-photobooth" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Sportscard Photobooth
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/corporate-photobooth" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Corporate PhotoBooth
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/brand-activations" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Brand Activations
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/mirror-booth" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Mirror Booth
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/360-photo-booth" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  360 Photo Booth
                </Link>
              </li>
              <li>
                <Link 
                  href="/cities" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link 
                  href="/quote" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Get Instant Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+17059707860" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  +1 (705) 970-7860
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:support@photoboothcanada.ca" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  support@photoboothcanada.ca
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white text-sm font-medium transition-colors"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {message && (
                  <p className={`text-xs ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2026 Photobooth Canada. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms
              </Link>
              <Link 
                href="/sitemap" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
