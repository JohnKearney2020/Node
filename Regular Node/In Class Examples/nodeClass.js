const http = require('http'); //requires it out of the c++ library

const server = http.createServer((request, response)=> { //these are objects

    switch(request.url){
        case '/': //if homepage
            response.statusCode = 200; //if sucessful, get a 200 back
            response.setHeader('Content-Type', 'text/plain');
            response.end('Home Page');//the response back to our client
            break;
        case '/aboutUs':
            response.statusCode = 200; //if sucessful, get a 200 back
            response.setHeader('Content-Type', 'text/plain');
            response.end('About Us Page');//the response back to our client
            break;
        default:
            response.statusCode = 404; //page doesn't exist
            response.end('Page not found');//the response back to our client
    }
    // response.statusCode = 200; //if sucessful, get a 200 back
    // response.setHeader('Content-Type', 'text/plain');
    // response.end('Hello World');//the response back to our client

});

server.listen(5000, ()=>{
    console.log('running on port 5000');
}); //the port we are listening on. Opens a socket on port 5000

//to get to the applicaton go to 'localhost:5000'