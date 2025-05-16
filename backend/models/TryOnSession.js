// models/TryOnSession.js
const mongoose = require('mongoose');
const tryOnSessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  originalImage: String, // User's uploaded photo
  tryOnImage: String,    // AI-generated try-on image
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('TryOnSession', tryOnSessionSchema);
