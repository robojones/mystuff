# mystuff - easier local require
This module makes it easier to organize and require your local modules.
It also gives you the ability to set global variables that you can use in all of your projects.
## Installation
`npm install mystuff`

When you require `mystuff` for the first time it creates a folder named `own_modules` in your users home directory.
In this folder you can store your own modules.
## Own Modules
You can create your modules in two ways: as a single JavaScript file or as a directory.
### File
1. Create a JavaScript file e.g. `example.js` in the `own_modules` folder.
2. Write your Code in the file and set the `module.exports` property.
3. Now you can require this file in all of your projects.
```
const mystuff = require('mystuff');
var example = mystuff('example');
//or
var example = mystuff('example.js');
```
### Directory
1. Create a directory e.g. `anotherExample` in the `own_modules` folder.
2. Add a JavaScript file called `anotherExample.js` or `main.js` in the new directory. They are used as entry-point.
3. Write your code in the JavaScript file and set the `module.exports` property.
4. Now you can require this module in all of your projects.
```
const mystuff = require('mystuff');
const anotherExample = mystuff('anotherExample');
```
__Tip:__ The `main.js` file ist the prefered entry-point.

### cd(path)
Change the directory where your `own_modules` folder is located in.
The change affects the whole node app.
