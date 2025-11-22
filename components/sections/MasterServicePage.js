'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import QuoteCalculator from '../QuoteCalculator';
import CitiesServiceArea from '../CitiesServiceArea';

const MasterServicePage = ({ city, cityInfo }) => {
  // Generate varied service descriptions based on city
  const getServiceDescriptions = () => {
    const cityHash = city.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    
    const openAirDescriptions = [
      'Ultimate customization with backdrops, props, and unlimited prints for your special event.',
      'Complete personalization featuring custom backdrops, endless props, and instant photo printing.',
      'Maximum flexibility with tailored backdrops, unlimited accessories, and immediate photo delivery.'
    ];
    
    const mirrorDescriptions = [
      'Interactive touchscreen mirror with digital props, animations, and instant social sharing.',
      'Engaging touch-screen mirror featuring virtual props, dynamic animations, and immediate social media sharing.',
      'Smart interactive mirror with digital accessories, animated effects, and seamless social sharing.'
    ];
    
    const booth360Descriptions = [
      'Create viral-ready 360° videos with slow motion effects and professional lighting.',
      'Produce shareable 360-degree videos featuring slow-motion effects and studio-quality lighting.',
      'Generate social media-ready 360° content with dramatic slow-motion and professional illumination.'
    ];
    
    return [
      {
        id: 'open-air',
        title: 'Open Air Photo Booth',
        description: openAirDescriptions[cityHash % openAirDescriptions.length],
        features: ['Custom Backdrops', 'Unlimited Props', 'Instant Prints', '4-Hour Rental'],
        price: 'From $478',
        image: '/images/open-air-photobooth-enclosure.jpg'
      },
      {
        id: 'mirror-booth',
        title: 'Mirror Photo Booth',
        description: mirrorDescriptions[cityHash % mirrorDescriptions.length],
        features: ['HD Touchscreen', 'Virtual Props', 'Custom Messages', 'Social Sharing'],
        price: 'From $599',
        image: '/images/mirror-booth-red-carpet.jpg'
      },
      {
        id: '360-booth',
        title: '360° Photo Booth',
        description: booth360Descriptions[cityHash % booth360Descriptions.length],
        features: ['360° Videos', 'Slow Motion', 'LED Lighting', 'Music Sync'],
        price: 'From $499',
        image: '/images/360-video-booth.jpg'
      }
    ];
  };
  
  const services = getServiceDescriptions();

  const whyChooseUs = [
    {
      title: cityInfo?.localExpertise || `Local ${city} Expertise`,
      description: cityInfo?.expertiseDescription || `We know ${city} venues inside and out. From intimate spaces to grand ballrooms, we've got you covered.`,
      icon: '📍'
    },
    {
      title: 'Professional Setup',
      description: 'Our experienced team arrives early, sets up efficiently, and ensures flawless operation throughout your celebration.',
      icon: '⚡'
    },
    {
      title: 'Premium Equipment',
      description: 'State-of-the-art cameras, professional lighting systems, and cutting-edge photo booth technology for stunning results.',
      icon: '📸'
    },
    {
      title: cityInfo?.uniqueFeature || 'Unlimited Memories',
      description: cityInfo?.serviceHighlight || 'Unlimited photos, creative props, and unforgettable memories. Your guests will treasure these moments forever.',
      icon: '🎉'
    }
  ];

  // Generate varied testimonials based on city context
  const getTestimonials = () => {
    const testimonialVariations = [
      {
        name: 'Sarah M.',
        event: 'Wedding Reception',
        texts: [
          `The photo booth was absolutely perfect for our ${city} wedding! Our guests couldn't stop taking pictures.`,
          `Amazing photo booth experience at our ${city} celebration! The quality was outstanding.`,
          `Our ${city} wedding was made even more special with this incredible photo booth service.`
        ]
      },
      {
        name: 'Mike R.',
        event: 'Corporate Event',
        texts: [
          `Exceptional professional service for our ${city} corporate gala. Highly recommend!`,
          `Top-notch photo booth rental for our ${city} business event. The team was fantastic.`,
          `Outstanding service and quality for our ${city} company celebration.`
        ]
      },
      {
        name: 'Jennifer L.',
        event: 'Birthday Celebration',
        texts: [
          `The 360 booth was absolutely the highlight of our ${city} party! Incredible videos!`,
          `Such an amazing experience! The photo booth made our ${city} celebration unforgettable.`,
          `Best photo booth rental in ${city}! The memories we created are priceless.`
        ]
      }
    ];
    
    // Use city name to create consistent but varied testimonials
    const cityHash = city.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    
    return testimonialVariations.map((testimonial, index) => ({
      ...testimonial,
      text: testimonial.texts[(cityHash + index) % testimonial.texts.length],
      rating: 5
    }));
  };
  
  const testimonials = getTestimonials();

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
              {cityInfo?.heroDescription || `Premium photo booth experiences for weddings, corporate events, and celebrations in ${city} and surrounding areas.`}
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-700">
                <div className="text-center">
                  <div className="font-semibold text-purple-600">{cityInfo?.uniqueFeature || 'Professional Service'}</div>
                  <div>Local Expertise</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="font-semibold text-purple-600">Same Day</div>
                  <div>Setup Available</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="font-semibold text-purple-600">All {city}</div>
                  <div>Areas Covered</div>
                </div>
              </div>
            </div>
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
              Discover the ideal photo booth solution for your {city} celebration
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
              Your premier photo booth rental specialists serving {city}
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
              Get instant pricing for your {city} celebration in just 4 easy steps
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
              Authentic testimonials from satisfied {city} clients
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

      {/* Local Context Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Celebrating {city}'s Unique Character
            </h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-lg leading-relaxed mb-8">
              {cityInfo?.localContext || `${city} celebrations deserve professional photo booth services that understand your community's unique character and celebration style.`}
            </p>
            <p className="text-lg leading-relaxed">
              {cityInfo?.whyChooseUsExtended || `We provide reliable, professional service throughout ${city}, ensuring every celebration is memorable and every guest leaves with lasting memories.`}
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods & Event Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Neighborhoods Served */}
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">
                {city} Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {(cityInfo?.neighborhoods || [`Downtown ${city}`, 'Surrounding areas']).map((neighborhood, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">{neighborhood}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Our {city} photo booth rental service covers all major neighborhoods and surrounding areas. 
                We understand local venue requirements and can navigate any location challenges to ensure 
                seamless setup and operation.
              </p>
            </div>

            {/* Event Types */}
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">
                Perfect for {city} Events
              </h3>
              <div className="space-y-4">
                {(cityInfo?.eventTypes || ['Weddings', 'Corporate events', 'Celebrations']).map((eventType, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-800 font-medium">{eventType}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 leading-relaxed">
                From intimate gatherings to large-scale celebrations, our {city} photo booth rentals 
                adapt to any event size or style. We bring the same level of professionalism and fun 
                to every occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Venues Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Trusted by {city}'s Premier Venues
            </h2>
            <p className="text-lg text-gray-600 font-light">
              We've delivered exceptional photo booth experiences at {city}'s most celebrated locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(cityInfo?.popularVenues || [`${city} venues`, 'Local event centers']).map((venue, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{venue.charAt(0)}</span>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">{venue}</h4>
                <p className="text-gray-600 text-sm">Professional photo booth service</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our experience with {city}'s diverse venue landscape means we understand the unique 
              requirements, logistics, and atmosphere of each location. From setup considerations to 
              guest flow optimization, we ensure seamless integration with your chosen venue.
            </p>
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
            Reach out today for availability and personalized quotes for your {city} celebration
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
