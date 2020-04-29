const db = require('../models/city.js');

//Defining methods for the cititesController.js///
module.exports = {
    findAll: function(req, res) {
        db.City
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status.json(err));
    },
    findById: function(req, res) {
        db.City
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.City
        .create(req.body) 
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update:function(req,res) {
        db.City
        .findOneAndUpdate({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.City
        .findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};