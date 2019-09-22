const path = require("path");
const express = require("express");
const app = express();


app.set("view engine", "hbs")
app.use( express.static(path.join(__dirname, "../public")) );  //Prendra par défaut l'index.html dans public



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

// app.get("/help", (req, res)=>{
//     res.send({
//         type: "json",
//         version: "1.2.2"
//     });
// });
//
// app.get("/about", (req, res)=>{
//     res.send("<h1>About</h1>");
// });

app.get("/weather", (req, res)=>{
    res.send({
        location: "Granby, Quebec, Canada",
        weather: "Clear sky at 24 degree, no rain"
    });
});

app.listen(3000, ()=> {
   console.log("Server is up on port 3000")
});