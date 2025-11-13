import Link from 'next/link';
import { cities, getCityInfo } from '../../../../lib/cities';
import MasterServicePage from '../../../../components/sections/MasterServicePage';

// Generate static params for all cities
export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city,
  }));
}

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityInfo = getCityInfo(city);
  
  return {
    title: `Photo Booth Rental in ${cityInfo.name} | Photobooth Canada`,
    description: `Premium photo booth rentals in ${cityInfo.name}. Open Air, Mirror, and 360 booths for weddings, corporate events, and parties. Get your instant quote today!`,
    keywords: `photo booth rental ${cityInfo.name}, wedding photo booth ${cityInfo.name}, corporate event photo booth, party rental ${cityInfo.name}, GTA photo booth`,
    openGraph: {
      title: `Photo Booth Rental in ${cityInfo.name} | Photobooth Canada`,
      description: `Premium photo booth rentals in ${cityInfo.name}. Open Air, Mirror, and 360 booths for weddings, corporate events, and parties.`,
      type: 'website',
      locale: 'en_CA',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Photo Booth Rental in ${cityInfo.name} | Photobooth Canada`,
      description: `Premium photo booth rentals in ${cityInfo.name}. Get your instant quote today!`,
    },
    alternates: {
      canonical: `/locations/${city}`,
    },
  };
}

// City-specific landing page component
export default async function CityPage({ params }) {
  const { city } = await params;
  const cityInfo = getCityInfo(city);

  // Handle invalid city slugs
  if (!cities.includes(city)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">City Not Found</h1>
          <p className="text-lg text-gray-600 mb-8 font-light">
            We don&apos;t currently service this location.
          </p>
          <Link 
            href="/" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-sm uppercase tracking-wider font-medium transition-colors inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return <MasterServicePage city={cityInfo.name} />;
}
