const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Food = require('../models/food');
const Pizza = require('../models/pizzaModel');
const Chicken=require("../models/chickenModel");

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection succesfull'));

const chickens = JSON.parse(fs.readFileSync(`${__dirname}/chicken.json`, `utf-8`));

const importData = async () => {
  try {
    // await Food.create(foods);
    await Chicken.create(chickens);
    console.log('Data successfull leaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    // await Food.deleteMany();
    await Chicken.deleteMany();

    console.log('Data deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
