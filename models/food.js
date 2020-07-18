const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  restaurant: {
    type: String,
    required: [true, 'Must provide a restraumt name'],
  },
  foodItems: [
    {
      foodName: {
        type: String,
        // required: [true, 'A food item must have a name'],
      },
      calories: {
        type: Number,
        // required: [true, 'A food item must have caloric value'],
      },
      protein: String,
      foodType: String,
      sideItem: Boolean,
      correctedTerm: String,
      carbs: Number,
      ketchupItem: Boolean,
      breakfastItem: Boolean,
      sodium: Number,
    },
  ],
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
