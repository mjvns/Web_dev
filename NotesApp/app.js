const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

var title_specifications = {
	describe: 'title of Note',
	demand: true,
	alias: 't'
};
var body_specifications = {
	describe: 'body of Note',
	demand: true,
	alias: 'b'
};
const argv = yargs.
			 command('add', 'Add a new Note', {
				 title:title_specifications,
				 body:body_specifications
			 }).
			 command('remove', 'Remove a Note', {
				 title:title_specifications
			 }).
			 command('list', 'list all the Notes').
			 command('read', 'read a specific Note',{
				 title:title_specifications
			 }).
			 help().
			 argv;

var command = process.argv[2];

if(command === 'add'){
	var note = notes.addNote(argv.title,argv.body);
	if (note){
		console.log('Note created:');
		notes.logNote(note);
	}else{
		console.log('Note title already exists!');
	}	
}else if(command === 'list'){
	var listedNotes = notes.getAll();
	console.log(`Printing ${listedNotes.length} note(s):`);
	listedNotes.forEach((note) => notes.logNote(note));// iterates through each element in the list.
}else if(command === 'read'){
	var note = notes.getNote(argv.title);
	if (note){
		console.log('Note found:');
		notes.logNote(note);
	}else{
		console.log('Note not found!');
	}	
}else if(command === 'remove'){
	var isRemoved = notes.removeNote(argv.title);
	if(isRemoved){
		console.log(`Title: ${argv.title} removed successfully!`);
	}else{
		console.log(`Title: ${argv.title} could not be removed`);
	}
}else{
	console.log('command not recognised!');
}