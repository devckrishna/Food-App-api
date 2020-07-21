const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  restaurant: {
    type: String,
    required: [true, 'must provide the name of the restaurant'],
  },
  pizzaSelections: [
    {
      name: {
        type: String,
        required: [true, 'must provide a name'],
      },
      sizes: [
        {
          size: String,
          diameter: Number,
          slicesPerPizza: Number,
          sliceCalories: Number,
        },
      ],
    },
  ],
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
