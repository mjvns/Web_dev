console.log('Starting notes.js!');

const fs = require('fs');

var addNote = (title,body) =>{
	var notes = [];
	var note = {
		title,
		body
	};
	
	try{
	var noteString = fs.readFileSync('notes-data.json');
	notes = JSON.parse(noteString);
	}catch(e){
		
	}
	
	var duplicateNotes = notes.filter((note) => note.title === title); // checks for the duplicate titles
	
	if(duplicateNotes.length === 0){
			notes.push(note);
			fs.writeFileSync('notes-data.json',JSON.stringify(notes));
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
