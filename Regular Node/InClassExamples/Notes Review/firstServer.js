var http = require('http'); //importing a core Node.js module
var dt = new Date(); //store the current date as a variable
var myServer = http //create the server we will use
	.createServer(function(req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('The date and time are currently: ' + dt.toDateString());
		res.end();
	})
	.listen(8080);
