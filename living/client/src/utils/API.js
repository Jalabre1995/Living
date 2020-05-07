import axios from 'axios';

///Using Teleport API/////

export default {
    getUsers: function() {
        return axios.get("https://api.teleport.org/api/")
    },
    ///Get all cities
    getCities: function() {
        return axios.get('https://api.teleport.org/api/urban_areas/');
    },
    getNewYork: function() {
        return axios.get('https://api.teleport.org/api/urban_areas/slug:new-york/scores/')
    },
    ///Save a city to the database////
    saveCity: function(cityData) {
        return axios.post('/api/city', cityData);

        
    },
    
};
