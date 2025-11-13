'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    experience: '',
    eventDate: '',
    duration: 3,
    eventType: '',
    addons: [],
    name: '',
    email: '',
    phone: ''
  });

  // Experience options
  const experiences = [
    {
      id: 'open-air',
      name: 'Open Air Photobooth',
      description: 'Ultimate customization with backdrops, props, and unlimited prints',
      basePrice: 478,
      displayName: 'Open Air Photobooth'
    },
    {
      id: 'mirror-booth',
      name: 'Mirror Photobooth',
      description: 'HD touchscreen mirror with emojis, stickers, and virtual props',
      basePrice: 599,
      displayName: 'Mirror Photobooth'
    },
    {
      id: '360-booth',
      name: '360 Photobooth',
      description: 'TikTok-ready 360° videos with slow-mo and disco lights',
      basePrice: 499,
      displayName: '360 Photobooth'
    }
  ];

  // Event types
  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Graduation',
    'Anniversary',
    'Other'
  ];

  // Add-ons
  const addons = [
    { id: 'backdrop', name: 'Custom Backdrop', price: 75 },
    { id: 'guestbook', name: 'Guest Book', price: 50 },
    { id: 'extra-hour', name: 'Extra Hour', price: 100 },
    { id: 'idle-time', name: 'Idle Time Coverage', price: 25 },
    { id: 'props', name: 'Premium Props Package', price: 40 },
    { id: 'social-sharing', name: 'Social Media Sharing', price: 30 }
  ];

  // Calculate quote
  const calculateQuote = () => {
    const selectedExperience = experiences.find(exp => exp.id === formData.experience);
    if (!selectedExperience) return { min: 0, max: 0 };

    let basePrice = selectedExperience.basePrice;
    
    // Duration multiplier
    const durationMultiplier = formData.duration / 3; // Base is 3 hours
    basePrice *= durationMultiplier;

    // Add-ons
    const addonsPrice = formData.addons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return total + (addon ? addon.price : 0);
    }, 0);

    const totalMin = Math.round(basePrice + addonsPrice);
    const totalMax = Math.round(totalMin * 1.3); // 30% range for customization

    return { min: totalMin, max: totalMax };
  };

  // Handle experience selection
  const handleExperienceSelect = (experienceId) => {
    setFormData(prev => ({ ...prev, experience: experienceId }));
    setTimeout(() => setCurrentStep(2), 300);
  };

  // Handle addon toggle
  const handleAddonToggle = (addonId) => {
    setFormData(prev => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter(id => id !== addonId)
        : [...prev.addons, addonId]
    }));
  };

  // Send quote via email
  const sendQuoteEmail = async (quoteData) => {
    try {
      const response = await fetch('http://localhost:3001/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send quote');
      }
      
      return result;
    } catch (error) {
      console.error('Error sending quote:', error);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    
    try {
      // Get selected experience details
      const selectedExperience = experiences.find(exp => exp.id === formData.experience);
      const selectedAddons = formData.addons.map(addonId => 
        addons.find(addon => addon.id === addonId)
      ).filter(Boolean);
      
      // Calculate final price
      const quote = calculateQuote();
      const finalPrice = quote.min; // Use minimum price for quote
      
      // Prepare quote data for email
      const quoteData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        experienceName: selectedExperience?.displayName || formData.experience,
        eventDate: formData.eventDate,
        duration: formData.duration,
        eventType: formData.eventType,
        addons: formData.addons,
        selectedAddons: selectedAddons,
        finalPrice: finalPrice
      };
      
      // Send quote email
      const result = await sendQuoteEmail(quoteData);
      
      setSubmitStatus({
        type: 'success',
        message: result.message || 'Quote sent successfully! We\'ll contact you within 24 hours.'
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          experience: '',
          eventDate: '',
          duration: 3,
          eventType: '',
          addons: [],
          name: '',
          email: '',
          phone: ''
        });
        setCurrentStep(1);
        setSubmitStatus({ type: '', message: '' });
      }, 3000);
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send quote. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold ${
                step <= currentStep
                  ? 'bg-red-600 text-black'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 sm:mb-8">
          <div 
            className="bg-red-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Choose Your Experience */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Choose Your Experience</h2>
            <p className="text-gray-700 text-center mb-8 font-medium">Select the perfect photo booth for your event</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {experiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  className={`border-2 border-gray-200 rounded-lg p-4 sm:p-6 cursor-pointer transition-all hover:border-red-500 hover:shadow-lg ${
                    formData.experience === experience.id
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleExperienceSelect(experience.id)}
                >
                  <div className="text-center">
                    <div className="bg-red-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-red-600">{experience.displayName}</h4>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{experience.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{experience.description}</p>
                    <p className="text-xl sm:text-2xl font-bold text-red-600">From ${experience.basePrice}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Event Details */}
        {currentStep === 2 && (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Event Details</h2>
            <p className="text-gray-700 text-center mb-8 font-medium">Tell us about your special event</p>
            
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Event Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration: {formData.duration} hours
                </label>
                <input
                  type="range"
                  min="2"
                  max="8"
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>2 hrs</span>
                  <span>8+ hrs</span>
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData(prev => ({ ...prev, eventType: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  disabled={!formData.eventDate || !formData.eventType}
                  className="px-6 py-3 bg-red-600 text-black rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Add-ons */}
        {currentStep === 3 && (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-2">Enhance Your Experience</h2>
            <p className="text-gray-700 text-center mb-8">Select optional add-ons to make your event even more special</p>
            
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {addons.map((addon) => (
                  <div
                    key={addon.id}
                    className={`border-2 border-gray-200 rounded-lg p-3 sm:p-4 text-center cursor-pointer transition-all hover:border-red-500 text-sm sm:text-base ${
                      formData.addons.includes(addon.id)
                        ? 'border-red-600 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => handleAddonToggle(addon.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{addon.name}</h4>
                        <p className="text-red-600 font-bold">+${addon.price}</p>
                      </div>
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        formData.addons.includes(addon.id)
                          ? 'bg-red-600 border-red-600'
                          : 'border-gray-300'
                      }`}>
                        {formData.addons.includes(addon.id) && (
                          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="w-full bg-red-600 hover:bg-red-700 text-black py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-base sm:text-lg transition-colors"
                >
                  Get My Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Your Instant Quote */}
        {currentStep === 4 && (
          <motion.div
            key="step4"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Get Your Quote</h2>
              <p className="text-gray-600 text-sm sm:text-base">Step {currentStep} of 4</p>
            </div>
            <h2 className="text-3xl font-bold text-center mb-2">Your Instant Quote</h2>
            <p className="text-gray-600 text-center mb-8">Here&apos;s your personalized estimate</p>
            
            <div className="max-w-2xl mx-auto">
              {/* Quote Display */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 sm:p-8 text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Estimated Price Range</h3>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                  ${calculateQuote().min} - ${calculateQuote().max}
                </div>
                <p className="text-gray-600 text-sm sm:text-base">For {formData.duration} hours</p>
              </div>

              {/* Lead Capture Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus.message && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-center">
                      {submitStatus.type === 'success' ? (
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="font-medium">{submitStatus.message}</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    disabled={isSubmitting}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                    className="px-8 py-3 bg-red-600 text-black rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold text-lg flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Quote...
                      </>
                    ) : (
                      '📧 Send My Quote!'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuoteCalculator;
