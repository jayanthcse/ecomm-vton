const express = require('express');
const {
  placeOrder,
  getUserOrders,
  getAllOrders,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/', protect, placeOrder);
router.get('/user/:userId', protect, getUserOrders);
router.get('/', protect, admin, getAllOrders);

module.exports = router;
