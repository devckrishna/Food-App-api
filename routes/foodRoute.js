const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

router
  .route('/')
  .get(foodController.getAllFoodItems)
  .post(foodController.createFoodItems);

module.exports = router;
