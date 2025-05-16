// Dummy payment controller for project/demo use
exports.processDummyPayment = async (req, res) => {
  // You can accept amount, currency, orderId, etc. from req.body if needed
  const { amount, currency = "INR", orderId } = req.body;

  // Simulate payment processing delay
  setTimeout(() => {
    // Simulate a successful payment response
    res.json({
      status: "success",
      message: "Payment processed successfully (DUMMY)",
      paymentId: "DUMMY_" + Date.now(),
      orderId,
      amount,
      currency,
      timestamp: new Date()
    });
  }, 1000); // 1 second delay to mimic real processing
};
