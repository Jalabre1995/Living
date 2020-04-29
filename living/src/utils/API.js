import axios from 'axios';

///Using Teleport API/////

export default {
    getUsers: function() {
        return axios.get("https://api.teleport.org/api/")
    },
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

        
    },

    ///Detailed Tables 
    getAllCities: function() {

        return axios.get ('pi.census.gov/data/2018/acs/acs1?get=NAME,group(B01001)&for=us:1&key=24928c7723ca0b57b5f1ae01d93d81ea4d28b849')
    }
    
};
