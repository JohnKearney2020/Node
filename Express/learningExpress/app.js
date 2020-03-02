const express = require('express');

const app = express(); //this will return an object with functions we need to run our application

//we have to create a server b/c javascript alone cannot create and recieve requests and responses
//listen allows us to set up a server and set up a port to listen on. We have to tell it where we are listening.
//the only required paremeter is the first, which tells it what port to listen on
//the second callback function is optional, but is nice b/c it lets us know the application is running, via a message to ourselves
app.listen(3000, () => {
	console.log('Application is running on port: 3000');
});
//********IMPORTANT *************/
//all of these .get calls are processed in order, top down
//keep that in mind when using regular expressions, as a higher up one might prevent lower level ones from ever triggering
// Example: app.get('/*') would catch everything b/c of the * wild card and not let any others trigger if it were listed
//at the top of the page

//======================================================================
//                 Public Folders with static assets
//======================================================================
app.use(express.static('public')); //we need to create a public folder, and then everything inside that becomes a static asset
//the code will first look in the public folder for whatever we've typed into the browser, ie. if it's
//localhost:3000/aboutus.html it will first look into the public folder for that. If it can't find it there it will look
//below for other routes it might find it in.

//creating our first route/handler
// '/' just means the homepage, the second arg is a callback function - C++ sends these arguments to this function
// app.get('/', (request, response) => {
// 	console.log(request);
// 	response.send('hello world');
// });

//if we request the about page
// app.get('/aboutus', (req, res) => {
// 	res.send('about us page');
// });

// app.post('/faq', (req, res) => {
// 	res.send('frequently asked questions');
// });

//the ? makes the s at the end of pictures optional. Therefore a user can put in /picture OR /pictures and both will bring up the same web page
// app.get('/pictures?', (req, res) => {
// 	res.send('pictures');
// });

//the regular expressions below will allow all of the following to be tagged onto a URL and will work:
//cat
//cats
//catfancy
//catsfancy
// app.get('/cats?(fancy)?', (req, res) => {
// 	res.send('my cats are fancy');
// });

// app.get('/dog*', (req, res) => {
// 	res.send('here are my doggies');
// });

// app.get('/contact', (req, res) => {
// 	let contact = req.param('name'); //this is the key name, it comes from the user, and is in the request object
// 	console.log(contact);
// 	res.send(`contact ${contact}`);
// });

// app.get('/contact', (req, res) => {
// 	let contact = req.param('name'); //the will pull the value from the 'name=' field of the URL
// 	console.log(contact);
// 	res.send(`contact`);
// });

// Can also do it by getting using the Path
//this will pull the username after the /contact/, ex: /contact/John
// app.get('/contact/:name', (req, res) => {
// 	//^^^^NOTE^^^^^ we need another handler for just the regular /contact/ path if we want that. As it stands, /contact/ will not work
// 	let name = req.param('name');
// 	res.send(`your name is: ${name}`);
// });

// app.get('/contact', (req, res) => {
// 	res.send(`Add your name to the URL. Ex: /contact/John`);
// });

//============================================================================================================================
//                                                       Calculator
//============================================================================================================================
//Using backslashes (routes):
// app.get('/calc', (req, res) => {
// 	res.send(`This will add two numbers for you. Add them to the Url like: /calc/3/4/`);
// });

// app.get('/calc/:num1/:num2', (req, res) => {
// 	let num1 = Number(req.param('num1'));
// 	let num2 = Number(req.param('num2'));
// 	let total = num1 + num2;
// 	res.send(`<h1 style="color: green">The total of ${num1} + ${num2} is: ${total}</h1>`);
// });

// http://localhost:3000/pics?img1=http://www.coolminiornot.com/pics/pics16/img5c942beb7371d.jpg&img2=https://i.redd.it/pdbcui1g69az.jpg
// app.get('/pics', (req, res) => {
// 	let imgVar1 = req.param('img1');
// 	let imgVar2 = req.param('img2');
// 	// let imgVar3 = req.param('img3');
// 	// let imgVar4 = req.param('img4');
// 	// console.log(imgVar);
// 	//NOTE: all the image need to be  nested in the .send()
// 	//using .send over and over will cause issues
// 	res.send(`
// 	<img src="${imgVar1}" />
// 	<img src="${imgVar2}" />
// 	`);
// 	// res.send(`<img src="${imgVar2}" />`);
// 	// res.send(`<img src="${imgVar3}" />`);
// 	// res.send(`<img src="${imgVar4}" />`);
// });

//using key/value parameters in the URL
//Using backslashes:
// app.get('/calc', (req, res) => {
// 	res.send(`This will add two numbers for you. Add them to the Url like: /calc?num1=3?num2=4`);
// });

// app.get('/calc', (req, res) => {
// 	res.send(`This will add two numbers for you. Add them to the Url like: /calc?num1=3?num2=4`);
// 	let num1 = Number(req.param('num1'));
// 	let num2 = Number(req.param('num2'));
// 	console.log(num1);
// 	console.log(num2);
// 	// let num2 = Number(req.param('num2'));
// 	// let total = num1 + num2;
// 	// res.send(`The total of ${num1} + ${num2} is: ${total}`);
// });

//===========================================================================
//						Veronicas Code
//===========================================================================

// const express = require('express');
// const app = express();
// app.use(express.static('public'));
// app.get('/', (req, res) => {
// 	res.send('home page');
// });
// app.get('/about', (req, res) => {
// 	res.send('about page');
// });
// app.get('/faq', (req, res) => {
// 	res.send('frequently asked questions');
// });
// app.post('/faq', (req, res) => {
// 	res.send('frequently asked questions');
// });
// app.get('/pictures?', (req, res) => {
// 	res.send('pictures');
// });
// app.get('/cats?(fancy)?', (req, res) => {
// 	res.send('my cats are fancy');
// });
// // app.get('*', (req, res) => {
// //     res.send('here are my doggies')
// // })
// // app.get('/contact', (req, res) => {
// //     let contact = req.param('name');
// //     console.log(contact);
// //     let myString  = "contact " + contact;
// //     res.send(`contact ${contact}`)
// // })
// app.get('/contact', (req, res) => {
// 	let name = req.param('name');
// 	res.send(`Add your name to the url`);
// });
// app.get('/contact/:name', (req, res) => {
// 	let name = req.param('name');
// 	res.send(`your name is: ${name}`);
// });
// app.get('/calculate/:a/:b', (req, res) => {
// 	let a = req.param('a');
// 	let b = req.param('b');
// 	let c = parseInt(a) + parseInt(b);
// 	res.send(`<h1 style="color:green">The sum of ${a} + ${b} =  ${c}</h1>`);
// });
// app.get('/pics', (req, res) => {
// 	let imgVar1 = req.param('img1');
// 	let imgVar2 = req.param('img2');
// 	// let imgVar3 = req.param('img3');
// 	// let imgVar4 = req.param('img4');
// 	res.send(`
//     <h1>My Images</h1>
//     <img src='${imgVar1}' />
//     <img src='${imgVar2}' />
// 	`);
// 	// <img src='${imgVar3}' />
// 	// <img src='${imgVar4}' />
// });
// app.listen(3000, () => {
// 	console.log('listening on port 3000');
// });
