const express = require('express');
const morgan = require('morgan');
const foodRoute = require('./routes/foodRoute');
const userRouter=require("./routes/userRoutes");
const pizzaRouter=require("./routes/pizzaRoute");

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/food', foodRoute);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/pizza', pizzaRouter);

module.exports = app;
