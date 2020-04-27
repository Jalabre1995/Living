const mongoose = require('mongoose');
const db = require('../models/city.js');
//This file empties the Cities collection and inserts the cities below

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/citylist'
);

