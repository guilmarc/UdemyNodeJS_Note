const request = require("request");

const url = "https://api.darksky.net/forecast/76f463f35e04ece8c534ead6585018a0/37.8267,-122.4233";

request({ url: url, json : true }, (error, response) => {
    console.log(response.body.currently)
});