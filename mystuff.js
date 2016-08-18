const fs = require('fs');
const vm = require('vm');
const path = require('path');

const base = path.join(process.env.HOME, 'own_modules');
const myThings = {};

if(!fs.existsSync(base)) {
    console.log('You have no own stuff!');
    console.log('Copy your own modules to', base);
    fs.mkdirSync(base);
}

module.exports = mystuff;

function mystuff(stuffname) {
    var p = path.join(base, stuffname);
    if(!path.extname(stuffname)) { //not a filename
        if(fs.existsSync(p + '.js')) { //test if file
            p += '.js';
        } else if(fs.existsSync(path.join(p, 'main.js'))) { //find index-file
            p = path.join(p, 'main.js');
        } else if(fs.existsSync(path.join(p, stuffname + '.js'))) { //find index-file 2nd attemp
            p = path.join(p, stuffname + '.js');
        }
    }
    return require(p);
}

// global storage:
mystuff.global = glob;

function glob(id, value) {
    if(value) {
        myThings[id] = value;
    } else {
        return myThings[id];
    }
}
