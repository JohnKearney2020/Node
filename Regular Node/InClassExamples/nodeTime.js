const http = require('http');

const fs = require('fs'); // a C++ feature that allows us to acess the file systemm on our computer

let fileContent = 'lorem lorem dag dah';

fs.writeFile('ourFile.txt', fileContent, (error) =>{ //callback function handles any errors in writing to the file
    if(error) {
        console.error(error.message);
        return
    }
    console.log('file was saved: ourFile.txt');
})

// let fileName = './myString.js';
// let fileName = './123.js';
// fs.readFile(fileName, (error, buffer) => {
//     if(error){
//         console.error(error.message);
//         return;
//     }

//     console.log(buffer.toString());
// });

// let myServer = http.createServer((req, res) => {
//     //here is where all the code goes
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');

//     res.end('<h1 style="color:red">Hello World</h1>');
// });

// myServer.listen(5000, () => {
//     console.log('listening on 3000');
// });