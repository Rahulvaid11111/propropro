'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';
import AwardBadges from '../../components/AwardBadges';
import CitiesServiceArea from '../../components/CitiesServiceArea';
// import ContactForm from '../../components/ContactForm';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  // Services data
  const services = [
    {
      id: 'open-air',
      title: 'Open Air Photo Booth',
      description: 'Ultimate customization with backdrops, props, and unlimited prints for your special event.',
      price: 'From $478',
      image: '/images/open-air-photobooth-enclosure.jpg',
      features: ['Custom Backdrops', 'Unlimited Props', 'Instant Prints', '4-Hour Rental']
    },
    {
      id: 'mirror-booth',
      title: 'Mirror Photo Booth',
      description: 'Interactive touchscreen mirror with digital props, animations, and instant social sharing.',
      price: 'From $599',
      image: '/images/mirror-booth-red-carpet.jpg',
      features: ['HD Touchscreen', 'Virtual Props', 'Custom Messages', 'Social Sharing']
    },
    {
      id: '360-booth',
      title: '360° Photo Booth',
      description: 'Create viral-ready 360° videos with slow motion effects and professional lighting.',
      price: 'From $499',
      image: '/images/360-video-booth.jpg',
      features: ['360° Videos', 'Slow Motion', 'LED Lighting', 'Music Sync']
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah & Michael Thompson",
      event: "Wedding Reception - Toronto",
      rating: 5,
      text: "Absolutely incredible service! The photo booth was the highlight of our wedding. Our guests couldn't stop taking photos and the quality was outstanding.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Jennifer Martinez",
      event: "Corporate Gala - Mississauga",
      rating: 5,
      text: "We hired Photobooth Canada for our annual company gala and they exceeded all expectations. The 360° booth was a huge hit with our employees and clients.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      event: "Birthday Celebration - Markham",
      rating: 5,
      text: "The mirror booth was perfect for my wife's 40th birthday party. The interactive features and instant prints were a huge hit with all our guests.",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Gallery images
  const galleryImages = [
    { src: '/eventgallery/1PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/2PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/3PBC.jpg', alt: 'Photo Booth Event', category: 'parties' },
    { src: '/eventgallery/4PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/5PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/6PBC.jpg', alt: 'Photo Booth Event', category: 'parties' },
    { src: '/eventgallery/7PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/8PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/9PBC.jpg', alt: 'Photo Booth Event', category: 'parties' },
    { src: '/eventgallery/10PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/11PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/12PBC.jpg', alt: 'Photo Booth Event', category: 'parties' },
    { src: '/eventgallery/13PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/14PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/15PBC.jpg', alt: 'Photo Booth Event', category: 'parties' },
    { src: '/eventgallery/16PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/17PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/18PBC.jpg', alt: 'Photo Booth Event', category: 'parties' },
    { src: '/eventgallery/19PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/20PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/21PBC.jpg', alt: 'Photo Booth Event', category: 'parties' },
    { src: '/eventgallery/22PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/23PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/24PBC.jpg', alt: 'Photo Booth Event', category: 'parties' },
    { src: '/eventgallery/25PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/26PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/27PBC.jpg', alt: 'Photo Booth Event', category: 'parties' },
    { src: '/eventgallery/28PBC.jpg', alt: 'Photo Booth Event', category: 'weddings' },
    { src: '/eventgallery/29PBC.jpg', alt: 'Photo Booth Event', category: 'corporate' },
    { src: '/eventgallery/30PBC.jpg', alt: 'Photo Booth Event', category: 'parties' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Photobooth Canada",
    "description": "Premium photo booth rental services for weddings, corporate events, and celebrations in the Greater Toronto Area",
    "url": "https://photoboothcanada.com",
    "telephone": "+1-705-970-7860",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "43.6532",
        "longitude": "-79.3832"
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photo Booth Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <>
      {/* SEO Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/background.mov" type="video/quicktime" />
              <source src="/videos/background.mp4" type="video/mp4" />
            </video>
            {/* Black fade overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="inline-flex items-center border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span className="text-white text-sm font-medium tracking-wide uppercase">Toronto&apos;s Premier Photo Booth Service</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight tracking-tight"
            >
              <span className="text-white">Capture</span>
              <br />
              <span className="font-normal bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Unforgettable
              </span>
              <br />
              <span className="text-white">Moments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-base sm:text-lg mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Premium photo booth experiences for weddings, corporate events, and celebrations across the Greater Toronto Area
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
            >
              {[
                { number: "5000+", label: "Events Served", icon: "🎉" },
                { number: "50+", label: "GTA Cities", icon: "🏙️" },
                { number: "4.9★", label: "Client Rating", icon: "⭐" },
                { number: "24/7", label: "Support", icon: "💬" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="text-2xl lg:text-3xl font-light text-white mb-1">{stat.number}</div>
                  <div className="text-xs uppercase tracking-wider text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/quote">
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 w-full sm:w-auto">
                  Get Your Quote
                </button>
              </Link>
              <button 
                onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 w-full sm:w-auto"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Award Badges Section */}
        <AwardBadges />

        {/* Services Section */}
        <section ref={servicesRef} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Our Services
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
                Curated photo booth experiences designed for discerning clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group bg-white overflow-hidden hover:shadow-lg transition-all duration-500 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">{service.title}</h3>
                    <p className="text-gray-500 mb-4 text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${service.id === 'mirror-booth' ? 'mirror-booth' : service.id === '360-booth' ? '360-photo-booth' : 'open-air-photobooth'}`}>
                      <button className="w-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300">
                        Discover More
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
                Excellence in every detail
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏆",
                  title: "Award-Winning Service",
                  description: "Recognized as Toronto's premier photo booth rental company with 4.9-star ratings"
                },
                {
                  icon: "🛡️",
                  title: "Fully Insured & Licensed",
                  description: "Complete peace of mind with comprehensive insurance and professional licensing"
                },
                {
                  icon: "⚡",
                  title: "Same-Day Setup",
                  description: "Professional installation and breakdown included with every rental package"
                },
                {
                  icon: "📱",
                  title: "Instant Digital Sharing",
                  description: "Guests can instantly share photos via email, text, or social media platforms"
                },
                {
                  icon: "🎨",
                  title: "Custom Branding",
                  description: "Personalized backdrops, props, and digital overlays to match your event theme"
                },
                {
                  icon: "💎",
                  title: "Premium Quality",
                  description: "Professional-grade equipment and high-resolution photos for stunning results"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center p-8 bg-gray-50 hover:bg-white transition-all duration-500 border border-transparent hover:border-gray-200"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section ref={galleryRef} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Event Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See our photo booths in action at real events across Canada
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <div className="flex flex-wrap gap-4">
                {['all', 'weddings', 'corporate', 'parties'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isGalleryInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="wait">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={`${activeFilter}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-semibold text-lg">{image.alt}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don&apos;t just take our word for it - hear from our satisfied customers
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400 text-xl">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].event}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Service Area */}
        <CitiesServiceArea />

        {/* Final CTA Section */}
        <section ref={ctaRef} className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
                Let&apos;s Create Something Extraordinary
              </h2>
              <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-light">
                Begin your journey with us today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300">
                    Request Quote
                  </button>
                </Link>
                <a href="tel:+17059707860">
                  <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300">
                    📞 Call Now
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section - Temporarily Disabled */}
        {/* <ContactForm /> */}
      </div>
    </>
  );
}
