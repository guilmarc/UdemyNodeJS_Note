const fs = require("fs")

const book = {
    title: "Ego is the enemy",
    author: "Ryan Holiday"
}

var json = JSON.stringify(book);
fs.writeFileSync("1-json.json", json)

//Get json string from file again
json = fs.readFileSync("1-json.json").toString();
const data = JSON.parse(json);
console.log(data.title)
