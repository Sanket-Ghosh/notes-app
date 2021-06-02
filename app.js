console.log('running');

const yargs = require('yargs');
const argv = yargs.argv;
const notes = require('./notes.js')


var title = yargs.argv.title;
var body = yargs.argv.body;
var cmnd = yargs.argv._[0];

if(cmnd === "add"){
    console.log('adding note')
    notes.addingnote(title,body)
}
else if(cmnd === "remove"){
    console.log('removing note')
    notes.removenote(title)
}
else if(cmnd === "read"){
    console.log('reading note')
    notes.readnote(title)
}
else if(cmnd === "list"){
    console.log('listing note')
    notes.listnote()
}
else{
    console.log("Unknown Command")
}