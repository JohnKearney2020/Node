//====================================================================
//                   Exporting a pure Function
//====================================================================
// not to be confused with exporting an object with a function, covered earlier
var fs = require('fs');
module.exports = fs.readdir(process.argv[2], function(error, listOfFileNames) {
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
