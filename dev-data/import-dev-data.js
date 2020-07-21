const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Food = require('../models/food');
const Pizza = require('../models/pizzaModel');

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

const pizzas = JSON.parse(fs.readFileSync(`${__dirname}/pizzas.json`, `utf-8`));

const importData = async () => {
  try {
    // await Food.create(foods);
    await Pizza.create(pizzas);
    console.log('Data successfull leaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    // await Food.deleteMany();
    await Pizza.deleteMany();

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
