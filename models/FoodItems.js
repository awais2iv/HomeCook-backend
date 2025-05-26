const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  serves: { type: Number, required: true },
  availableDay: { 
    type: String, 
    required: true,
    enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
