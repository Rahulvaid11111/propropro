'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { cities, formatCityName } from '../../../../lib/cities';
import CitiesServiceArea from '../../../../components/CitiesServiceArea';
// import ContactForm from '../../../../components/ContactForm';

export default function CitiesPage() {
  const [selectedRegion, setSelectedRegion] = useState('gta');

  // Major cities with custom info
  const majorCities = [
    {
      name: 'Toronto',
      province: 'Ontario',
      description: 'Professional photo booth rentals for weddings, corporate events, and parties in the GTA.',
      startingPrice: '$478',
      image: '/eventgallery/1PBC.jpg',
      slug: 'toronto'
    },
    {
      name: 'Vancouver',
      province: 'British Columbia',
      description: 'Premium photo booth services for events across Metro Vancouver and surrounding areas.',
      startingPrice: '$499',
      image: '/eventgallery/5PBC.jpg',
      slug: 'vancouver'
    },
    {
      name: 'Montreal',
      province: 'Quebec',
      description: 'Bilingual photo booth services for memorable events throughout Montreal and Quebec.',
      startingPrice: '$459',
      image: '/eventgallery/10PBC.jpg',
      slug: 'montreal'
    },
    {
      name: 'Calgary',
      province: 'Alberta',
      description: 'Bringing fun and memories to Calgary events with our professional photo booth rentals.',
      startingPrice: '$478',
      image: '/eventgallery/15PBC.jpg',
      slug: 'calgary'
    },
    {
      name: 'Ottawa',
      province: 'Ontario',
      description: 'Capital city photo booth rentals for government events, weddings, and celebrations.',
      startingPrice: '$468',
      image: '/eventgallery/20PBC.jpg',
      slug: 'ottawa'
    },
    {
      name: 'Edmonton',
      province: 'Alberta',
      description: 'Professional photo booth services for Edmonton and Northern Alberta events.',
      startingPrice: '$478',
      image: '/eventgallery/25PBC.jpg',
      slug: 'edmonton'
    }
  ];

  // GTA cities from the cities.js file
  const gtaCities = cities.filter(city => 
    ['toronto', 'mississauga', 'brampton', 'markham', 'vaughan', 'richmond-hill', 
     'oakville', 'burlington', 'milton', 'newmarket', 'ajax', 'pickering', 
     'whitby', 'oshawa', 'clarington', 'georgina', 'king', 'aurora', 'east-gwillimbury',
     'whitchurch-stouffville', 'caledon', 'halton-hills', 'scugog', 'uxbridge', 'brock'].includes(city)
  );

  const southwesternCities = cities.filter(city =>
    ['kitchener', 'waterloo', 'cambridge', 'guelph', 'london', 'windsor', 'sarnia', 
     'stratford', 'woodstock', 'st-thomas', 'brantford', 'brant'].includes(city)
  );

  const easternCities = cities.filter(city =>
    ['ottawa', 'kingston', 'belleville', 'cornwall', 'brockville', 'pembroke',
     'clarence-rockland', 'quinte-west', 'prince-edward-county'].includes(city)
  );

  const northernCities = cities.filter(city =>
    ['greater-sudbury', 'thunder-bay', 'sault-ste-marie', 'north-bay', 'timmins',
     'kenora', 'dryden', 'elliot-lake', 'temiskaming-shores'].includes(city)
  );

  const regions = [
    { id: 'major', name: 'Major Cities', count: majorCities.length },
    { id: 'gta', name: 'GTA', count: gtaCities.length },
    { id: 'southwestern', name: 'Southwestern Ontario', count: southwesternCities.length },
    { id: 'eastern', name: 'Eastern Ontario', count: easternCities.length },
    { id: 'northern', name: 'Northern Ontario', count: northernCities.length },
    { id: 'all', name: 'All Cities', count: cities.length }
  ];

  const getCurrentCities = () => {
    switch (selectedRegion) {
      case 'major':
        return majorCities;
      case 'gta':
        return gtaCities.map((citySlug, index) => ({
          name: formatCityName(citySlug),
          slug: citySlug,
          province: 'Ontario',
          description: `Professional photo booth rentals in ${formatCityName(citySlug)} and surrounding GTA areas.`,
          startingPrice: '$478',
          image: `/eventgallery/${(index % 30) + 1}PBC.jpg`
        }));
      case 'southwestern':
        return southwesternCities.map((citySlug, index) => ({
          name: formatCityName(citySlug),
          slug: citySlug,
          province: 'Ontario',
          description: `Premium photo booth rentals in ${formatCityName(citySlug)} and Southwestern Ontario.`,
          startingPrice: '$478',
          image: `/eventgallery/${(index % 30) + 1}PBC.jpg`
        }));
      case 'eastern':
        return easternCities.map((citySlug, index) => ({
          name: formatCityName(citySlug),
          slug: citySlug,
          province: 'Ontario',
          description: `Professional photo booth services in ${formatCityName(citySlug)} and Eastern Ontario.`,
          startingPrice: '$478',
          image: `/eventgallery/${(index % 30) + 1}PBC.jpg`
        }));
      case 'northern':
        return northernCities.map((citySlug, index) => ({
          name: formatCityName(citySlug),
          slug: citySlug,
          province: 'Ontario',
          description: `Photo booth rentals serving ${formatCityName(citySlug)} and Northern Ontario.`,
          startingPrice: '$478',
          image: `/eventgallery/${(index % 30) + 1}PBC.jpg`
        }));
      case 'all':
        return cities.map((citySlug, index) => ({
          name: formatCityName(citySlug),
          slug: citySlug,
          province: 'Ontario',
          description: `Photo booth rental services in ${formatCityName(citySlug)}.`,
          startingPrice: '$478',
          image: `/eventgallery/${(index % 30) + 1}PBC.jpg`
        }));
      default:
        return majorCities;
    }
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Cities We Serve
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Professional photo booth rentals across Canada. From coast to coast, we bring the fun to your event.
          </p>
        </motion.div>

        {/* Region Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-2 flex space-x-2">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  selectedRegion === region.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {region.name} ({region.count})
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={selectedRegion}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {getCurrentCities().map((city, index) => (
            <Link
              key={city.slug || city.name}
              href={`/locations/${city.slug || city.name.toLowerCase()}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                {city.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={city.image}
                      alt={`Photo booth rental in ${city.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-light tracking-tight">{city.name}</h3>
                      <p className="text-sm opacity-90">{city.province}</p>
                    </div>
                  </div>
                )}
                {!city.image && (
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">{city.name}</h3>
                      <p className="text-gray-600">{city.province}</p>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{city.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <span className="text-lg font-medium text-gray-900">{city.startingPrice}</span>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-gray-900 font-medium group-hover:text-gray-600">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Don't see your city?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We travel across Canada! Contact us to discuss service in your area.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Cities Service Area */}
      <CitiesServiceArea />

      {/* Contact Form - Temporarily Disabled */}
      {/* <ContactForm 
        title="Serving Your City?"
        subtitle="Don&apos;t see your city? We serve the entire Greater Toronto Area and surrounding regions. to discuss service in your area and get a custom quote."
        compact={true}
      /> */}
    </div>
  );
}
