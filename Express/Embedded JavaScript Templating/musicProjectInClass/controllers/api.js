const express = require('express');
const router = express.Router();
//body parser lets us to grad any form data from the header.
const bodyParser = require('body-parser');

let feedbackData = require('../data/feedback.json'); //returns an array of 3 objects to starts
const fs = require('fs'); //needed to read and write to files

//need middleware to bring in body-parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/api', (req, res) => {
	res.send('json data');
});
//a router.post is needed for the fetch call we make in feedback.js
router.post('/api', (req, res) => {
	//this is where we want to scrape information
	//take the data from our file and shift it
	feedbackData.unshift(req.body); //unshift appends to the front of an array
	//seems the feedbackData got converted to an Object, so we have to stringify it.
	fs.writeFile('../data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
		if (err) {
			console.log(err);
		}
		res.json(feedbackData); //we are sending the original feedback object back along with the new entry created after the user hit submit.
		//this is the response in our fetch
	});
	res.json({
		testing: 'json data'
	});
});

module.exports = router;
