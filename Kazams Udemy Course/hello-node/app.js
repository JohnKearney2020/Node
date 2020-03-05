const http = require('http');
const PORT = 4000;
const fs = require('fs');

// *THIS IS DEFAULT NODE* not express.

const server = http.createServer((req, res) => {
    // res.statusCode = 200; //ok request
    // res.setHeader('Content-Type', 'text/plain'); //this sets the response to be of type text/plain
    // res.end('Hello world!');
    switch(req.url) {
        case '/': //first route
            fs.readFile('./index.html', (error, data) => { // './' means the file is in the same root folder
                res.statusCode = 200; //ok request
                res.setHeader('Content-Type', 'text/html'); //this sets the response to be of type text/plain
                res.end(data);
            }); 
            break; //break is needed because we have already done res.end and res.setheader. If we try to do it again below it will throw an error
            
            case '/hello': //second route
            fs.readFile('./hello.html', (error, data) => { // './' means the file is in the same root folder
                res.statusCode = 200; //ok request
                res.setHeader('Content-Type', 'text/html'); //this sets the response to be of type text/plain
                res.end(data);
            }); 
            break;

            default: //this will handle any bad requests, like routes that don't exist
                res.statusCode = 404; //bad request
                res.setHeader('Content-Type', 'text/html'); //this sets the response to be of type text/plain
                res.end('Not found!');

    }
})

server.listen(PORT, () => { //this will start our server
    console.log('Server is running...');
})