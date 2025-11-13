'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import QuoteCalculator from '../QuoteCalculator';
import CitiesServiceArea from '../CitiesServiceArea';

const MasterServicePage = ({ city }) => {
  const services = [
    {
      id: 'open-air',
      title: 'Open Air Photo Booth',
      description: 'Ultimate customization with backdrops, props, and unlimited prints for your special event.',
      features: ['Custom Backdrops', 'Unlimited Props', 'Instant Prints', '4-Hour Rental'],
      price: 'From $478',
      image: '/images/open-air-photobooth-enclosure.jpg'
    },
    {
      id: 'mirror-booth',
      title: 'Mirror Photo Booth',
      description: 'Interactive touchscreen mirror with digital props, animations, and instant social sharing.',
      features: ['HD Touchscreen', 'Virtual Props', 'Custom Messages', 'Social Sharing'],
      price: 'From $599',
      image: '/images/mirror-booth-red-carpet.jpg'
    },
    {
      id: '360-booth',
      title: '360° Photo Booth',
      description: 'Create viral-ready 360° videos with slow motion effects and professional lighting.',
      features: ['360° Videos', 'Slow Motion', 'LED Lighting', 'Music Sync'],
      price: 'From $499',
      image: '/images/360-video-booth.jpg'
    }
  ];

  const whyChooseUs = [
    {
      title: `Local ${city} Expertise`,
      description: `We know ${city} venues inside and out. From intimate spaces to grand ballrooms, we've got you covered.`,
      icon: '📍'
    },
    {
      title: 'Professional Setup',
      description: 'Our team arrives early, sets up quickly, and ensures everything runs smoothly throughout your event.',
      icon: '⚡'
    },
    {
      title: 'Premium Equipment',
      description: 'High-quality cameras, professional lighting, and the latest photo booth technology.',
      icon: '📸'
    },
    {
      title: 'Unlimited Fun',
      description: 'Unlimited photos, props, and memories. Your guests will be talking about it for years.',
      icon: '🎉'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      event: 'Wedding Reception',
      text: `The photo booth was perfect for our ${city} wedding! Our guests loved it and we got amazing photos.`,
      rating: 5
    },
    {
      name: 'Mike R.',
      event: 'Corporate Event',
      text: `Professional service and great quality. Highly recommend for any ${city} business event.`,
      rating: 5
    },
    {
      name: 'Jennifer L.',
      event: 'Birthday Party',
      text: `The 360 booth was the highlight of the party! So much fun and the videos turned out incredible.`,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
              Photo Booth Rental in <span className="text-purple-600">{city}</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto font-light">
              Premium photo booth experiences for weddings, corporate events, and celebrations in {city} and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/quote">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 w-full sm:w-auto">
                  Get Quote Now
                </button>
              </Link>
              <button className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 w-full sm:w-auto">
                View Gallery
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Photo Booth Services in {city}
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Choose the perfect photo booth experience for your {city} event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-medium text-gray-900">{service.price}</span>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 text-sm uppercase tracking-wider font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Why Choose Photobooth Canada in {city}?
            </h2>
            <p className="text-lg text-gray-600 font-light">
              We&apos;re the trusted photo booth rental company in {city}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Get Your {city} Photo Booth Quote
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Instant pricing for your {city} event in just 4 simple steps
            </p>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              What {city} Clients Say
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Real reviews from real {city} events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-red-600 text-sm">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Service Area */}
      <CitiesServiceArea />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-white mb-4 tracking-tight">
            Ready to Book Your {city} Photo Booth?
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light">
            Contact us today for availability and custom pricing for your {city} event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a href="tel:+17059707860">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-sm uppercase tracking-wider font-medium transition-colors w-full sm:w-auto">
                📞 +1 (705) 970-7860
              </button>
            </a>
            <a href="mailto:support@photoboothcanada.ca">
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-sm uppercase tracking-wider font-medium transition-colors w-full sm:w-auto">
                ✉️ Email Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterServicePage;
