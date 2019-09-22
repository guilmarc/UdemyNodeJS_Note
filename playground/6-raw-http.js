const https = require("https")
const http = require("http")


const apiKey = "76f463f35e04ece8c534ead6585018a0";
const baseUrl =  "https://api.darksky.net/forecast/"
const latitude = "40";
const longitude = "-75";

const url = baseUrl + apiKey + "/" + latitude + "," + longitude + "?units=si";

const request = https.request(url, response => {
    let data = "";

    response.on('data', (chunk) => {
        data += chunk.toString();
    })

    response.on('end', () => {
        console.log( JSON.parse(data) );
    })

    response.on('error', error => {
        console.log(("ERROR", error))
    })
});

request.end();