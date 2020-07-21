const Pizza = require('../models/pizzaModel');

exports.getAllPizzas = async (req, res, next) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json({
      status: 'success',
      data: {
        pizzas,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'sucess',
      message: 'fail',
    });
  }
  next();
};

exports.getPizzabyId = async (req, res, next) => {
  try {
    const pizzas = await Pizza.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        pizzas,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err.message,
    });
  }
};

exports.updatePizza = async (req, res, next) => {
  try {
    const pizzas = await Pizza.findByIdAndUpdate(req.params.id, req.body);
    res.send(200).json({
      status: 'success',
      data: {
        pizzas,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err.message,
    });
  }
  next();
};

exports.createPizza = async (req, res, next) => {
  try {
    const pizzas = await Pizza.create(req.body);

    res.status(201).json({
      status: 'sucess',
      data: {
        pizzas,
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
