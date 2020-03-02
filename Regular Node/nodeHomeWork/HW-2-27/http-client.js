//Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
//Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
// process.argv[2]; //directory to search

var request = require('request');
// var url = 'https://nodejs.org/en/';
var url = process.argv[2];
// request.get(url, function(error, response, html) {
request.get(url).on('response', function(response) {
	// console.log('response triggered');
	response.on('data', function(data) {
		console.log(data.toString());
	});
});
