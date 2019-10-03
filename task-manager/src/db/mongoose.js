
const mongoose = require("mongoose");
const validator = require("validator");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager-api";
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify : false
};

mongoose.connect(connectionURL + "/" + databaseName, options)


//
// const newUser = new User(
//     {
//         name: "Marco",
//         email:"marco@zoneaudio.com",
//         age: 41}
//     );

// newUser.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error.message)
// })


//
// const newTask = new Tasks({ description: "   Eat lunch     ", completed: false });
//
// newTask.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error.message)
// })