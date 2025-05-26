const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{
    foodItem: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
    quantity: { type: Number, required: true } // persons
  }],
  deliveryTime: { type: Date, required: true },
  deliveryAddress: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
