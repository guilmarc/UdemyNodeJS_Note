const request = require("request");

const apiKey = "76f463f35e04ece8c534ead6585018a0";
const baseUrl =  "https://api.darksky.net/forecast/"

const forecast = ( latitude, longitude, callback ) => {

    const url = baseUrl + apiKey + "/" + latitude + "," + longitude + "?units=si";

    request({ url: url, json : true }, (error, response) => {
        if(error) {
            callback(error.message, undefined)
        } else {
            if( response.body.error ) {
                callback(response.body.error, undefined)
            } else {
                callback(undefined, "It is currently " + response.body.currently.temperature + " There is a " + response.body.currently.precipProbability + "% chance of rain. ")
            }
        }
    });
};

module.exports = forecast;