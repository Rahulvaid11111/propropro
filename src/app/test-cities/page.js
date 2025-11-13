import Link from 'next/link';
import { cities, formatCityName } from '../../../lib/cities';

export default function TestCitiesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Test Dynamic City Pages</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Click any city below to test the dynamic routing system
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.slice(0, 20).map((city) => (
            <Link
              key={city}
              href={`/locations/${city}`}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-red-600 hover:shadow-lg transition-all text-center"
            >
              <span className="font-semibold text-gray-900">
                {formatCityName(city)}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Total cities with dynamic pages: <strong>{cities.length}</strong>
          </p>
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
