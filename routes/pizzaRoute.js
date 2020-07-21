const express = require('express');
const pizzaController = require('../controllers/pizzaController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    pizzaController.getAllPizzas
  )
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    pizzaController.createPizza
  );

router
  .route('/:id')
  .get(pizzaController.getPizzabyId)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    pizzaController.updatePizza
  )
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    pizzaController.createPizza
  );

module.exports = router;
