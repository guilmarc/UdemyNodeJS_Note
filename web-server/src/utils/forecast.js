const request = require("request");

const apiKey = "76f463f35e04ece8c534ead6585018a0";
const baseUrl =  "https://api.darksky.net/forecast/"

const forecast = ( latitude, longitude, callback ) => {

    const url = baseUrl + apiKey + "/" + latitude + "," + longitude + "?units=si";

    request({ url: url, json : true }, (error, {body}) => {
        if(error) {
            callback(error.message, undefined)
        } else {
            if( body.error ) {
                callback(body.error, undefined)
            } else {
                callback(undefined, "It is currently " + body.currently.temperature + " There is a " + body.currently.precipProbability + "% chance of rain. ")
            }
        }
    });
};

module.exports = forecast;