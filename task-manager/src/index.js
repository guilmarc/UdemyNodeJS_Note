const express = require("express");


const app = express();
const port = process.env.PORT || 3001;

require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");




const multer  = require('multer')
const upload = multer({
   dest: "images",
   limits: {
      fileSize: 1000000       //Limiter à +- 1 megs
   },
   fileFilter(req, file, callback) {
      if(!file.originalname.match(/\.(doc|docx)$/)){
         return callback(new Error("Please upload a Word document"))
      }

      callback(undefined, true)
   }
});

app.post("/upload", upload.single("upload"), (req, res) => {
   res.send()
});





app.use(express.json());
app.use(userRouter);
app.use(taskRouter);



app.listen(port, ()=> {
   console.log("Server started on port " + port);
});


