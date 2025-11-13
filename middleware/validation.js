const { body, param, query, validationResult } = require('express-validator');

// Validation error handler
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

// User validation rules
const validateUserRegistration = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('role')
    .optional()
    .isIn(['admin', 'editor'])
    .withMessage('Role must be either admin or editor'),
  handleValidationErrors
];

const validateUserLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  handleValidationErrors
];

// Blog post validation rules
const validateBlogPost = [
  body('title')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Title must be between 1 and 200 characters'),
  body('content')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Content is required'),
  body('featuredImageUrl')
    .custom((value) => {
      if (value.startsWith('http') || value.startsWith('/uploads/')) {
        return true;
      }
      throw new Error('Featured image must be a valid URL or upload path');
    }),
  body('status')
    .optional()
    .isIn(['draft', 'published'])
    .withMessage('Status must be either draft or published'),
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  body('tags.*')
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Each tag must be between 1 and 50 characters'),
  body('excerpt')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Excerpt cannot exceed 500 characters'),
  handleValidationErrors
];

const validateBlogPostUpdate = [
  param('id')
    .isMongoId()
    .withMessage('Invalid blog post ID'),
  body('title')
    .optional()
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Title must be between 1 and 200 characters'),
  body('content')
    .optional()
    .trim()
    .isLength({ min: 1 })
    .withMessage('Content cannot be empty'),
  body('featuredImageUrl')
    .optional()
    .custom((value) => {
      if (!value || value.startsWith('http') || value.startsWith('/uploads/')) {
        return true;
      }
      throw new Error('Featured image must be a valid URL or upload path');
    }),
  body('status')
    .optional()
    .isIn(['draft', 'published'])
    .withMessage('Status must be either draft or published'),
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  body('tags.*')
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Each tag must be between 1 and 50 characters'),
  body('excerpt')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Excerpt cannot exceed 500 characters'),
  handleValidationErrors
];

// Site content validation rules
const validateSiteContent = [
  body('contentKey')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Content key is required'),
  body('contentValue')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Content value is required'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  body('dataType')
    .optional()
    .isIn(['text', 'html', 'url', 'number', 'boolean'])
    .withMessage('Data type must be one of: text, html, url, number, boolean'),
  handleValidationErrors
];

// ID parameter validation
const validateMongoId = [
  param('id')
    .isMongoId()
    .withMessage('Invalid ID format'),
  handleValidationErrors
];

const validateSlug = [
  param('slug')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Slug is required'),
  handleValidationErrors
];

// Query parameter validation
const validatePagination = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  query('sort')
    .optional()
    .isIn(['createdAt', '-createdAt', 'title', '-title', 'updatedAt', '-updatedAt'])
    .withMessage('Invalid sort parameter'),
  handleValidationErrors
];

module.exports = {
  validateUserRegistration,
  validateUserLogin,
  validateBlogPost,
  validateBlogPostUpdate,
  validateSiteContent,
  validateMongoId,
  validateSlug,
  validatePagination,
  handleValidationErrors
};
