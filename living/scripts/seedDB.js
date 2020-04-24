const mongoose = require('mongoose');
const db = require('../models');

///This file will empty the city collection and insert the cities below

mongoose.connect(
    process.env.MONGOD_URI || 
    'mongodb://localhost/livingapp'
);

const citySeed = [
    {
        
    }
]