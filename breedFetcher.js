const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      const data = JSON.parse(body);
      const desc = data[0];
      if (!desc) callback('Not a valid request', null);
      else callback(error, desc.description);     
    }
  );
};

module.exports = { fetchBreedDescription };

