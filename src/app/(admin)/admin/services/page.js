'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import AdminLayout from '../../../components/admin/AdminLayout';

export default function AdminServicesPage() {
  const [services, setServices] = useState([
    {
      id: 'openAir',
      title: 'Open Air Photobooth',
      description: 'Ultimate customization with backdrops, props, and unlimited prints',
      features: ['Custom Backdrops', 'Unlimited Prints', 'Props Included'],
      basePrice: 378,
      image: '/Services/openair.png'
    },
    {
      id: 'vintageClassic',
      title: 'Vintage Classic Photobooth',
      description: 'Nostalgic charm meets modern technology with authentic vintage styling',
      features: ['Authentic Vintage Design', 'Classic Photo Strips', 'Vintage Props'],
      basePrice: 978,
      image: '/Services/Vintage.png'
    },
    {
      id: 'magnet',
      title: 'Magnet Photobooth',
      description: 'Create lasting memories with custom photo magnets',
      features: ['Instant Photo Magnets', 'High-Quality Backing', 'Custom Templates'],
      basePrice: 890,
      image: '/Services/Magnet.png'
    },
    {
      id: 'keychain',
      title: 'Keychain Photobooth',
      description: 'Portable memories with custom photo keychains',
      features: ['Photo Keychains', 'Durable Construction', 'Custom Shapes'],
      basePrice: 890,
      image: '/Services/Keychain.png'
    },
    {
      id: 'sportscard',
      title: 'Sportscard Photobooth',
      description: 'Create custom trading cards featuring your guests',
      features: ['Custom Trading Cards', 'Sports Templates', 'Personalized Stats'],
      basePrice: 890,
      image: '/Services/Tradingcards.png'
    },
    {
      id: 'corporate',
      title: 'Corporate PhotoBooth',
      description: 'Professional branding and networking opportunities',
      features: ['Corporate Branding', 'Professional Backgrounds', 'LinkedIn Photos'],
      basePrice: 0,
      image: '/Services/Corporate.png'
    },
    {
      id: 'brandActivations',
      title: 'Brand Activations',
      description: 'Custom branded experiences that amplify your brand message',
      features: ['Full Brand Customization', 'Social Media Integration', 'Analytics'],
      basePrice: 0,
      image: '/Services/Brandactivation.png'
    },
    {
      id: 'mirror',
      title: 'Mirror Photo Booth',
      description: 'HD touchscreen mirror with emojis, stickers, and virtual props',
      features: ['HD Touch Screen', 'Emojis & Stickers', 'Virtual Props'],
      basePrice: 599,
      image: '/images/mirror-booth-red-carpet.jpg'
    },
    {
      id: 'video360',
      title: '360 Video Booth',
      description: 'TikTok-ready 360° videos with slow-mo and disco lights',
      features: ['TikTok Ready', 'Disco Lights', 'Bubble Gun'],
      basePrice: 499,
      image: '/images/360-video-booth.jpg'
    }
  ]);

  const updateService = (serviceId, field, value) => {
    setServices(prev => prev.map(service => 
      service.id === serviceId ? { ...service, [field]: value } : service
    ));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Services Management</h2>
        </div>

        <div className="grid gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Title</label>
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => updateService(service.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={service.description}
                      onChange={(e) => updateService(service.id, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Base Price ($)</label>
                    <input
                      type="number"
                      value={service.basePrice}
                      onChange={(e) => updateService(service.id, 'basePrice', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Features (comma separated)</label>
                    <input
                      type="text"
                      value={service.features.join(', ')}
                      onChange={(e) => updateService(service.id, 'features', e.target.value.split(', '))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button className="bg-red-600 hover:bg-red-700 text-black px-6 py-2 rounded-md transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
