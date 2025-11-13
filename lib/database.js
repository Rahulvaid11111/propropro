// Simple JSON-based database for content management
// In production, replace with a proper database like MongoDB or PostgreSQL

import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'content.json');

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Default content structure
const defaultContent = {
  homepage: {
    heroTitle: 'Capture Unforgettable',
    heroSubtitle: 'Moments in GTA',
    heroDescription: 'Premium photo booth experiences for weddings, corporate events, and celebrations',
    welcomeMessage: '🎉 Welcome to Photobooth Canada! 🎉',
    welcomeTagline: '"Where Every Click Creates a Memory"',
    openAirImage: '/images/open-air-photobooth-enclosure.jpg',
    mirrorImage: '/images/mirror-booth-red-carpet.jpg',
    video360Image: '/images/360-video-booth.jpg'
  },
  services: {
    openAir: {
      title: 'Open Air Classic Photo Booth',
      description: 'Ultimate customization with backdrops, props, and unlimited prints',
      features: ['Unlimited 4×6 Prints', 'Digital Photos', 'On-Site Attendant'],
      basePrice: 478
    },
    mirror: {
      title: 'Mirror Photo Booth',
      description: 'HD touchscreen mirror with emojis, stickers, and virtual props',
      features: ['HD Touch Screen', 'Emojis & Stickers', 'Virtual Props'],
      basePrice: 599
    },
    video360: {
      title: '360 Video Booth',
      description: 'TikTok-ready 360° videos with slow-mo and disco lights',
      features: ['TikTok Ready', 'Disco Lights', 'Bubble Gun'],
      basePrice: 499
    }
  },
  company: {
    name: 'Photobooth Canada',
    tagline: 'Creating unforgettable memories across Canada',
    phone: '1-800-PHOTOBOOTH',
    email: 'info@photoboothcanada.com',
    address: 'Serving all major cities across Canada'
  },
  seo: {
    defaultTitle: 'Photobooth Canada - Premium Photo Booth Rentals',
    defaultDescription: 'Professional photo booth rentals across Canada. Open Air, Mirror, and 360 booths for weddings, corporate events, and parties.',
    keywords: 'photo booth rental, wedding photo booth, corporate events, party rental, GTA photo booth'
  }
};

// Initialize database with default content if it doesn't exist
const initializeDB = () => {
  ensureDataDir();
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(defaultContent, null, 2));
  }
};

// Read content from database
export const getContent = () => {
  try {
    initializeDB();
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading content:', error);
    return defaultContent;
  }
};

// Update content in database
export const updateContent = (updates) => {
  try {
    const currentContent = getContent();
    const updatedContent = { ...currentContent, ...updates };
    
    ensureDataDir();
    fs.writeFileSync(DB_PATH, JSON.stringify(updatedContent, null, 2));
    
    return updatedContent;
  } catch (error) {
    console.error('Error updating content:', error);
    throw new Error('Failed to update content');
  }
};

// Update specific section
export const updateSection = (section, data) => {
  try {
    const currentContent = getContent();
    currentContent[section] = { ...currentContent[section], ...data };
    
    ensureDataDir();
    fs.writeFileSync(DB_PATH, JSON.stringify(currentContent, null, 2));
    
    return currentContent;
  } catch (error) {
    console.error('Error updating section:', error);
    throw new Error('Failed to update section');
  }
};

// Reset to default content
export const resetContent = () => {
  try {
    ensureDataDir();
    fs.writeFileSync(DB_PATH, JSON.stringify(defaultContent, null, 2));
    return defaultContent;
  } catch (error) {
    console.error('Error resetting content:', error);
    throw new Error('Failed to reset content');
  }
};
