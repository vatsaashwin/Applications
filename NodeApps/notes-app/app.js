// npm module: validator
const validator = require("validator");
const getNotes = require("./notes.js");

const notes = getNotes();
console.log(notes);
// test validator package
console.log(validator.isEmail("aashwinvats@gmailcom"));
console.log(validator.isURL("https:/.com"));
