//the fs, or File System module, The File System module provides a way of working with the computer's file system.
//The syntax for including the File System module in your application:

//====================================================================
//                      Deleting a File
//====================================================================
// var fs = require('fs');
// //*NOTE* The ./ is important. The . assumes the folder of the current file. If we ommit it, we have to put in the whole entire path to the file, which is long
// //the '.txt' is important, otherwise it will say file not found
// fs.unlink('./tmp/hello.txt', (err) => {
// 	//unlink deletes a file
// 	if (err) throw err;
// 	console.log('successfully deleted /tmp/hello');
// });

//====================================================================
//                           Read a File
//====================================================================
//fs.readFile() reads the contents of a file
// var fs = require('fs');
// fs.readFile('./tmp/fileToRead.txt', function(error, buffer) {
// 	if (error) {
// 		console.error(error.message);
// 		return;
// 	}
// 	console.log('File Data: ', buffer.toString());
// });

//====================================================================
//                           Write Data to a File
//====================================================================
//*NOTE* this will overwrite any existing data in the file
//*NOTE* if the file does not exist, it will create it if possible
// var fs = require('fs');
// fs.writeFile('./tmp/fileToWrite.txt', 'I love Node again', function(error) {
// 	if (error) {
// 		console.error(error.message);
// 		return;
// 	}
// 	console.log('File Save: ', 'fileToWrite.txt');
// });

//==============================================================================================================
//                           Read, then Write Data / Preserve Original Data
//==============================================================================================================
//this will read the data out of a .txt file, save it into a variable, and then write the original data plus new data into the file.
//in other words all the original data is preserved
// var fs = require('fs');
// fs.readFile('./tmp/fileToReadAndWrite.txt', function(error, buffer) {
// 	if (error) {
// 		console.error(error.message);
// 		return;
// 	}
// 	var originalContents = buffer.toString(); //pull the contents from the file and store them here
// 	// var backwards = contents.split('').reverse().join('');
// 	fs.writeFile(
// 		'./tmp/fileToReadAndWrite.txt',
// 		`${originalContents}\nabove is your old data preserved and this line is new`, //this places the original data back in and then the new data on a new line below the original.
// 		function(error) {
// 			if (error) {
// 				console.error(error.message);
// 				return;
// 			}
// 			console.log('File Save: ', 'fileToReadAndWrite.txt');
// 		}
// 	);
// });

//==============================================================================================================
//                                                Readline
//==============================================================================================================
//The Readline module provides a way of reading a datastream, one line at a time.
// var readline = require('readline');

// var rl = readline.createInterface({
// 	input: process.stdin, //standard input thru console via keyboard
// 	output: process.stdout //standard output through keyboard
// });
// rl.question("How's it going? ", function(answer) {
// 	//whatever we answer gets fed into the function as a parameter
// 	console.log('Awesomesauce:', answer);
// 	rl.close();
// });
