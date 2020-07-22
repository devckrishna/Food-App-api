const Chicken=require("../models/chickenModel");

exports.getAllChicken = async (req, res, next) => {
  try {
    const chickens = await Chicken.find();
    res.status(200).json({
      status: 'success',
      data: {
        chickens,
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

exports.getChickenbyId = async (req, res, next) => {
  try {
    const chickens = await Chicken.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        chickens,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err.message,
    });
  }
};

exports.updateChicken = async (req, res, next) => {
  try {
    const chickens = await Chicken.findByIdAndUpdate(req.params.id, req.body);
    res.send(200).json({
      status: 'success',
      data: {
        chickens,
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

exports.createChicken = async (req, res, next) => {
  try {
    const chickens = await Chicken.create(req.body);

    res.status(201).json({
      status: 'sucess',
      data: {
        chickens,
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
