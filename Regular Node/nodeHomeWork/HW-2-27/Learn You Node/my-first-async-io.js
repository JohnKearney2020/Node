//====================================================================
//                           Read a File
//====================================================================
// fs.readFile() reads the contents of a file
var fs = require('fs');
fs.readFile(process.argv[2], function(error, buffer) {
	if (error) {
		console.error(error.message);
		return;
	}
	// console.log('File Data: ', buffer.toString());
	buffer = buffer.toString();
	let newLineArray = buffer.split('\n');
	console.log(newLineArray.length - 1);
});
