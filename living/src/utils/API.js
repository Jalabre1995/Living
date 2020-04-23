import axios from 'axios';

///Using Teleport API/////

export default {
    ///Get all cities
    getCities: function() {
        return axios.get('/api/cities/');
    },
    ///Gets the city with the given id
    getCity: function(id) {
        return axios.get('/api/cities/{city_id}/')
    },
    ///Deletes the book with the given id
    deleteCity: function(id) {
        return axios.delete('/api/cities/' + id);
    },
    ///Save a city to the database////
    saveCity: function(cityData) {
        return axios.post('/api/city', cityData);
    }
};
