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
