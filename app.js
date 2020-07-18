const express = require('express');
const morgan = require('morgan');
const foodRoute = require('./routes/foodRoute');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/food', foodRoute);

module.exports = app;
