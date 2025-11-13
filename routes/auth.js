const express = require('express');
const { protect, requireAdmin } = require('../middleware/auth');
const { validateUserLogin, validateUserRegistration } = require('../middleware/validation');
const { login, register, getProfile, updateProfile } = require('../controllers/authController');

const router = express.Router();

// Public routes
router.post('/login', validateUserLogin, login);

// Protected routes
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

// Admin only routes
router.post('/register', protect, requireAdmin, validateUserRegistration, register);

module.exports = router;
