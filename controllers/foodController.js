const Food = require('../models/food');

exports.getAllFoodItems = async (req, res, next) => {
  try {
    const foods = await Food.find();
    // console.log(foods);

    res.status(200).json({
      status: 'Success',
      data: {
        foods,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err,
    });
  }
  next();
};

exports.createFoodItems = async (req, res, next) => {
  try {
    const foods = await Food.create(req.body);

    res.status(201).json({
      status: 'sucess',
      data: {
        foods,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err,
    });
  }
  next();
};

exports.getFoodItemById = async (req, res, next) => {
  try {
    const foods = await Food.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        foods,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err,
    });
  }
  next();
};

exports.deleteFoodItem = async (req, res, next) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    req.status(204).json({
      status: 'sucess',
      message: 'deleted',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err,
    });
  }
  next();
};

exports.updateFoodItem = async (req, res, next) => {
  try {
    const foods = await Food.findByIdAndUpdate(req.params.id, req.body);
    res.send(200).json({
      status: 'success',
      data: {
        foods,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err,
    });
  }
  next();
};
