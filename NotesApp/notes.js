const fs = require('fs');

// function to fetch all the notes from the json file
var fetchNotes = () =>{
	try{
	var noteString = fs.readFileSync('notes-data.json');
	return JSON.parse(noteString);
	}catch(e){
		return [];
	}
}

// function to save all the current notes in the json file
var saveNotes = (notes) =>{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

// function to add a desired note
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

// function to list all the saved notes
var getAll = () =>{
	return fetchNotes();
};

// function to get the desired Note
var getNote = (title) =>{
	var notes = fetchNotes();
	var gotNotes = notes.filter((note) => note.title === title);
	return gotNotes[0];
}

// function to remove the notes
var removeNote = (title) =>{
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title); // pick the nodes that do not need to be deleted!
	saveNotes(filteredNotes);
	console.log(notes.length);
	console.log(filteredNotes.length);
	return notes.length !== filteredNotes.length;
}

// function to print the individual note details
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
