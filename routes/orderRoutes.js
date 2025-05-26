const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create order
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('items.foodItem');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get order by id
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.foodItem');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update order by id
router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete order by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: 'Order not found' });
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
