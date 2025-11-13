require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const { securityHeaders, apiLimiter, authLimiter, uploadLimiter } = require('./middleware/security');

// Import routes
const authRoutes = require('./routes/auth');
const adminBlogRoutes = require('./routes/adminBlogs');
const adminImageRoutes = require('./routes/adminImages');
const adminContentRoutes = require('./routes/adminContent');
const publicRoutes = require('./routes/public');
const sendQuoteRoutes = require('./routes/sendQuote');

// Initialize Express app
const app = express();

// Connect to database
connectDB();

// Security middleware
app.use(securityHeaders);

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Rate limiting
app.use('/api', apiLimiter);
app.use('/api/auth', authLimiter);
app.use('/api/admin/images', uploadLimiter);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin/blogs', adminBlogRoutes);
app.use('/api/admin/images', adminImageRoutes);
app.use('/api/admin/content', adminContentRoutes);
app.use('/api/public', publicRoutes);
app.use('/api', sendQuoteRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API documentation endpoint
app.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Photobooth CMS API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      adminBlogs: '/api/admin/blogs',
      adminImages: '/api/admin/images',
      adminContent: '/api/admin/content',
      public: '/api/public',
      health: '/api/health'
    },
    documentation: 'https://github.com/photobooth-canada/cms-api'
  });
});

// 404 handler for API routes
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Global error handler
app.use(errorHandler);

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  process.exit(0);
});

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
  console.log(`❤️  Health Check: http://localhost:${PORT}/api/health`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Rejection: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
