const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

// Get dashboard summary stats
exports.getDashboardStats = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const productCount = await Product.countDocuments();
    const orderCount = await Order.countDocuments();
    const totalSales = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$total" } } }
    ]);
    res.json({
      users: userCount,
      products: productCount,
      orders: orderCount,
      totalSales: totalSales[0] ? totalSales[0].total : 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all users (already in userController, but you can use here too)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
