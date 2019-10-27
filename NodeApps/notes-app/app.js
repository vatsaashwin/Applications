// npm module: validator
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Customise yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  descibe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Body of note",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function() {
    console.log("Removing a note!");
  }
});

// Create list notes command
yargs.command({
  command: "list",
  describe: "list existing note",
  //   builder:
  handler: function() {
    console.log("Listing out all notes!");
  }
});

// Create command for reading the note
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function() {
    console.log("Reading a note!");
  }
});

// add,remove,read, list data
// console.log(yargs.argv);
yargs.parse();
