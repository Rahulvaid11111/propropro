// Services data and management for Photobooth Canada
// Includes all photobooth services and addon options

export const addons = {
  luxuryPaper: {
    id: 'luxury-metallic-paper',
    name: 'Luxury Metallic Paper',
    description: 'Premium metallic finish paper for stunning, professional-quality prints',
    price: 75,
    category: 'paper',
    image: '/images/addons/luxury-metallic-paper.jpg'
  },
  luxuryPearl: {
    id: 'luxury-pearl-paper',
    name: 'Luxury Pearl Paper',
    description: 'Elegant pearl finish paper that adds sophistication to every print',
    price: 85,
    category: 'paper',
    image: '/images/addons/luxury-pearl-paper.jpg'
  },
  prints5x7: {
    id: '5x7-prints',
    name: '5x7 Prints with Luxury Backdrops',
    description: 'Larger 5x7 prints featuring our exclusive luxury backdrop collection',
    price: 125,
    category: 'prints',
    image: '/images/addons/5x7-luxury-prints.jpg'
  }
};

export const services = {
  openAir: {
    id: 'open-air-photobooth',
    title: 'Open Air Photobooth',
    shortTitle: 'Open Air',
    description: 'Ultimate customization with backdrops, props, and unlimited prints for your special event.',
    longDescription: 'Our Open-Air Photo Booth rental is the best way to add excitement to your event. Having a photo booth allows your guests to blow off some steam in an appropriate way! Your guests will love the entertainment environment you will add to your event.',
    basePrice: 378,
    category: 'classic',
    features: [
      'Unlimited 4×6 Prints',
      'Digital Photos',
      'On-Site Attendant',
      'Live Preview',
      'Custom Backdrops',
      'Fun Props'
    ],
    packages: [
      {
        name: '2 Hours Package',
        duration: '2 Hours',
        price: 478,
        features: [
          'Professional on-site attendant',
          'Unlimited 4×6 prints',
          'Digital photos delivered after event',
          'Live preview touchscreen',
          'Custom backdrop selection',
          'Fun props collection',
          'Setup 3 hours in advance',
          'All-inclusive pricing'
        ],
        popular: true
      },
      {
        name: 'Extended Package',
        duration: '3+ Hours',
        price: 478,
        additionalHourly: 50,
        features: [
          'Everything in 2 Hours Package',
          'Additional hours at $50 each',
          'Extended entertainment time',
          'More photo opportunities',
          'Flexible timing options',
          'Same great service',
          'No hidden fees',
          'Professional support'
        ]
      }
    ],
    image: '/images/open-air-photobooth-enclosure.jpg',
    slug: 'open-air-photobooth',
    compatibleAddons: ['luxury-metallic-paper', 'luxury-pearl-paper', '5x7-prints'],
    popular: true
  },

  vintageClassic: {
    id: 'vintage-classic-photobooth',
    title: 'Vintage Classic Photobooth',
    shortTitle: 'Vintage Classic',
    description: 'Nostalgic charm meets modern technology with authentic vintage styling and classic photo strips.',
    longDescription: 'Step back in time with our Vintage Classic Photobooth! This authentic vintage-styled booth combines nostalgic charm with modern technology, creating timeless black and white or sepia-toned photo strips that your guests will treasure forever.',
    basePrice: 978,
    category: 'specialty',
    features: [
      'Authentic Vintage Design',
      'Classic Photo Strips',
      'Black & White or Sepia Options',
      'Vintage Props Collection',
      'Retro Sound Effects',
      'Digital Copies Included'
    ],
    packages: [
      {
        name: 'Classic Package',
        duration: '3 Hours',
        price: 525,
        features: [
          'Authentic vintage booth design',
          'Classic 2x6 photo strips',
          'Black & white or sepia options',
          'Vintage props collection',
          'Retro sound effects',
          'Digital copies of all photos',
          'Professional attendant',
          'Setup and breakdown included'
        ],
        popular: true
      },
      {
        name: 'Extended Vintage',
        duration: '4+ Hours',
        price: 525,
        additionalHourly: 60,
        features: [
          'Everything in Classic Package',
          'Additional hours at $60 each',
          'Extended vintage experience',
          'More photo strip options',
          'Custom vintage messaging',
          'Premium vintage props',
          'Flexible timing',
          'Professional support'
        ]
      }
    ],
    image: '/images/vintage-classic-photobooth.jpg',
    slug: 'vintage-classic-photobooth',
    compatibleAddons: ['luxury-metallic-paper', 'luxury-pearl-paper'],
    popular: false
  },

  magnetPhotobooth: {
    id: 'magnet-photobooth',
    title: 'Magnet Photobooth',
    shortTitle: 'Magnet Booth',
    description: 'Create lasting memories with custom photo magnets that guests can take home and display.',
    longDescription: 'Make your memories stick with our Magnet Photobooth! Every photo becomes a custom magnet that guests can take home and display on their fridge, locker, or any magnetic surface. A practical and memorable keepsake that keeps your event in their daily lives.',
    basePrice: 890,
    category: 'specialty',
    features: [
      'Instant Photo Magnets',
      'High-Quality Magnetic Backing',
      'Custom Design Templates',
      'Unlimited Magnet Prints',
      'Digital Photo Copies',
      'Professional Attendant'
    ],
    packages: [
      {
        name: 'Magnet Package',
        duration: '3 Hours',
        price: 599,
        features: [
          'Unlimited photo magnets',
          'High-quality magnetic backing',
          'Custom design templates',
          'Professional photo quality',
          'Digital copies included',
          'Fun props collection',
          'Professional attendant',
          'Setup and breakdown'
        ],
        popular: true
      },
      {
        name: 'Extended Magnet',
        duration: '4+ Hours',
        price: 599,
        additionalHourly: 65,
        features: [
          'Everything in Magnet Package',
          'Additional hours at $65 each',
          'Multiple magnet templates',
          'Custom event branding',
          'Premium prop selection',
          'Extended entertainment',
          'Flexible timing options',
          'Professional support'
        ]
      }
    ],
    image: '/images/magnet-photobooth.jpg',
    slug: 'magnet-photobooth',
    compatibleAddons: ['luxury-metallic-paper', 'luxury-pearl-paper'],
    popular: false
  },

  keychainPhotobooth: {
    id: 'keychain-photobooth',
    title: 'Key Chain Photobooth',
    shortTitle: 'Keychain Booth',
    description: 'Portable memories! Create custom photo keychains that guests can carry with them everywhere.',
    longDescription: 'Turn your favorite moments into portable keepsakes with our Keychain Photobooth! Each photo is transformed into a durable, high-quality keychain that guests can attach to their keys, bags, or backpacks. A unique and practical party favor that travels with your guests.',
    basePrice: 890,
    category: 'specialty',
    features: [
      'Instant Photo Keychains',
      'Durable Acrylic Construction',
      'Custom Shapes Available',
      'Unlimited Keychain Prints',
      'Digital Photo Backup',
      'Professional Setup'
    ],
    packages: [
      {
        name: 'Keychain Package',
        duration: '3 Hours',
        price: 649,
        features: [
          'Unlimited photo keychains',
          'Durable acrylic construction',
          'Multiple keychain shapes',
          'Professional photo quality',
          'Digital backup copies',
          'Fun props included',
          'Professional attendant',
          'Complete setup service'
        ],
        popular: true
      },
      {
        name: 'Premium Keychain',
        duration: '4+ Hours',
        price: 649,
        additionalHourly: 70,
        features: [
          'Everything in Keychain Package',
          'Additional hours at $70 each',
          'Custom keychain shapes',
          'Premium materials option',
          'Event branding available',
          'Extended entertainment',
          'Flexible scheduling',
          'Professional support'
        ]
      }
    ],
    image: '/images/keychain-photobooth.jpg',
    slug: 'keychain-photobooth',
    compatibleAddons: ['luxury-metallic-paper', 'luxury-pearl-paper'],
    popular: false
  },

  sportscardPhotobooth: {
    id: 'sportscard-photobooth',
    title: 'Sportscard Photobooth',
    shortTitle: 'Sportscard Booth',
    description: 'Create custom trading cards featuring your guests! Perfect for sports events and themed parties.',
    longDescription: 'Score big with our Sportscard Photobooth! Transform your guests into trading card stars with custom sports cards featuring their photos, stats, and fun facts. Perfect for sports-themed events, team parties, or anyone who wants to feel like a professional athlete.',
    basePrice: 890,
    category: 'specialty',
    features: [
      'Custom Trading Cards',
      'Professional Sports Templates',
      'Personalized Stats & Info',
      'Multiple Card Designs',
      'Digital Card Collection',
      'Sports Props Included'
    ],
    packages: [
      {
        name: 'Rookie Package',
        duration: '3 Hours',
        price: 699,
        features: [
          'Custom sports trading cards',
          'Professional card templates',
          'Personalized stats and info',
          'Multiple sport designs',
          'Digital card collection',
          'Sports-themed props',
          'Professional attendant',
          'Complete setup service'
        ],
        popular: true
      },
      {
        name: 'All-Star Package',
        duration: '4+ Hours',
        price: 699,
        additionalHourly: 75,
        features: [
          'Everything in Rookie Package',
          'Additional hours at $75 each',
          'Premium card materials',
          'Custom team branding',
          'Multiple card per guest',
          'Extended sports experience',
          'Flexible event timing',
          'Professional support'
        ]
      }
    ],
    image: '/images/sportscard-photobooth.jpg',
    slug: 'sportscard-photobooth',
    compatibleAddons: ['luxury-metallic-paper', 'luxury-pearl-paper'],
    popular: false
  },

  corporatePhotobooth: {
    id: 'corporate-photobooth',
    title: 'Corporate PhotoBooth',
    shortTitle: 'Corporate',
    description: 'Professional branding and networking opportunities with custom corporate photo experiences.',
    longDescription: 'Elevate your corporate events with our Professional Corporate PhotoBooth! Featuring custom branding, professional backgrounds, and networking-friendly formats, this service is perfect for conferences, trade shows, company parties, and team building events.',
    basePrice: 0,
    category: 'corporate',
    features: [
      'Custom Corporate Branding',
      'Professional Backgrounds',
      'Business Card Integration',
      'LinkedIn-Ready Photos',
      'Company Logo Overlay',
      'Networking Features'
    ],
    packages: [
      {
        name: 'Professional Package',
        duration: '4 Hours',
        price: 749,
        features: [
          'Custom corporate branding',
          'Professional backgrounds',
          'Business card integration',
          'LinkedIn-ready photos',
          'Company logo overlay',
          'Networking features',
          'Professional attendant',
          'Complete branding setup'
        ],
        popular: true
      },
      {
        name: 'Executive Package',
        duration: '6+ Hours',
        price: 749,
        additionalHourly: 80,
        features: [
          'Everything in Professional Package',
          'Additional hours at $80 each',
          'Premium branding options',
          'Multiple background choices',
          'Custom print templates',
          'Extended networking time',
          'Flexible event scheduling',
          'Dedicated support team'
        ]
      }
    ],
    image: '/images/corporate-photobooth.jpg',
    slug: 'corporate-photobooth',
    compatibleAddons: ['luxury-metallic-paper', 'luxury-pearl-paper', '5x7-prints'],
    popular: true
  },

  brandActivations: {
    id: 'brand-activations',
    title: 'Brand Activations',
    shortTitle: 'Brand Activations',
    description: 'Custom branded experiences that amplify your brand message and create shareable social content.',
    longDescription: 'Transform your brand activation with our custom Brand Activation PhotoBooth! Designed for marketing events, product launches, and brand experiences, this service creates Instagram-worthy content that amplifies your brand message and engages your target audience.',
    basePrice: 0,
    category: 'marketing',
    features: [
      'Full Brand Customization',
      'Social Media Integration',
      'Custom Hashtag Campaigns',
      'Branded Digital Overlays',
      'Real-time Social Sharing',
      'Analytics & Reporting'
    ],
    packages: [
      {
        name: 'Activation Package',
        duration: '4 Hours',
        price: 899,
        features: [
          'Full brand customization',
          'Social media integration',
          'Custom hashtag campaigns',
          'Branded digital overlays',
          'Real-time social sharing',
          'Analytics and reporting',
          'Professional brand specialist',
          'Complete activation setup'
        ],
        popular: true
      },
      {
        name: 'Campaign Package',
        duration: '6+ Hours',
        price: 899,
        additionalHourly: 100,
        features: [
          'Everything in Activation Package',
          'Additional hours at $100 each',
          'Multi-platform integration',
          'Advanced analytics',
          'Custom content creation',
          'Extended campaign support',
          'Flexible activation timing',
          'Dedicated campaign team'
        ]
      }
    ],
    image: '/images/brand-activations-photobooth.jpg',
    slug: 'brand-activations',
    compatibleAddons: ['luxury-metallic-paper', 'luxury-pearl-paper', '5x7-prints'],
    popular: true
  },

  mirrorBooth: {
    id: 'mirror-booth',
    title: 'Mirror Photo Booth',
    shortTitle: 'Mirror Booth',
    description: 'Interactive touchscreen mirror with digital props, animations, and instant social sharing.',
    longDescription: 'Experience the magic of our Interactive Mirror Photo Booth! This full-length touchscreen mirror engages guests with animations, digital props, and voice prompts, creating an unforgettable interactive experience that combines technology with entertainment.',
    basePrice: 599,
    category: 'interactive',
    features: [
      'HD Touchscreen Mirror',
      'Interactive Animations',
      'Digital Props & Filters',
      'Voice Prompts',
      'Instant Social Sharing',
      'Custom Messages'
    ],
    packages: [
      {
        name: 'Mirror Package',
        duration: '3 Hours',
        price: 599,
        features: [
          'Full-length touchscreen mirror',
          'Interactive animations',
          'Digital props and filters',
          'Voice prompts and guidance',
          'Instant social sharing',
          'Custom event messages',
          'Professional attendant',
          'Complete setup service'
        ],
        popular: true
      },
      {
        name: 'Premium Mirror',
        duration: '4+ Hours',
        price: 599,
        additionalHourly: 65,
        features: [
          'Everything in Mirror Package',
          'Additional hours at $65 each',
          'Advanced digital effects',
          'Custom animation sequences',
          'Premium social integration',
          'Extended interactive time',
          'Flexible event timing',
          'Professional support'
        ]
      }
    ],
    image: '/images/mirror-booth-red-carpet.jpg',
    slug: 'mirror-booth',
    compatibleAddons: ['luxury-metallic-paper', 'luxury-pearl-paper', '5x7-prints'],
    popular: true
  },

  booth360: {
    id: '360-photo-booth',
    title: '360° Photo Booth',
    shortTitle: '360° Booth',
    description: 'Create viral-ready 360° videos with slow motion effects and professional lighting.',
    longDescription: 'Go viral with our 360° Photo Booth! This cutting-edge platform creates stunning 360-degree videos with slow-motion effects, professional lighting, and music synchronization. Perfect for creating shareable social media content that will have everyone talking about your event.',
    basePrice: 499,
    category: 'video',
    features: [
      '360° Video Recording',
      'Slow Motion Effects',
      'Professional LED Lighting',
      'Music Synchronization',
      'Instant Video Sharing',
      'Multiple Speed Options'
    ],
    packages: [
      {
        name: '360° Package',
        duration: '3 Hours',
        price: 499,
        features: [
          '360-degree video recording',
          'Slow motion effects',
          'Professional LED lighting',
          'Music synchronization',
          'Instant video sharing',
          'Multiple speed options',
          'Professional attendant',
          'Complete platform setup'
        ],
        popular: true
      },
      {
        name: 'Premium 360°',
        duration: '4+ Hours',
        price: 499,
        additionalHourly: 70,
        features: [
          'Everything in 360° Package',
          'Additional hours at $70 each',
          'Advanced lighting effects',
          'Custom music playlists',
          'Premium video quality',
          'Extended video sessions',
          'Flexible event timing',
          'Professional support'
        ]
      }
    ],
    image: '/images/360-video-booth.jpg',
    slug: '360-photo-booth',
    compatibleAddons: ['luxury-metallic-paper', 'luxury-pearl-paper'],
    popular: true
  }
};

