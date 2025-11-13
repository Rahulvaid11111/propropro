const express = require('express');
const { protect, requireEditor, requireAdmin } = require('../middleware/auth');
const { uploadSingle, handleUploadError } = require('../middleware/upload');
const {
  uploadImage,
  getAllImages,
  deleteImage,
  getImageInfo
} = require('../controllers/imageController');

const router = express.Router();

// All routes are protected and require editor privileges
router.use(protect);
router.use(requireEditor);

// Image upload route
router.post('/upload', uploadSingle, handleUploadError, uploadImage);

// Image management routes
router.get('/', getAllImages);
// Single content routes
router.get('/:filename', getImageInfo);

// Delete image (admin only)
router.delete('/:filename', requireAdmin, deleteImage);

module.exports = router;
