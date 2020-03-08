//=================================================================================================================
// Note: here we set up the behavior of our feedback form. Not to be confused with the other feedback.js we used to
// set up the route to /feedback
//==================================================================================================================

//-------------------------------------------------------------
//set up an event listener for when the user submits the form
//-------------------------------------------------------------

//retrieve the form dom element from the page
let form = document.querySelector('.feedback-form');
//attach event listener
form.addEventListener('submit', (e) => {
	//e represents what the window is giving back to this event
	//the 'e' gives us lots of information - what was clicked, where was the cursor, what part of the screen they clicked on
	e.preventDefault(); //prevent the default action of the form (wants to go to another page or refresh the current one)
	//make a fetch call to post data back to the server (/api)

	//Retrieve values from the form
	let name = document.querySelector('#feedback-form-name');
	let title = document.querySelector('#feedback-form-title');
	let message = document.querySelector('#feedback-form-message');

	//convert the form variables into an object
	// *Note* we are using .value to retrieve the values of the inputs we pulled earlier from the page.
	//this data object will later be converted to a JSON string. We could make a string ourselves, but doing it this way is a lot
	//easier because of the formatting that would go into creating a JSON string manually
	let data = {
		name: name.value,
		title: title.value,
		message: message.value
	};

	//We are going to create an object with all of the values
	// **** Notes on Stringify *** - we can't pass on object over the internet, we can only pass a string, so we need to use JSON.stringify() to convert our object into a JSON string
	fetch('/api', {
		method: 'POST', //change the method to POST
		headers: { 'Content-Type': 'application/JSON' }, //what we are passing to the server will be a JSON string
		body: JSON.stringify(data) //we will capture the form elements as an object, (name, title, message, etc.) and convert them to a JSON string
		//this is necessary b/c the only thing that can travel over the http protocal is text.
	})
		//*If we want to see the results of our fetch call, we need to attach a .then() block
		//just like when we worked with API's, we are technically getting a string back that would be hard to work with, so we convert that string back into a JSON object
		.then((response) => {
			//the 'response' here corresponds to our 'res.json(feedbackData)' code in the 'api.js' file
			return response.json(); //converts to a javascript object
		})
		.then((feedbackData) => {
			// console.log(feedbackData);
			updateFeedback(feedbackData);
		});
});

//=======================================================================================================
//               				 Auto Populate Previous Feedback Elements
//=======================================================================================================
//this function is called when we first go to the /feedback page
// the code to call it is at the end of this page
let setUp = () => {
	fetch('/api') //we set this up in api.js so that any calls to /api return the current feedback as json
		.then((response) => {
			return response.json();
		})
		.then((feedbackData) => {
			updateFeedback(feedbackData);
		});
};
setUp(); //ensures the /feedback page is properly populated when the user goes to that page for the first time.

//========================================================================================================
//      Function for Updating the Feedback Section of the Page to its Current State
//========================================================================================================
let updateFeedback = (feedbackData) => {
	//an array of objects that looks like below:
	//[ {name: '', title: '', message: ''}, {}, {}, {}, {}, {} ]

	let output = ''; //this will be a string we use to store HTML and eventually add to our page

	//item is the key name in each object: 'name', 'title', 'message'
	//key is the index number for each object: '0', '1', '2', '3', etc.
	feedbackData.forEach((item, key) => {
		output += '     <div class="feedback-item item-list media-list">';
		output += '       <div class="feedback-item media">';
		output +=
			'       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' +
			key +
			'" class="glyphicon glyphicon-remove"></span></button></div>';
		output += '         <div class="feedback-info media-body">';
		output += '           <div class="feedback-head">';
		output +=
			'             <div class="feedback-title">' +
			item.title +
			' <small class="feedback-name label label-info">' +
			item.name +
			'</small></div>';
		output += '           </div>';
		output += '           <div class="feedback-message">' + item.message + '</div>';
		output += '         </div>';
		output += '       </div>';
		output += '     </div>';
	});

	let updateMessagesBlock = document.querySelector('.feedback-messages');
	updateMessagesBlock.innerHTML = output;
};
