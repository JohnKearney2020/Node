// process.argv[2]; //directory to search
// process.argv[3]; //file extension to filter
// fs.readFile() reads the contents of a file or directory
var fs = require('fs');
fs.readdir(process.argv[2], function(error, listOfFileNames) {
	// fs.readdir('./', function(error, listOfFileNames) {
	if (error) {
		console.error(error.message);
		return;
	}
	let arrayOfFileExtensions = listOfFileNames.filter((each_string) => {
		return each_string.includes('.' + process.argv[3]);
		// return each_string.includes('.js');
	});
	for (eachValue of arrayOfFileExtensions) {
		console.log(eachValue);
	}
});
