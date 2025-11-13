'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageSelector from './ImageSelector';

export default function ContentEditor() {
  const [selectedPage, setSelectedPage] = useState('homepage');
  const [content, setContent] = useState({});
  const [isDirty, setIsDirty] = useState(false);
  const [showImageSelector, setShowImageSelector] = useState(false);
  const [currentImageField, setCurrentImageField] = useState(null);

  const pages = [
    { id: 'homepage', name: 'Homepage', icon: '🏠' },
    { id: 'about', name: 'About Page', icon: 'ℹ️' },
    { id: 'services', name: 'Services', icon: '⚙️' },
    { id: 'contact', name: 'Contact', icon: '📞' },
    { id: 'faqs', name: 'FAQs', icon: '❓' }
  ];

  // Default content structure
  const defaultContent = {
    homepage: {
      heroTitle: 'Capture Unforgettable',
      heroSubtitle: 'Moments in GTA',
      heroDescription: 'Premium photo booth experiences for weddings, corporate events, and celebrations',
      heroBackgroundImage: '/images/hero-background.jpg',
      servicesTitle: 'Our Premium Photo Booth Services',
      servicesDescription: 'Choose from our range of interactive photo booth experiences',
      openAirImage: '/images/open-air-photobooth-enclosure.jpg',
      mirrorImage: '/images/mirror-booth-red-carpet.jpg',
      video360Image: '/images/360-video-booth.jpg'
    },
    about: {
      title: 'About Photobooth Canada',
      description: 'We are Toronto\'s premier photo booth rental company',
      story: 'Founded with a passion for capturing memories...',
      heroImage: '/images/about-hero.jpg',
      teamImage: '/images/team-photo.jpg'
    },
    services: {
      openAir: {
        title: 'Open Air Classic Photo Booth',
        description: 'Ultimate customization with backdrops, props, and unlimited prints',
        price: 478,
        features: ['Unlimited 4×6 Prints', 'Digital Photos', 'On-Site Attendant'],
        heroImage: '/images/open-air-photobooth-enclosure.jpg',
        galleryImages: ['/images/open-air-1.jpg', '/images/open-air-2.jpg']
      },
      mirror: {
        title: 'Mirror Photo Booth',
        description: 'HD touchscreen mirror with emojis, stickers, and virtual props',
        price: 599,
        features: ['HD Touch Screen', 'Emojis & Stickers', 'Virtual Props'],
        heroImage: '/images/mirror-booth-red-carpet.jpg',
        galleryImages: ['/images/mirror-booth-red-carpet.jpg']
      },
      video360: {
        title: '360 Video Booth',
        description: 'TikTok-ready 360° videos with slow-mo and disco lights',
        price: 499,
        features: ['TikTok Ready', 'Disco Lights', 'Bubble Gun'],
        heroImage: '/images/360-video-booth.jpg',
        galleryImages: ['/images/360-video-booth.jpg']
      }
    }
  };

  useEffect(() => {
    // Load content from API
    const loadContent = async () => {
      try {
        const response = await fetch('/api/content');
        const data = await response.json();
        if (data.success) {
          setContent(data.data);
        } else {
          setContent(defaultContent);
        }
      } catch (error) {
        console.error('Error loading content:', error);
        setContent(defaultContent);
      }
    };
    
    loadContent();
  }, []);

  const handleContentChange = (section, field, value) => {
    const newContent = { ...content };
    if (section.includes('.')) {
      const [mainSection, subSection] = section.split('.');
      if (!newContent[mainSection]) newContent[mainSection] = {};
      if (!newContent[mainSection][subSection]) newContent[mainSection][subSection] = {};
      newContent[mainSection][subSection][field] = value;
    } else {
      if (!newContent[section]) newContent[section] = {};
      newContent[section][field] = value;
    }
    setContent(newContent);
    setIsDirty(true);
  };

  const openImageSelector = (section, field) => {
    setCurrentImageField({ section, field });
    setShowImageSelector(true);
  };

  const handleImageSelect = (imageUrl) => {
    if (currentImageField) {
      handleContentChange(currentImageField.section, currentImageField.field, imageUrl);
    }
    setShowImageSelector(false);
    setCurrentImageField(null);
  };

  const ImageField = ({ label, value, section, field, category = 'all' }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex items-center space-x-3">
        <div className="flex-1">
          <input
            type="text"
            value={value || ''}
            onChange={(e) => handleContentChange(section, field, e.target.value)}
            placeholder="Image URL or path"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <button
          onClick={() => openImageSelector(section, field)}
          className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-md transition-colors flex items-center"
        >
          <span className="mr-1">🖼️</span>
          Select
        </button>
      </div>
      {value && (
        <div className="mt-2">
          <img
            src={value}
            alt="Preview"
            className="w-32 h-20 object-cover rounded border"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
    </div>
  );

  const saveContent = async () => {
    try {
      // Save to localStorage for immediate frontend access
      localStorage.setItem('draftContent', JSON.stringify(content));
      
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(content)
      });
      
      const data = await response.json();
      if (data.success) {
        setIsDirty(false);
        alert('Content saved successfully!');
      } else {
        alert('Error saving content: ' + data.error);
      }
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Network error while saving content');
    }
  };

  const publishContent = async () => {
    try {
      // Save to localStorage for immediate frontend access
      localStorage.setItem('publishedContent', JSON.stringify(content));
      
      // Dispatch event to notify frontend of content update
      window.dispatchEvent(new CustomEvent('contentUpdated', { detail: content }));
      
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(content)
      });
      
      const data = await response.json();
      if (data.success) {
        setIsDirty(false);
        alert('Content published successfully!');
        // Trigger content update event for frontend
        window.dispatchEvent(new CustomEvent('contentUpdated', { detail: content }));
      } else {
        alert('Error publishing content: ' + data.error);
      }
    } catch (error) {
      console.error('Error publishing content:', error);
      alert('Network error while publishing content');
    }
  };

  const renderHomepageEditor = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Homepage Content</h3>
      
      <div className="grid gap-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Hero Section</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
              <input
                type="text"
                value={content.homepage?.heroTitle || ''}
                onChange={(e) => handleContentChange('homepage', 'heroTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>
              <input
                type="text"
                value={content.homepage?.heroSubtitle || ''}
                onChange={(e) => handleContentChange('homepage', 'heroSubtitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Description</label>
              <textarea
                value={content.homepage?.heroDescription || ''}
                onChange={(e) => handleContentChange('homepage', 'heroDescription', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <ImageField
              label="Hero Background Image"
              value={content.homepage?.heroBackgroundImage}
              section="homepage"
              field="heroBackgroundImage"
              category="hero"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Services Section</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services Title</label>
              <input
                type="text"
                value={content.homepage?.servicesTitle || ''}
                onChange={(e) => handleContentChange('homepage', 'servicesTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services Description</label>
              <textarea
                value={content.homepage?.servicesDescription || ''}
                onChange={(e) => handleContentChange('homepage', 'servicesDescription', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImageField
                label="Open Air Photo Booth Image"
                value={content.homepage?.openAirImage}
                section="homepage"
                field="openAirImage"
                category="services"
              />
              <ImageField
                label="Mirror Booth Image"
                value={content.homepage?.mirrorImage}
                section="homepage"
                field="mirrorImage"
                category="services"
              />
              <ImageField
                label="360 Video Booth Image"
                value={content.homepage?.video360Image}
                section="homepage"
                field="video360Image"
                category="services"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesEditor = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Services Content</h3>
      
      {['openAir', 'mirror', 'video360'].map((serviceKey) => {
        const service = content.services?.[serviceKey] || {};
        return (
          <div key={serviceKey} className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3 capitalize">
              {serviceKey === 'openAir' ? 'Open Air Photo Booth' : 
               serviceKey === 'mirror' ? 'Mirror Photo Booth' : 
               '360 Video Booth'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={service.title || ''}
                  onChange={(e) => handleContentChange(`services.${serviceKey}`, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                <input
                  type="number"
                  value={service.price || ''}
                  onChange={(e) => handleContentChange(`services.${serviceKey}`, 'price', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={service.description || ''}
                onChange={(e) => handleContentChange(`services.${serviceKey}`, 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="space-y-4">
              <ImageField
                label="Hero Image"
                value={service.heroImage}
                section={`services.${serviceKey}`}
                field="heroImage"
                category="services"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
                <div className="space-y-2">
                  {(service.galleryImages || []).map((image, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={image || ''}
                          onChange={(e) => {
                            const newGallery = [...(service.galleryImages || [])];
                            newGallery[index] = e.target.value;
                            handleContentChange(`services.${serviceKey}`, 'galleryImages', newGallery);
                          }}
                          placeholder="Gallery image URL"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <button
                        onClick={() => {
                          setCurrentImageField({ 
                            section: `services.${serviceKey}`, 
                            field: 'galleryImages',
                            index: index
                          });
                          setShowImageSelector(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-black px-3 py-2 rounded-md transition-colors"
                      >
                        🖼️
                      </button>
                      <button
                        onClick={() => {
                          const newGallery = (service.galleryImages || []).filter((_, i) => i !== index);
                          handleContentChange(`services.${serviceKey}`, 'galleryImages', newGallery);
                        }}
                        className="bg-red-600 hover:bg-red-700 text-black px-3 py-2 rounded-md transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newGallery = [...(service.galleryImages || []), ''];
                      handleContentChange(`services.${serviceKey}`, 'galleryImages', newGallery);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-black px-4 py-2 rounded-md transition-colors text-sm"
                  >
                    + Add Gallery Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderGenericEditor = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">{pages.find(p => p.id === selectedPage)?.name} Content</h3>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Page Title</label>
            <input
              type="text"
              value={content[selectedPage]?.title || ''}
              onChange={(e) => handleContentChange(selectedPage, 'title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={content[selectedPage]?.description || ''}
              onChange={(e) => handleContentChange(selectedPage, 'description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
          {selectedPage === 'about' && (
            <div className="space-y-4">
              <ImageField
                label="Hero Image"
                value={content[selectedPage]?.heroImage}
                section={selectedPage}
                field="heroImage"
                category="hero"
              />
              <ImageField
                label="Team Photo"
                value={content[selectedPage]?.teamImage}
                section={selectedPage}
                field="teamImage"
                category="gallery"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
        <div className="flex space-x-3">
          <button
            onClick={saveContent}
            disabled={!isDirty}
            className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-black px-4 py-2 rounded-md transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={publishContent}
            className="bg-red-600 hover:bg-red-700 text-black px-4 py-2 rounded-md transition-colors"
          >
            Publish Changes
          </button>
        </div>
      </div>

      {isDirty && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <p className="text-yellow-800 text-sm">You have unsaved changes</p>
        </div>
      )}

      {/* Page Selector */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Select Page to Edit</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setSelectedPage(page.id)}
              className={`p-3 rounded-lg border-2 transition-colors ${
                selectedPage === page.id
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-1">{page.icon}</div>
              <div className="text-sm font-medium">{page.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Editor */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <motion.div
          key={selectedPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedPage === 'homepage' && renderHomepageEditor()}
          {selectedPage === 'services' && renderServicesEditor()}
          {(selectedPage === 'about' || selectedPage === 'contact' || selectedPage === 'faqs') && renderGenericEditor()}
        </motion.div>
      </div>

      {/* Image Selector Modal */}
      {showImageSelector && (
        <ImageSelector
          selectedImage={currentImageField?.field ? content[currentImageField.section]?.[currentImageField.field] : ''}
          onImageSelect={(imageUrl) => {
            if (currentImageField?.field === 'galleryImages' && currentImageField?.index !== undefined) {
              // Handle gallery images array
              const section = currentImageField.section;
              const currentGallery = content[section]?.galleryImages || [];
              const newGallery = [...currentGallery];
              newGallery[currentImageField.index] = imageUrl;
              handleContentChange(section, 'galleryImages', newGallery);
            } else {
              handleImageSelect(imageUrl);
            }
            setShowImageSelector(false);
            setCurrentImageField(null);
          }}
          onClose={() => {
            setShowImageSelector(false);
            setCurrentImageField(null);
          }}
          title="Select Image for Content"
        />
      )}
    </div>
  );
}
