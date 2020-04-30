const router= require('express').Router();
const cityController = require ('../../controllers/citiesController');

//Matches with '/api/cities'
router.route('/')
.get(cityController.findAll)
.post(cityController.create);

//Matches with '/api/city/:id
router
.route('/:id')
.get(cityController.findById)
.put(cityController.update)
.delete(cityController.remove);

module.exports = router; 