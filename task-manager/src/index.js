const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

require("./db/mongoose");
require("./models/user");
require("./models/task");


app.get("/users", (req, res) => {

});

app.get("/users/%1", (req, res) => {

});

app.post("/users", (req, res) => {
   const user = new User(req.body);

   user.save().then(()=>{
      res.send(user);
   }).catch((error)=>{
      res.status(400).send(error);
   });

});

app.post("/tasks", (req, res) => {
   const task = new Task(req.body);

   task.save().then(()=>{
      res.send(task);
   }).catch((error)=>{
      res.status(400).send(error);
   });

});


app.listen(port, ()=> {
   console.log("Server started on port " + port);
});