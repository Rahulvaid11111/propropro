'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ImageManager() {
  const [images, setImages] = useState([
    {
      id: 1,
      name: 'open-air-photobooth-enclosure.jpg',
      url: '/images/open-air-photobooth-enclosure.jpg',
      category: 'services',
      status: 'published',
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'mirror-booth-red-carpet.jpg',
      url: '/images/mirror-booth-red-carpet.jpg',
      category: 'services',
      status: 'published',
      uploadDate: '2024-01-15'
    },
    {
      id: 3,
      name: '360-video-booth.jpg',
      url: '/images/360-video-booth.jpg',
      category: 'services',
      status: 'published',
      uploadDate: '2024-01-15'
    }
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'services', name: 'Services' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'hero', name: 'Hero/Banners' },
    { id: 'testimonials', name: 'Testimonials' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const token = localStorage.getItem('adminToken');
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('image', file);
        formData.append('category', selectedCategory === 'all' ? 'gallery' : selectedCategory);

        // Upload to backend
        const response = await fetch('http://localhost:3001/api/admin/images', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        });

        if (response.ok) {
          const result = await response.json();
          setUploadProgress(((i + 1) / files.length) * 100);
        } else {
          console.error('Upload failed:', await response.text());
        }
      }

      // Refresh images from backend
      await loadImagesFromBackend();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    }

    setIsUploading(false);
    setUploadProgress(0);
    fileInputRef.current.value = '';
  };

  const loadImagesFromBackend = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:3001/api/admin/images', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setImages(result.data);
          // Also save to localStorage for offline access
          localStorage.setItem('adminImages', JSON.stringify(result.data));
        }
      }
    } catch (error) {
      console.error('Failed to load images from backend:', error);
      // Fallback to localStorage
      const savedImages = localStorage.getItem('adminImages');
      if (savedImages) {
        setImages(JSON.parse(savedImages));
      }
    }
  };

  const updateImageStatus = async (imageId, status) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:3001/api/admin/images/${imageId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        const updatedImages = images.map(img => 
          img.id === imageId ? { ...img, status } : img
        );
        setImages(updatedImages);
        localStorage.setItem('adminImages', JSON.stringify(updatedImages));
      }
    } catch (error) {
      console.error('Failed to update image status:', error);
    }
  };

  const updateImageCategory = async (imageId, category) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:3001/api/admin/images/${imageId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category })
      });

      if (response.ok) {
        const updatedImages = images.map(img => 
          img.id === imageId ? { ...img, category } : img
        );
        setImages(updatedImages);
        localStorage.setItem('adminImages', JSON.stringify(updatedImages));
      }
    } catch (error) {
      console.error('Failed to update image category:', error);
    }
  };

  const deleteImage = async (imageId) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:3001/api/admin/images/${imageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const updatedImages = images.filter(img => img.id !== imageId);
        setImages(updatedImages);
        localStorage.setItem('adminImages', JSON.stringify(updatedImages));
      }
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  useEffect(() => {
    // Load images from backend on component mount
    loadImagesFromBackend();
  }, []);

  const copyImageUrl = (url) => {
    navigator.clipboard.writeText(url);
    alert('Image URL copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Image Manager</h2>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-black px-4 py-2 rounded-md transition-colors flex items-center"
        >
          <span className="mr-2">📁</span>
          {isUploading ? 'Uploading...' : 'Upload Images'}
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {isUploading && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-800 font-medium">Uploading images...</span>
            <span className="text-blue-600">{uploadProgress}%</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedCategory === category.id
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Images Grid */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Image Preview */}
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium ${
                  image.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : image.status === 'draft'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {image.status}
                </div>
              </div>

              {/* Image Details */}
              <div className="p-4 space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 truncate" title={image.name}>
                    {image.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    Uploaded: {image.uploadDate}
                  </p>
                </div>

                {/* Category Selector */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={image.category}
                    onChange={(e) => updateImageCategory(image.id, e.target.value)}
                    className="w-full text-sm px-2 py-1 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
                  >
                    {categories.slice(1).map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* Status Selector */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={image.status}
                    onChange={(e) => updateImageStatus(image.id, e.target.value)}
                    className="w-full text-sm px-2 py-1 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="hidden">Hidden</option>
                  </select>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => copyImageUrl(image.url)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded text-xs transition-colors"
                  >
                    Copy URL
                  </button>
                  <button
                    onClick={() => deleteImage(image.id)}
                    className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-2 rounded text-xs transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No images found</h3>
            <p className="text-gray-500">
              {selectedCategory === 'all' 
                ? 'Upload some images to get started' 
                : `No images in the ${categories.find(c => c.id === selectedCategory)?.name} category`
              }
            </p>
          </div>
        )}
      </div>

      {/* Usage Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-900 mb-2">💡 How to use images</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Upload images and set them to "Published" to make them available on the website</li>
          <li>• Use "Draft" status to upload images without showing them publicly</li>
          <li>• Copy the image URL to use in content or replace existing images</li>
          <li>• Organize images by category for easier management</li>
        </ul>
      </div>
    </div>
  );
}
