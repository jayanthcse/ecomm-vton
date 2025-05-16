const Order = require('../models/Order');

// Place order
exports.placeOrder = async (req, res) => {
  const { user, products, total } = req.body;
  const order = new Order({ user, products, total });
  await order.save();
  res.status(201).json(order);
};

// Get user orders
exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.params.userId }).populate('products.product');
  res.json(orders);
};

// Get all orders (admin)
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('products.product');
  res.json(orders);
};
