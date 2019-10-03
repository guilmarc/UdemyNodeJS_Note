require("../src/db/mongoose");
const Task = require("../src/models/task.js");

// Task.findByIdAndDelete("5d94f49e1d290e4b71d446b9").then((result)=>{
//     console.log(result)
//     return Task.countDocuments({completed : false})
// }).then(count => {
//         console.log(count)
//
// }).catch(error => console.log(error))


//Avec async await

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete( id )
    const count = await Task.countDocuments({"completed" : false})
    return count
}

deleteTaskAndCount("5d8e43b2315c8373bb6ccf90").then(count =>{
    console.log( count + "  uncompleted tasks" )
})