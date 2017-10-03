console.log('Starting notes.js!');

const fs = require('fs');

var fetchNotes = () =>{
	try{
	var noteString = fs.readFileSync('notes-data.json');
	return JSON.parse(noteString);
	}catch(e){
		return [];
	}
}

var saveNotes = (notes) =>{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title,body) =>{
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title); // checks for the duplicate titles
	
	if(duplicateNotes.length === 0){
			notes.push(note);
			saveNotes(notes);
			return note;
	}	
};

var getAll = () =>{
	console.log('Getting all notes!');	
};

var getNote = (title) =>{
	var notes = fetchNotes();
	var gotNotes = notes.filter((note) => note.title === title);
	return gotNotes[0];
}

var removeNote = (title) =>{
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title); // pick the nodes that do not need to be deleted!
	saveNotes(filteredNotes);
	console.log(notes.length);
	console.log(filteredNotes.length);
	return notes.length !== filteredNotes.length;
}

// function to print the note details
var logNote = (note) =>{
		console.log('--');
		console.log(`Title: ${note.title}`);// template strings
		console.log(`Body: ${note.body}`);
}

module.exports ={
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
}
