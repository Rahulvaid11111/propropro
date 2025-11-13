'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageSelector from './ImageSelector';

export default function EditableImage({ 
  src, 
  alt, 
  className = '', 
  onImageChange,
  category = 'all',
  isEditable = false 
}) {
  const [showImageSelector, setShowImageSelector] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageSelect = (newImageUrl) => {
    if (onImageChange) {
      onImageChange(newImageUrl);
    }
  };

  if (!isEditable) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <>
      <div 
        className={`relative group ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        
        {/* Edit Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
          onClick={() => setShowImageSelector(true)}
        >
          <div className="bg-white rounded-lg px-4 py-2 flex items-center space-x-2 shadow-lg">
            <span className="text-sm font-medium text-gray-700">📝 Edit Image</span>
          </div>
        </motion.div>

        {/* Edit Button - Always visible for admin */}
        <button
          onClick={() => setShowImageSelector(true)}
          className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors opacity-75 hover:opacity-100"
          title="Change Image"
        >
          ✏️
        </button>
      </div>

      {/* Image Selector Modal */}
      {showImageSelector && (
        <ImageSelector
          selectedImage={src}
          onImageSelect={handleImageSelect}
          onClose={() => setShowImageSelector(false)}
          category={category}
          title="Select New Image"
        />
      )}
    </>
  );
}
