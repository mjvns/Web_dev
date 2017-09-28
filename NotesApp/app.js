console.log('Starting app.js!');

const fs = require('fs');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);
