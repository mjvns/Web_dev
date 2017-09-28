console.log('Starting app.js!');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command:',command);

if(command === 'add'){
	console.log('adding new list!');
}else if(command === 'list'){
	console.log('Listing items in the note!');
}else if(command === 'read'){
	console.log('Fetching the node!');
}else if(command === 'remove'){
	console.log('removing the node!');
}else{
	console.log('command not recognised!');
}