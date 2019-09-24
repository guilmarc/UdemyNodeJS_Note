document.addEventListener("DOMContentLoaded", function(event) {

    // document.getElementById("button").addEventListener(  "click", () => {
    //
    //     const address = document.getElementById("input").textContent.
    //
    //     console.log("Address" + address)
    //
    //
    // } );



    const form = document.querySelector("form")
    form.addEventListener("submit", (event)=>{


        const locationP = document.getElementById("location")
        const forecastP = document.getElementById("forecast")

        locationP.textContent = "Loading..."
        forecastP.textContent = ""

        event.preventDefault() // Empêche de rafraîchir la page à chaque fois.

        const address = document.querySelector("input").value

        const url = "http://localhost:3000/weather?address=" + address;

        fetch(url)
            .then(response => {
                response.json().then( data => {

                    if(data.error) {
                        locationP.textContent = "ERROR";
                        forecastP.textContent = data.error;
                        return
                    }

                    locationP.textContent = data.location;
                    forecastP.textContent = data.forecast;

                } ) ;
            })
            .catch( error => {
                locationP.textContent = "ERROR";
                forecastP.textContent = error;
            });
    })
});


