const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday"
// };

// // JSON object gives us JSON string
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);
// Read the file and get binary data
const dataBuffer = fs.readFileSync("1-json.json");
// Convert that binary data into standard string in JS
const dataJSON = dataBuffer.toString();
// Parsed the string into JSON object
const data = JSON.parse(dataJSON);
// Accessed a property from it
console.log(data.title);
