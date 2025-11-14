// Content Manager for client-side content management
// This is a simple localStorage-based content manager for the admin panel

const ContentManager = {
  // Blog Management
  getBlogs: () => {
    if (typeof window === 'undefined') return [];
    const blogs = localStorage.getItem('blogs');
    return blogs ? JSON.parse(blogs) : [];
  },

  saveBlog: (blog) => {
    if (typeof window === 'undefined') return;
    const blogs = ContentManager.getBlogs();
    const existingIndex = blogs.findIndex(b => b.id === blog.id);
    
    if (existingIndex >= 0) {
      blogs[existingIndex] = blog;
    } else {
      blogs.push(blog);
    }
    
    localStorage.setItem('blogs', JSON.stringify(blogs));
    return blog;
  },

  deleteBlog: (blogId) => {
    if (typeof window === 'undefined') return;
    const blogs = ContentManager.getBlogs();
    const filtered = blogs.filter(b => b.id !== blogId);
    localStorage.setItem('blogs', JSON.stringify(filtered));
  },

  // Content Management
  getContent: (key) => {
    if (typeof window === 'undefined') return null;
    const content = localStorage.getItem(`content_${key}`);
    return content ? JSON.parse(content) : null;
  },

  saveContent: (key, data) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(`content_${key}`, JSON.stringify(data));
  },

  // Settings Management
  getSettings: () => {
    if (typeof window === 'undefined') return {};
    const settings = localStorage.getItem('settings');
    return settings ? JSON.parse(settings) : {};
  },

  saveSettings: (settings) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('settings', JSON.stringify(settings));
  },

  // Images Management
  getImages: () => {
    if (typeof window === 'undefined') return [];
    const images = localStorage.getItem('images');
    return images ? JSON.parse(images) : [];
  },

  saveImage: (image) => {
    if (typeof window === 'undefined') return;
    const images = ContentManager.getImages();
    images.push(image);
    localStorage.setItem('images', JSON.stringify(images));
    return image;
  },

  deleteImage: (imageId) => {
    if (typeof window === 'undefined') return;
    const images = ContentManager.getImages();
    const filtered = images.filter(img => img.id !== imageId);
    localStorage.setItem('images', JSON.stringify(filtered));
  }
};

export default ContentManager;
