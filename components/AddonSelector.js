'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { addons } from '../lib/services';

const AddonSelector = ({ serviceId, selectedAddons = [], onAddonsChange, className = '' }) => {
  const [expandedAddon, setExpandedAddon] = useState(null);

  // Get compatible addons for the service
  const getCompatibleAddons = () => {
    // For now, return all addons. In a real implementation, you'd filter based on service compatibility
    return Object.values(addons);
  };

  const compatibleAddons = getCompatibleAddons();

  const handleAddonToggle = (addonId) => {
    const newSelectedAddons = selectedAddons.includes(addonId)
      ? selectedAddons.filter(id => id !== addonId)
      : [...selectedAddons, addonId];
    
    onAddonsChange(newSelectedAddons);
  };

  const getTotalAddonPrice = () => {
    return selectedAddons.reduce((total, addonId) => {
      const addon = Object.values(addons).find(a => a.id === addonId);
      return total + (addon ? addon.price : 0);
    }, 0);
  };

  if (compatibleAddons.length === 0) {
    return null;
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Premium Add-ons
        </h3>
        <p className="text-gray-600">
          Enhance your photobooth experience with our luxury upgrades
        </p>
      </div>

      <div className="space-y-4">
        {compatibleAddons.map((addon, index) => (
          <motion.div
            key={addon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`border rounded-xl p-4 transition-all duration-300 cursor-pointer ${
              selectedAddons.includes(addon.id)
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
            }`}
            onClick={() => handleAddonToggle(addon.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAddons.includes(addon.id)
                    ? 'border-purple-500 bg-purple-500'
                    : 'border-gray-300'
                }`}>
                  {selectedAddons.includes(addon.id) && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {addon.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {addon.description}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-xl font-bold text-purple-600">
                  +${addon.price}
                </div>
                <button
                  className="text-sm text-purple-600 hover:text-purple-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedAddon(expandedAddon === addon.id ? null : addon.id);
                  }}
                >
                  {expandedAddon === addon.id ? 'Less info' : 'More info'}
                </button>
              </div>
            </div>

            {expandedAddon === addon.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Features:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {addon.id === 'luxury-metallic-paper' && (
                        <>
                          <li>• Premium metallic finish</li>
                          <li>• Enhanced durability</li>
                          <li>• Professional quality</li>
                          <li>• Stunning visual appeal</li>
                        </>
                      )}
                      {addon.id === 'luxury-pearl-paper' && (
                        <>
                          <li>• Elegant pearl finish</li>
                          <li>• Sophisticated appearance</li>
                          <li>• Premium paper quality</li>
                          <li>• Unique texture</li>
                        </>
                      )}
                      {addon.id === '5x7-prints' && (
                        <>
                          <li>• Larger 5x7 print size</li>
                          <li>• Luxury backdrop collection</li>
                          <li>• Premium photo quality</li>
                          <li>• Perfect for framing</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Perfect for:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {addon.category === 'paper' && (
                        <>
                          <li>• Weddings & formal events</li>
                          <li>• Corporate functions</li>
                          <li>• Special celebrations</li>
                          <li>• Premium experiences</li>
                        </>
                      )}
                      {addon.category === 'prints' && (
                        <>
                          <li>• Wedding keepsakes</li>
                          <li>• Corporate events</li>
                          <li>• Special occasions</li>
                          <li>• Gift-worthy prints</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {selectedAddons.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-200"
        >
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-gray-900">
                Selected Add-ons ({selectedAddons.length})
              </h4>
              <p className="text-sm text-gray-600">
                {selectedAddons.map(addonId => {
                  const addon = Object.values(addons).find(a => a.id === addonId);
                  return addon?.name;
                }).join(', ')}
              </p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-purple-600">
                +${getTotalAddonPrice()}
              </div>
              <div className="text-sm text-gray-600">
                Total add-on cost
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AddonSelector;
