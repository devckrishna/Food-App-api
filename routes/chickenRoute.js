const express = require('express');
const chickenController = require('../controllers/chickenController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(chickenController.getAllChicken)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    chickenController.createChicken
  );

router
  .route('/:id')
  .get(chickenController.getChickenbyId)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    chickenController.updateChicken
  );

module.exports = router;
