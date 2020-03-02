//Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

var request = require('request');
var url = 'https://nodejs.org/en/';
request.get(url, function(error, response, html) {
	if (error) {
		console.error(error.message);
		return;
	}
	console.log(html);
});
