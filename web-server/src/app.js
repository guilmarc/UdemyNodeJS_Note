const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

app.set("view engine", "hbs");
app.use( express.static(path.join(__dirname, "../public")) );      //Prendra par défaut l'index.html dans public
app.set("views", path.join(__dirname, "../templates/views") ); //Configurer le path du répertoire templates pour les HTML
hbs.registerPartials(path.join(__dirname, "../templates/partials") );

app.get("/", (req, res)=>{

    res.render( "index", {
        title: "Weather App",
        name: "Marco Guilmette"
    });
});

app.get("/about", (req, res)=>{
    res.render( "about", {
        title: "About me",
        name: "Marco Guilmette"
    });
});

app.get("/help", (req, res)=>{
    res.render( "help", {
        title: "Help",
        message : "This is where you will receive help from us",
        name: "Marco Guilmette"
    });
});

app.get("/weather", (req, res)=>{

    if(!req.query.address) {
        return res.send({
           error : "You must provide an address"
        });
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {  // ={}  --> Valeur par défaut

        if(error) return console.log(error)

        forecast( latitude, longitude, (error, response) => {

            if(error) return console.log(error)

            res.json({
                forecast : response,
                location : location,
                address  : req.query.address
            });
        });

    });

});

app.get("/help/*", (req, res)=>{
    res.render( "error", {
        title: "404 Error",
        message : "Help article not found"
    });
});

app.get("*", (req, res)=>{
    res.render( "error", {
        title: "404 Error",
        message : "Page not found"
    });
});

app.listen(3000, ()=> {
   console.log("Server is up on port 3000")
});