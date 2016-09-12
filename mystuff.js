const fs = require('fs');
const vm = require('vm');
const path = require('path');

var BASE = path.join(process.env.HOME, 'own_modules');

if(!fs.existsSync(BASE)) {
	console.log('You have no own stuff!');
	console.log(`Copy your own modules to "${BASE}"`);
	fs.mkdirSync(BASE);
}
	
module.exports = mystuff;

function mystuff(stuffname) {

    var p = path.join(BASE, stuffname);
    if(!path.extname(stuffname)) { //not a filename
        if(fs.existsSync(p + path.parse(p).ext? '' : '.js') { //test if file
            p += '.js';
        } else if(fs.existsSync(path.join(p, 'main.js'))) { //find index-file
            p = path.join(p, 'main.js');
        } else if(fs.existsSync(path.join(p, stuffname + '.js'))) { //find index-file 2nd attemp
            p = path.join(p, stuffname + '.js');
        }
    }
    return require(p);
}

mystuff.cd = cd;

function cd(p) {
	BASE = path.join(p, 'own_modules');
}

