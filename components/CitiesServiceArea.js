'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import VideoBackground from './VideoBackground';

const CitiesServiceArea = () => {
  const cities = [
    { name: 'Ajax', slug: 'ajax' },
    { name: 'Barrie', slug: 'barrie' },
    { name: 'Belleville', slug: 'belleville' },
    { name: 'Brampton', slug: 'brampton' },
    { name: 'Brantford', slug: 'brantford' },
    { name: 'Brockville', slug: 'brockville' },
    { name: 'Burlington', slug: 'burlington' },
    { name: 'Cambridge', slug: 'cambridge' },
    { name: 'Clarence-Rockland', slug: 'clarence-rockland' },
    { name: 'Cornwall', slug: 'cornwall' },
    { name: 'Dryden', slug: 'dryden' },
    { name: 'Elliot Lake', slug: 'elliot-lake' },
    { name: 'Greater Sudbury', slug: 'greater-sudbury' },
    { name: 'Guelph', slug: 'guelph' },
    { name: 'Haldimand County', slug: 'haldimand-county' },
    { name: 'Hamilton', slug: 'hamilton' },
    { name: 'Kawartha Lakes', slug: 'kawartha-lakes' },
    { name: 'Kenora', slug: 'kenora' },
    { name: 'Kingston', slug: 'kingston' },
    { name: 'Kitchener', slug: 'kitchener' },
    { name: 'London', slug: 'london' },
    { name: 'Markham', slug: 'markham' },
    { name: 'Mississauga', slug: 'mississauga' },
    { name: 'Niagara Falls', slug: 'niagara-falls' },
    { name: 'North Bay', slug: 'north-bay' },
    { name: 'Oakville', slug: 'oakville' },
    { name: 'Orillia', slug: 'orillia' },
    { name: 'Oshawa', slug: 'oshawa' },
    { name: 'Ottawa', slug: 'ottawa' },
    { name: 'Owen Sound', slug: 'owen-sound' },
    { name: 'Pembroke', slug: 'pembroke' },
    { name: 'Peterborough', slug: 'peterborough' },
    { name: 'Pickering', slug: 'pickering' },
    { name: 'Port Colborne', slug: 'port-colborne' },
    { name: 'Prince Edward County', slug: 'prince-edward-county' },
    { name: 'Quinte West', slug: 'quinte-west' },
    { name: 'Richmond Hill', slug: 'richmond-hill' },
    { name: 'Sarnia', slug: 'sarnia' },
    { name: 'Sault Ste. Marie', slug: 'sault-ste-marie' },
    { name: 'St. Catharines', slug: 'st-catharines' },
    { name: 'St. Thomas', slug: 'st-thomas' },
    { name: 'Stratford', slug: 'stratford' },
    { name: 'Temiskaming Shores', slug: 'temiskaming-shores' },
    { name: 'Thorold', slug: 'thorold' },
    { name: 'Thunder Bay', slug: 'thunder-bay' },
    { name: 'Timmins', slug: 'timmins' },
    { name: 'Toronto', slug: 'toronto' },
    { name: 'Vaughan', slug: 'vaughan' },
    { name: 'Waterloo', slug: 'waterloo' },
    { name: 'Welland', slug: 'welland' },
    { name: 'Whitby', slug: 'whitby' },
    { name: 'Windsor', slug: 'windsor' },
    { name: 'Woodstock', slug: 'woodstock' }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Video Background with Fallback */}
      <VideoBackground 
        videoSrc="/videos/background.mov"
        fallbackImage="/images/mirror-booth-red-carpet.jpg"
        overlay={true}
        overlayOpacity={0.6}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light text-white mb-6 tracking-tight">
            Serving Ontario & Beyond
          </h2>
          <div className="max-w-5xl mx-auto text-white leading-relaxed space-y-4">
            <p className="text-lg">
              At <strong>Photobooth Canada</strong>, we proudly provide premium photo booth rentals in{' '}
              <Link href="/locations/toronto" className="text-purple-300 hover:text-purple-200 font-medium underline">
                Toronto
              </Link>{' '}
              and across Ontario, bringing fun and memories to every event. Our services extend to all major Ontario cities and surrounding regions, including:
            </p>
            <p className="text-base">
              {cities.map((city, index) => (
                <span key={city.slug}>
                  <Link 
                    href={`/locations/${city.slug}`}
                    className="text-purple-300 hover:text-purple-200 hover:underline"
                  >
                    {city.name}
                  </Link>
                  {index < cities.length - 1 ? ', ' : ''}
                </span>
              ))}
              , and everywhere in between.
            </p>
            <p className="text-lg">
              We also proudly serve surrounding communities such as Stouffville, Newmarket, and many more — ensuring unforgettable photo experiences across Ontario.
            </p>
            <p className="text-lg">
              Whether it's a wedding, corporate event, birthday, or gala, our <strong>Classic Photo Booths</strong> and <strong>360 Booths</strong> deliver high-quality prints, digital sharing, and memories that last a lifetime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CitiesServiceArea;
