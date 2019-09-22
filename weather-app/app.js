const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");


(() => {

    if(!process.argv[2]) return console.log("No city passed in command line parameter")

    geocode(process.argv[2], (error, response) => {

        if(error) return console.log(error)

        forecast( response.latitude, response.longitude, (error, forecastResponse) => {

            if(error) return console.log(error)

            console.log(response.location)
            console.log(forecastResponse)
        });

    });

})();