// process.argv[2]; //directory to search
// process.argv[3]; //file extension to filter
// fs.readFile() reads the contents of a file or directory

//====================================================================
//                   Exporting a pure Function
//====================================================================
// not to be confused with exporting an object with a function, covered earlier
var fs = require('fs');
var filteredList = require('./mymodule.js'); //this sets msg equal to the one function we have in the messages.js file
filteredList.listFilter('./', '.js');
