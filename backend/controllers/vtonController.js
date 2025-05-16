const TryOnSession = require('../models/TryOnSession');

// Create a new try-on session
exports.createTryOnSession = async (req, res) => {
  try {
    const { productId, originalImage, tryOnImage } = req.body;
    const session = new TryOnSession({
      user: req.user._id,
      product: productId,
      originalImage,
      tryOnImage
    });
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all try-on sessions for the logged-in user
exports.getUserTryOnSessions = async (req, res) => {
  try {
    const sessions = await TryOnSession.find({ user: req.user._id }).populate('product');
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
