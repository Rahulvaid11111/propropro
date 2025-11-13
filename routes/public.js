const express = require('express');
const { validateSlug, validatePagination } = require('../middleware/validation');
const {
  getPublishedBlogs,
  getBlogBySlug,
  getPublicContent,
  getContentByKey,
  getBlogTags,
  getRecentBlogs
} = require('../controllers/publicController');

const router = express.Router();

// Blog routes
router.get('/blogs', validatePagination, getPublishedBlogs);
router.get('/blogs/recent', getRecentBlogs);
router.get('/blogs/tags', getBlogTags);
router.get('/blogs/:slug', validateSlug, getBlogBySlug);

// Content routes
router.get('/content', getPublicContent);
router.get('/content/:key', getContentByKey);

module.exports = router;
