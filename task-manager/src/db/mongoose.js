
const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager-api";
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

mongoose.connect(connectionURL + "/" + databaseName, options)

// const User = mongoose.model("User", {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// });
//
// const newUser = new User({name: "Marco", age: 41});
//
// newUser.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error.message)
// })


const Tasks = mongoose.model("tasks", {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const newTask = new Tasks({ description: "Laundry", completed: false });

newTask.save().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error.message)
})