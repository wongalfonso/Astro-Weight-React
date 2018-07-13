const express = require('expres');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));

module.exports = app;