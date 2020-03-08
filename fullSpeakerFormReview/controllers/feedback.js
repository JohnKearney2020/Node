//=============================================================================================================
// NOTE: this is the feedback.js file in the controllers directory used to set up a route for the feedback page
// not to be confused with the feedback.js file in the /public directory
//=============================================================================================================

//the purpose of this js file to to display the feedback.ejs file
const express = require('express');
const router = express.Router();

router.get('/feedback', (req, res) => {
	res.render('feedback', {
		//if we look at the EJS on feedback.ejs, we can see we need to feed these to feedback.ejs
		pageTitle: 'Feedback',
		pageID: 'feedback'
	});
});

module.exports = router;
