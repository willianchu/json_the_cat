const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (!error && response.statusCode === 200 && body !== '[]') {
      const data = JSON.parse(body);
      // console.log(data);
      // console.log(typeof data);
      callback(null, data[0].description);
    } else {
      console.log('Error: Invalid breed name');
      callback(error, 'Error: Invalid breed name'); // error, desc
    }
  });
};

module.exports = { fetchBreedDescription };

