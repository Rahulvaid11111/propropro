const express = require('express');
const { protect, requireEditor, requireAdmin } = require('../middleware/auth');
const { validateSiteContent } = require('../middleware/validation');
const {
  getAllContent,
  upsertContent,
  getContentByKey,
  deleteContent,
  bulkUpdateContent
} = require('../controllers/contentController');

const router = express.Router();

// All routes are protected and require editor privileges
router.use(protect);
router.use(requireEditor);

// Content management routes
router.route('/')
  .get(getAllContent)
  .put(validateSiteContent, upsertContent);

// Bulk update route
router.put('/bulk', bulkUpdateContent);

// Single content routes
router.get('/:key', getContentByKey);

// Delete content (admin only)
router.delete('/:key', requireAdmin, deleteContent);

module.exports = router;
