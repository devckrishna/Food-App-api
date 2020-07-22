const mongoose = require('mongoose');

const chickenSchema = new mongoose.Schema({
  restaurant: {
    type: String,
    required: [true, 'Must provide a restaurnt name'],
  },
  foodItems: [
    {
      foodName: {
        type: String,
        required: [true, 'please enter the food name'],
      },
      foodType: String,
      calories: Number,
      sodium: Number,
      carbs: Number,
    },
  ],
});

const Chicken = mongoose.model('Chicken', chickenSchema);

module.exports = Chicken;
