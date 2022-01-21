const request = require('request');

const args = process.argv.slice(2);

const catJson = request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, function(error, response, body) {
  if (!error && response.statusCode === 200 && body !== '[]') {
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    console.log(data[0].name);
    console.log(data[0].description);
  } else {
    console.log('Sorry, no cat found.');
  }
});



console.log("the end of program");

