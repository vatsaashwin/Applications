const fs = require("fs");

// Challenge
// Load the data
const loadData = fs.readFileSync("1-json.json");
// converting data into string
const dataJSON = loadData.toString();
// Parsing data into JSON object
const dataParsed = JSON.parse(dataJSON);

dataParsed.name = "Aashwin";
dataParsed.age = "26";

// here we stringify the json object
const name = JSON.stringify(dataParsed);
fs.writeFileSync("1-json.json", name);
