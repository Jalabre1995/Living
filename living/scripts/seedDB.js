const mongoose = require('mongoose');
const db = require('../models/city.js');
//This file empties the Cities collection and inserts the cities below

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/citylist' 
    
);

const citySeed = [
    {
        costofLiving: '',
        housing: '',
        startUps: '',
        ventrueCapital: '',
        travelConnectivity: '',
        commute: '',
        businessFreedom: '',
        safety: '',
        healthCare:'',
        education: '',
        enviormentalQuality: '',
        economy: '',
        iternetAccess: '',

    }
];

db.citySeed
.remove({})
.then(() => db.City.collection.insertMany(citySeed))
.then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1)
});

