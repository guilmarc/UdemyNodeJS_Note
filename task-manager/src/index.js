const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

require("./db/mongoose");

const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=> {
   console.log("Server started on port " + port);
});


const bcrypt = require("bcryptjs")


const myFunction = async () => {
   const password = "Red12345!"
   const hashedPassword = await bcrypt.hash(password, 8)

   console.log(hashedPassword)

   const isMatch = await bcrypt.compare("Red12345!", hashedPassword)
   console.log(isMatch)
}

myFunction()