// Helper functions
export const getServiceById = (id) => {
  return Object.values(services).find(service => service.id === id);
};

export const getServiceBySlug = (slug) => {
  return Object.values(services).find(service => service.slug === slug);
};

export const getServicesByCategory = (category) => {
  return Object.values(services).filter(service => service.category === category);
};

export const getPopularServices = () => {
  return Object.values(services).filter(service => service.popular);
};

export const getAllServices = () => {
  return Object.values(services);
};

export const getCompatibleAddons = (serviceId) => {
  const service = getServiceById(serviceId);
  if (!service || !service.compatibleAddons) return [];
  
  return service.compatibleAddons.map(addonId => 
    Object.values(addons).find(addon => addon.id === addonId)
  ).filter(Boolean);
};

export const calculateServicePrice = (serviceId, hours = 2, selectedAddons = []) => {
  const service = getServiceById(serviceId);
  if (!service) return 0;

  let basePrice = service.basePrice;
  
  // Calculate additional hours if more than base package
  const baseHours = service.packages[0]?.duration === '2 Hours' ? 2 : 3;
  if (hours > baseHours) {
    const additionalHours = hours - baseHours;
    const hourlyRate = service.packages[1]?.additionalHourly || 50;
    basePrice += additionalHours * hourlyRate;
  }

  // Add addon prices
  const addonPrice = selectedAddons.reduce((total, addonId) => {
    const addon = Object.values(addons).find(a => a.id === addonId);
    return total + (addon ? addon.price : 0);
  }, 0);

  return basePrice + addonPrice;
};

export const getServiceCategories = () => {
  const categories = [...new Set(Object.values(services).map(service => service.category))];
  return categories.map(category => ({
    id: category,
    name: category.charAt(0).toUpperCase() + category.slice(1),
    services: getServicesByCategory(category)
  }));
};

export default {
  services,
  addons,
  getServiceById,
  getServiceBySlug,
  getServicesByCategory,
  getPopularServices,
  getAllServices,
  getCompatibleAddons,
  calculateServicePrice,
  getServiceCategories
};
