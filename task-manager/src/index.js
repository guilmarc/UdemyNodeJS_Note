const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, ()=> {
   console.log("Server started on port " + port);
});


