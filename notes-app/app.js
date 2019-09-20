const notes = require("./notes")
const validator = require("validator")
const yargs = require('yargs')
const message = require("./notes");

//Create Add command line function
yargs.command( {
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note description",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){ notes.add( argv.title, argv.body) }
} );

yargs.command( {
    command: "delete",
    describe: "Delete a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){ notes.del(argv.title) }
} );

yargs.command( {
    command: "list",
    describe: "List all notes",
    handler(){ notes.list() }
} );

yargs.command( {
    command: "read",
    describe: "Read the content of a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){ notes.read(argv.title) }
} );

yargs.parse();

