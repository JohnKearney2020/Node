const http = require('http');

const fs = require('fs');

// let fileName = './myString.js';
let fileName = './123.js';
fs.readFile(fileName, (error, buffer) => {
    if(error){
        console.error(error.message);
        return;
    }

    console.log(buffer.toString());
});

// let myServer = http.createServer((req, res) => {
//     //here is where all the code goes
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');

//     res.end('<h1 style="color:red">Hello World</h1>');
// });

// myServer.listen(5000, () => {
//     console.log('listening on 3000');
// });