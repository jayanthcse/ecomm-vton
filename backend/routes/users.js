const express = require('express');
const { 
  getProfile, 
  updateProfile, 
  getOrderHistory,
  getAllUsers,
  deleteUser,
  updateUserRole
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authmiddleware'); // Fix casing: authmiddleware → authMiddleware

const router = express.Router();

// User routes
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.get('/orders', protect, getOrderHistory);

// Admin routes
router.get('/', protect, admin, getAllUsers);
router.delete('/:id', protect, admin, deleteUser);
router.put('/:id/role', protect, admin, updateUserRole);

module.exports = router;
