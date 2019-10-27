// npm module: validator
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Create list notes command
yargs.command({
  command: "list",
  describe: "list existing note",
  //   builder:
  handler() {
    notes.listNotes();
  }
});

// Create command for reading the note
yargs.command({
  command: "read",
  describe: "read a note",
  handler() {
    console.log("Reading a note!");
  }
});

// add,remove,read, list data
// console.log(yargs.argv);
yargs.parse();
