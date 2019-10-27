const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  // Load the notes
  const notes = loadNotes();
  // handle duplicates
  // const duplicateNotes = notes.filter(note => note.title === title);
  // for early stopping:
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    // push method on arrays: push an object
    // change the notes
    notes.push({
      // title property whose value comes from title arg
      title: title,
      body: body
    });
    // save the notes
    saveNotes(notes);
    console.log(chalk.green.inverse.bold("New note added!"));
  } else {
    console.log(chalk.red.inverse.bold("Note title taken!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const keepNotes = notes.filter(note => note.title !== title);

  if (keepNotes.length !== notes.length) {
    saveNotes(keepNotes);
    console.log(chalk.green.inverse.bold("Note removed!"));
  } else {
    console.log(chalk.red.inverse.bold("No note found!"));
  }
};

const listNotes = () => {
  console.log(chalk.yellow.bold.inverse("Your notes: "));
  const notes = loadNotes();
  notes.forEach(note => console.log(note.title));
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const readNotes = title => {
  console.log(chalk.cyan.inverse.bold("Reading notes..."));

  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(chalk.yellow.bold(noteToRead.title));
    console.log(chalk.yellow(noteToRead.body));
  } else {
    console.log(chalk.red("No note found!"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
