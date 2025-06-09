const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  availableDay: { 
    type: String, 
    required: true,
  }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
