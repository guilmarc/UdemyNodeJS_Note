require("../src/db/mongoose");
const User = require("../src/models/user")

//5d8e421f13b1d372d2d4d5aa

// User.findByIdAndUpdate("5d8e421f13b1d372d2d4d5aa", {age: 42})
// .then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:42})
//
// }).then((result)=>{
//     console.log(result)
// }).catch(error => console.log(error))


//Avec async await

const updateAgeAndCount = async (id, age)=>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount("5d8e421f13b1d372d2d4d5aa",42).then( (count) =>{
    console.log(count)
});
