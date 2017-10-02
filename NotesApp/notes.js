console.log('Starting notes.js!');

const fs = require('fs');

var fetchNotes = () =>{
	try{
	var noteString = fs.readFileSync('notes-data.json');
	return JSON.parse(noteString);
	}catch(e){}
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
	console.log(title);
}

var removeNote = (title) =>{
	console.log(title,'note removed successfuly!');
}

module.exports ={
	addNote,
	getAll,
	getNote,
	removeNote
}
