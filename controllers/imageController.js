const fs = require('fs');
const path = require('path');

// @desc    Upload single image
// @route   POST /api/admin/images/upload
// @access  Private/Editor
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image file provided'
      });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        imageUrl,
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype
      }
    });

  } catch (error) {
    console.error('Upload image error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error uploading image'
    });
  }
};

// @desc    Get all uploaded images
// @route   GET /api/admin/images
// @access  Private/Editor
const getAllImages = async (req, res) => {
  try {
    const uploadsDir = path.join(__dirname, '../public/uploads');
    
    if (!fs.existsSync(uploadsDir)) {
      return res.status(200).json({
        success: true,
        data: []
      });
    }

    const files = fs.readdirSync(uploadsDir);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    
    const images = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map(file => {
        const filePath = path.join(uploadsDir, file);
        const stats = fs.statSync(filePath);
        
        return {
          filename: file,
          imageUrl: `/uploads/${file}`,
          size: stats.size,
          uploadedAt: stats.birthtime,
          modifiedAt: stats.mtime
        };
      })
      .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));

    res.status(200).json({
      success: true,
      data: images
    });

  } catch (error) {
    console.error('Get all images error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving images'
    });
  }
};

// @desc    Delete image
// @route   DELETE /api/admin/images/:filename
// @access  Private/Admin
const deleteImage = async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '../public/uploads', filename);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }

    // Validate filename to prevent directory traversal
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid filename'
      });
    }

    // Delete the file
    fs.unlinkSync(filePath);

    res.status(200).json({
      success: true,
      message: 'Image deleted successfully'
    });

  } catch (error) {
    console.error('Delete image error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting image'
    });
  }
};

// @desc    Get image info
// @route   GET /api/admin/images/:filename
// @access  Private/Editor
const getImageInfo = async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '../public/uploads', filename);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }

    // Validate filename
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid filename'
      });
    }

    const stats = fs.statSync(filePath);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const ext = path.extname(filename).toLowerCase();

    if (!imageExtensions.includes(ext)) {
      return res.status(400).json({
        success: false,
        message: 'File is not an image'
      });
    }

    res.status(200).json({
      success: true,
      data: {
        filename,
        imageUrl: `/uploads/${filename}`,
        size: stats.size,
        uploadedAt: stats.birthtime,
        modifiedAt: stats.mtime,
        extension: ext
      }
    });

  } catch (error) {
    console.error('Get image info error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving image info'
    });
  }
};

module.exports = {
  uploadImage,
  getAllImages,
  deleteImage,
  getImageInfo
};
