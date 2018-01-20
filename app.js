const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//modules i created
const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title:titleOptions,
        body: bodyOptions
    })
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = process.argv[2];
// console.log('command', command);
// //console.log('process', process.argv);
// console.log('yargs',argv);

if (command==='add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("note created");
        notes.logNote(note);

    }
    else {
        console.log("DUPLICATE TITLE");
    }
}
else if (command==='list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)` );
    allNotes.forEach((note) => notes.logNote(note));
}
else if (command==='read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log("NOTE READ");
        notes.logNote(note);
    }
    else {
        console.log("NOTE NOT FOUND");
    }
}
else if (command==='remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else{
    console.log("command not recognised");
}
// var filteredArray = _.uniq(['Divya', 1 , 'Divya',2,3,4]);
// console.log(filteredArray);

//console.log('Result:', notes.add(9, -2));

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
