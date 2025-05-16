const express = require('express');
const { processDummyPayment } = require('../controllers/paymentController');
const { protect } = require('../middleware/authmiddleware');

const router = express.Router();

// Dummy payment endpoint
router.post('/dummy', protect, processDummyPayment);

module.exports = router;
