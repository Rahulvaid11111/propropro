'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AdminToggle() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in as admin
    const token = localStorage.getItem('adminToken');
    setIsLoggedIn(!!token);
    
    // Check admin mode state
    const adminMode = localStorage.getItem('adminEditMode') === 'true';
    setIsAdminMode(adminMode);
  }, []);

  const toggleAdminMode = () => {
    const newMode = !isAdminMode;
    setIsAdminMode(newMode);
    localStorage.setItem('adminEditMode', newMode.toString());
    
    // Dispatch event to notify other components
    window.dispatchEvent(new CustomEvent('adminModeToggle', { 
      detail: { isAdminMode: newMode } 
    }));
  };

  if (!isLoggedIn) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-700">
            Admin Edit Mode
          </span>
          <button
            onClick={toggleAdminMode}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAdminMode ? 'bg-red-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAdminMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        {isAdminMode && (
          <p className="text-xs text-red-600 mt-1">
            Click images to edit them
          </p>
        )}
      </div>
    </motion.div>
  );
}
