const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
