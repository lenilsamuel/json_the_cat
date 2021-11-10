const request = require("request");
let input = process.argv.slice(2);
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${input}`,
  (error, response, body) => {
    if (error) console.log(error);
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("No such entry exists");
      process.exit();
    }
    console.log(data[0].description);
  }
);
