const fs = require("fs")
const chalk = require('chalk')

var notes;

const load = () => {
    try {
        const buffer = fs.readFileSync("notes.json")
        const json = buffer.toString()
        return JSON.parse(json)
    }
    catch(e)
    {
        return []
    }

};

const save = (notes) => {
    const json = JSON.stringify(notes);
    fs.writeFileSync( "notes.json", json )
}

const read = (title) => {
    const notes = load();

    const note = notes.find( note => note.title = title);
    if(note !== undefined) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.inverse.red(note.title))
    }
};

const list = () => {
    const notes = load();
    console.log(chalk.inverse("*** My " + notes.length + " notes ***"))
    notes.forEach( note => console.log(note.title + " : " + note.body));
};

const add = (title, body) => {
    const notes = load();

    if( notes.find( note => note.title === title ) ){
        console.log("Error: Note title already exists")
        return
    }

    notes.push({
        "title": title,
        "body": body
    });

    save(notes);
};

const del = (title) => {
    const notes = load();

    if( !notes.find( note  => note.title === title ) ){
        console.log(chalk.red.inverse("Error: Note title not found (" + title + ")"))
        return
    }

    save(notes.filter( note => note.title !== title ));
    console.log(chalk.green.inverse("Note (" + title + ") deleted !"))
};

module.exports = {
    read: read,
    add: add,
    del: del,
    list: list
};