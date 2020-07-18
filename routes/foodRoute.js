const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

router
  .route('/')
  .get(foodController.getAllFoodItems)
  .post(foodController.createFoodItems);

router
  .route('/:id')
  .get(foodController.getFoodItemById)
  .delete(foodController.deleteFoodItem)
  .post(foodController.updateFoodItem);

module.exports = router;
