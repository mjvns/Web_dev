console.log('Starting notes.js!');

var addNote = (title,body) =>{
	console.log('adding Node:',title,body);
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
