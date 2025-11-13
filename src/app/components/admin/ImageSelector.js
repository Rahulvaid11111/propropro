'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageSelector({ 
  selectedImage, 
  onImageSelect, 
  onClose, 
  category = 'all',
  title = 'Select Image' 
}) {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'services', name: 'Services' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'hero', name: 'Hero/Banners' },
    { id: 'testimonials', name: 'Testimonials' }
  ];

  useEffect(() => {
    // Load images from localStorage or use defaults
    const savedImages = localStorage.getItem('adminImages');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    } else {
      // Default images
      const defaultImages = [
        {
          id: 1,
          name: 'open-air-photobooth-enclosure.jpg',
          url: '/images/open-air-photobooth-enclosure.jpg',
          category: 'services',
          status: 'published'
        },
        {
          id: 2,
          name: 'mirror-booth-red-carpet.jpg',
          url: '/images/mirror-booth-red-carpet.jpg',
          category: 'services',
          status: 'published'
        },
        {
          id: 3,
          name: '360-video-booth.jpg',
          url: '/images/360-video-booth.jpg',
          category: 'services',
          status: 'published'
        }
      ];
      setImages(defaultImages);
    }
  }, []);

  const filteredImages = images.filter(img => {
    const matchesCategory = selectedCategory === 'all' || img.category === selectedCategory;
    const matchesSearch = img.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isPublished = img.status === 'published';
    return matchesCategory && matchesSearch && isPublished;
  });

  const handleImageSelect = (image) => {
    onImageSelect(image.url);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="p-6 border-b border-gray-200 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-red-100 text-red-700 border border-red-300'
                        : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search images..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          {/* Images Grid */}
          <div className="p-6 overflow-y-auto max-h-96">
            {filteredImages.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === image.url
                        ? 'border-red-500 ring-2 ring-red-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleImageSelect(image)}
                  >
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-black p-2">
                      <p className="text-xs truncate">{image.name}</p>
                    </div>
                    {selectedImage === image.url && (
                      <div className="absolute top-2 right-2 bg-red-500 text-black rounded-full w-6 h-6 flex items-center justify-center">
                        ✓
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No images found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <div className="text-sm text-gray-500">
              {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''} available
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
