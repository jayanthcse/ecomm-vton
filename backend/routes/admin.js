const express = require('express');
const { getDashboardStats, getAllUsers, getAllProducts, getAllOrders } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authmiddleware');

const router = express.Router();

// Dashboard summary
router.get('/dashboard', protect, admin, getDashboardStats);

// Users
router.get('/users', protect, admin, getAllUsers);

// Products
router.get('/products', protect, admin, getAllProducts);

// Orders
router.get('/orders', protect, admin, getAllOrders);

module.exports = router;
