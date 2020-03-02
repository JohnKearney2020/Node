const express = require('express');

const app = express(); //this will return an object with functions we need to run our application

app.listen(8000, () => {
	console.log('Application is running on port: 8000');
});

app.get('/', (request, response) => {
	// console.log(request);
	response.send('second init homepage sucessful');
});

//if we request the about page
app.get('/aboutus', (req, res) => {
	res.send('second init about us sucessful');
});

// by default, every application on the internet works on port 80 for http, and 443 for https.
