// npm module: validator
const chalk = require("chalk");
const getNotes = require("./notes.js");

const notes = getNotes();
console.log(notes);
// test validator package
// chain things together
console.log(chalk.cyan.inverse.bold("Success!"));
