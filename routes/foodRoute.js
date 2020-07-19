const express = require('express');
const foodController = require('../controllers/foodController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, foodController.getAllFoodItems)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    foodController.createFoodItems
  );

router
  .route('/:id')
  .get(foodController.getFoodItemById)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    foodController.deleteFoodItem
  )
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    foodController.updateFoodItem
  );

module.exports = router;
