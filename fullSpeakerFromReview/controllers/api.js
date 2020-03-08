const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

//we need to take the data we've sent to /api and add it to the feedback.json file in our 'data' folder
let feedbackData = require('../data/feedback.json');
//feedbackData is a list of objects like shown below:
// [{},{},{},{},{}]
//Using the UNSHIFT method, we are going to append our req.body object to the beginning of this array of objects
// [{req.body},{},{},{},{}]

//whenever we make a request to the /api, it's going to automatically give us back whatever is in the feedback.json file
//this is needed so that when users go to /feedback the first time they will see previous feedback people have posted
//this is directly tied to feedback.js in the public folder
router.get('/api', (req, res) => {
	res.json(feedbackData);
});

//-------------------------------------------------------------------
//MIDDLEWARE - In order to use body-parser we have to use middleware
//-------------------------------------------------------------------
//server recieves a request, looks for the path and http verb, and then routes it to the appropriate handler
// In between the request and routing to the appropriate handler is middleware
// middleware always uses .use()
// request (path, http verb) => (middleware) => handler

//grab form data from header as json
router.use(bodyParser.urlencoded({ extended: false }));
//convert header json string into a javascript object
router.use(bodyParser.json());

//PURPOSE: posting data from client-side form
//at this point we have taken data from the client-side to our backend
router.post('/api', (req, res) => {
	// console.log(req.body); //see notes above on feedbackData regarding req.body
	feedbackData.unshift(req.body); //append the whole object to feedback data, BUT at the beginning of the array
	//*At this point we've changed the feedbackData variable in memory, but *we have NOT* changed the actual file in our 'data' folder

	//first argument is the directory where you can find the file you want to write to, from the ROOT directory of your application
	//the second argument is what we want to write. feedbackData is an object we need to convert back to a string
	//'utf8' is explained more in the documentation, we don't need to worry about it much here
	// the last callback function is for catching errors, i.e. not being able to write to the file itc.
	fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
		if (err) {
			console.log(err);
		}
		console.log(req.body);

		//the response below is tied to the response in feedback.js that says '.then((response) => {'
		res.json(feedbackData); //feedbackData is an object so we need to send it back as json b/c what we send back can only be text.
		//feedbackData NOW has both the old messages and the new messages our user submitted.
	});
});

module.exports = router;
