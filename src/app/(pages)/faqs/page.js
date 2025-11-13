'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
// import ContactForm from '../../../../components/ContactForm';

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What areas do you serve?',
          answer: 'We serve the entire Greater Toronto Area (GTA) including Toronto, Mississauga, Brampton, Markham, Richmond Hill, Vaughan, Oakville, Burlington, Hamilton, and surrounding areas. Contact us if you\'re unsure about your location.'
        },
        {
          question: 'How far in advance should I book?',
          answer: 'We recommend booking at least 4-6 weeks in advance, especially for weddings and events during peak season (May-October). However, we often accommodate last-minute bookings based on availability.'
        },
        {
          question: 'Do you provide an attendant?',
          answer: 'Yes! All our packages include a professional attendant who will set up, operate, and break down the photo booth. They\'ll also help guests with poses and ensure everything runs smoothly throughout your event.'
        },
        {
          question: 'What happens if there\'s a technical issue?',
          answer: 'We bring backup equipment to every event and our attendants are trained to handle technical issues quickly. We also have 24/7 technical support available during events.'
        }
      ]
    },
    {
      title: 'Pricing & Packages',
      faqs: [
        {
          question: 'What\'s included in your packages?',
          answer: 'All packages include professional setup/breakdown, unlimited photos during your rental period, a professional attendant, basic props, and digital gallery access. Specific inclusions vary by package - check our service pages for details.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees! Our quotes include all standard costs. Additional charges may apply for travel beyond our standard service area (over 50km from Toronto), overtime, or special requests made after booking.'
        },
        {
          question: 'Do you offer discounts?',
          answer: 'We offer discounts for off-season bookings (November-March), weekday events, and multiple service bookings. Military personnel, first responders, and non-profit organizations also qualify for special pricing.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit cards (Visa, MasterCard, American Express), e-transfers, and certified cheques. A 50% deposit is required to secure your booking, with the balance due on the event day.'
        }
      ]
    },
    {
      title: 'Equipment & Setup',
      faqs: [
        {
          question: 'How much space do you need?',
          answer: 'Space requirements vary by booth type: Open Air booths need 8x8 feet, Mirror booths need 6x8 feet, and 360 booths need 8x8 feet with 10-foot ceilings. We also need access to a standard electrical outlet within 20 feet.'
        },
        {
          question: 'Can you set up outdoors?',
          answer: 'Yes, we can set up outdoors with proper weather protection. We require a covered area (tent, gazebo, or overhang) and access to power. Additional weather protection fees may apply.'
        },
        {
          question: 'How long does setup take?',
          answer: 'Setup typically takes 45-60 minutes, and breakdown takes 30-45 minutes. We arrive 1 hour before your event start time to ensure everything is ready when your guests arrive.'
        },
        {
          question: 'What if my venue doesn\'t have power?',
          answer: 'We can provide battery power for up to 4 hours, or generator power for longer events. Additional fees apply for power solutions - contact us to discuss your specific needs.'
        }
      ]
    },
    {
      title: 'Photos & Sharing',
      faqs: [
        {
          question: 'How do guests get their photos?',
          answer: 'Guests receive instant prints on-site, plus all photos are uploaded to a private online gallery within 48 hours. We can also provide USB drives, social media sharing, or email delivery options.'
        },
        {
          question: 'Can we customize the photo templates?',
          answer: 'Absolutely! We offer custom photo templates featuring your names, event date, logos, or special messages. Custom templates are included in our Premium and Deluxe packages, or available as an add-on.'
        },
        {
          question: 'What quality are the photos?',
          answer: 'We use professional DSLR cameras producing high-resolution images (300 DPI) suitable for printing and sharing. All photos are professionally processed and color-corrected before delivery.'
        },
        {
          question: 'How long do you keep our photos?',
          answer: 'We keep all photos for 1 year after your event. You can access your online gallery anytime during this period. After 1 year, photos are archived and available upon request for an additional fee.'
        }
      ]
    },
    {
      title: 'Booking & Policies',
      faqs: [
        {
          question: 'What\'s your cancellation policy?',
          answer: 'Cancellations more than 30 days before the event receive a full refund minus a $50 processing fee. 15-30 days: 50% refund. Less than 15 days: no refund. We understand emergencies happen and will work with you when possible.'
        },
        {
          question: 'Can we extend our rental time?',
          answer: 'Yes, subject to availability. Overtime is charged at $100/hour and must be arranged with your attendant during the event. We recommend discussing potential extensions when booking.'
        },
        {
          question: 'What happens if you can\'t make it to our event?',
          answer: 'This has never happened, but if an emergency prevents us from attending, we\'ll provide a full refund plus compensation for any inconvenience. We maintain backup equipment and staff to prevent this situation.'
        },
        {
          question: 'Do you have insurance?',
          answer: 'Yes, we carry comprehensive general liability insurance ($2 million coverage) and all our equipment is insured. We can provide certificates of insurance for venues that require them.'
        }
      ]
    },
    {
      title: 'Special Requests',
      faqs: [
        {
          question: 'Can you match our event theme?',
          answer: 'Absolutely! We can customize backdrops, props, photo templates, and even booth colors to match your event theme. Discuss your vision with us and we\'ll make it happen.'
        },
        {
          question: 'Do you provide props?',
          answer: 'Yes, all packages include a selection of fun props. We can also source specific props for your theme or you\'re welcome to provide your own. Custom prop packages are available.'
        },
        {
          question: 'Can guests share photos instantly?',
          answer: 'Yes! Our booths can be set up for instant social media sharing via text, email, or QR codes. Guests can share their photos to Facebook, Instagram, or other platforms immediately.'
        },
        {
          question: 'Do you offer green screen technology?',
          answer: 'Yes, we offer green screen backgrounds that can transport your guests anywhere - from tropical beaches to famous landmarks. This feature is available as an add-on for all booth types.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-500 mb-12 font-light">
              Find answers to common questions about our photo booth services. 
              Can't find what you're looking for? We're here to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.451L3 21l2.451-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-8 text-center tracking-tight">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openFAQ === key;
                  
                  return (
                    <div
                      key={faqIndex}
                      className="bg-white border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                      >
                        <span className="text-lg font-medium text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-5 h-5 text-gray-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pro Tips for Your Photo Booth Experience
            </h2>
            <p className="text-xl text-gray-600">
              Make the most of your photo booth rental with these helpful tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📍',
                title: 'Location Matters',
                tip: 'Place your photo booth in a high-traffic area where guests naturally gather, but away from the dance floor to avoid vibrations.'
              },
              {
                icon: '🎭',
                title: 'Encourage Participation',
                tip: 'Have someone from your party be the first to use the booth - once people see others having fun, they\'ll join in!'
              },
              {
                icon: '⏰',
                title: 'Timing is Key',
                tip: 'The best photo booth action happens during cocktail hour and after dinner when guests are relaxed and social.'
              },
              {
                icon: '🎨',
                title: 'Customize Your Experience',
                tip: 'Add personal touches like custom backdrops, themed props, or photo templates that match your event style.'
              },
              {
                icon: '📱',
                title: 'Share the Fun',
                tip: 'Enable instant sharing so guests can post their photos to social media and extend your event\'s reach.'
              },
              {
                icon: '💡',
                title: 'Lighting Considerations',
                tip: 'Our professional lighting works in most conditions, but avoid placing the booth directly under bright spotlights.'
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600">
                  {tip.tip}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our friendly team is here to help! Get in touch and we'll answer any questions about our photo booth services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/quote"
                className="border-2 border-white text-black hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get a Quote
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl mb-2">📞</div>
                <p className="text-gray-300">Call us at</p>
                <a href="tel:+17059707860" className="text-white font-semibold hover:text-gray-200">+1 (705) 970-7860</a>
              </div>
              <div>
                <div className="text-2xl mb-2">✉️</div>
                <p className="text-gray-300">Email us at</p>
                <a href="mailto:support@photoboothcanada.ca" className="text-white font-semibold hover:text-gray-200">support@photoboothcanada.ca</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form - Temporarily Disabled */}
      {/* <ContactForm 
        title="Still Have Questions?"
        subtitle="Can't find what you're looking for? Our team is here to help with any questions about our photo booth services."
        compact={true}
      /> */}
    </div>
  );
}
