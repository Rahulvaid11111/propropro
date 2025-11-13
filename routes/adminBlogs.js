const express = require('express');
const { protect, requireEditor } = require('../middleware/auth');
const { 
  validateBlogPost, 
  validateBlogPostUpdate, 
  validateMongoId, 
  validatePagination 
} = require('../middleware/validation');
const {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
  publishBlogPost,
  unpublishBlogPost
} = require('../controllers/blogController');

const router = express.Router();

// All routes are protected and require editor privileges
router.use(protect);
router.use(requireEditor);

// Blog CRUD routes
router.route('/')
  .post(validateBlogPost, createBlogPost)
  .get(validatePagination, getAllBlogPosts);

router.route('/:id')
  .get(validateMongoId, getBlogPostById)
  .put(validateBlogPostUpdate, updateBlogPost)
  .delete(validateMongoId, deleteBlogPost);

// Blog status management
router.put('/:id/publish', validateMongoId, publishBlogPost);
router.put('/:id/unpublish', validateMongoId, unpublishBlogPost);

module.exports = router;
