const express = require('express');
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');
const { protect } = require('../middleware/authmiddleware');
const { createTryOnSession, getUserTryOnSessions } = require('../controllers/vtonController');
const User = require('../models/User');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Existing route: Upload user photo for VTON
router.post('/upload', protect, upload.single('photo'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      async (error, result) => {
        if (error) return res.status(500).json({ error });
        // Save image URL to user profile
        const user = await User.findByIdAndUpdate(
          req.user._id, // Use req.user._id from protect middleware
          { $push: { tryOnImages: result.secure_url } },
          { new: true }
        );
        res.json({ url: result.secure_url, user });
      }
    );
    result.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// New routes: TryOnSession management
router.post('/', protect, createTryOnSession);       // Create a try-on session
router.get('/', protect, getUserTryOnSessions);     // Get user's try-on sessions

module.exports = router;
