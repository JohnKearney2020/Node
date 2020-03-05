//find our form
let form = document.querySelector('.feedback-form');

//add an event listener
form.addEventListener('submit', (e) => {
	e.preventDefault();

	//retrieve values from form
	let name = document.querySelector('#feedback-form-name');
	let title = document.querySelector('#feedback-form-title');
	let message = document.querySelector('#feedback-form-message');

	//this fetch will put the form data into the header of the HTML file for the api
	fetch('/api', {
		//we will need to make the /api route in addition to this
		method: 'POST',
		header: { 'Content-Type': 'application/json' }, //we are going to recieve json data back from the api, and we need to set that up ourselves here
		body: {
			name: name.value, //we are using .value since these are forms
			title: title.value,
			message: message.value
		}
	})
		.then((response) => {
			//this is the response from the api
			return response.json();
		})
		.then((feedbackData) => {
			//response will be json data and we want to convert that to a javascript object.
			console.log(feedbackData);
		});
});
