//===================================================
//                  Medium Problems
//===================================================

//-----------------------------------------------------------------------------------
// 1) - Make an express program that will display "Hello, world!" at the root URL: /
//-----------------------------------------------------------------------------------
const express = require('express');
const app = express();

app.listen(3000, () => {
	//this initalizes the server on port 3000
	console.log('Application is running on port: 3000');
});

app.get('/', (req, res) => {
	// console.log(req);
	res.send('hello world');
});

//----------------------------------------------
// 2) -Add to your program the following pages:
//----------------------------------------------
//"Meow" at the URL /cats "Woof" at the URL /dogs "Living together" at the URL /cats_and_dogs
app.get('/cats', (req, res) => {
	// console.log(req);
	res.send('Meow');
});

app.get('/dogs', (req, res) => {
	// console.log(req);
	res.send('Woof');
});

app.get('/cats_and_dogs', (req, res) => {
	// console.log(req);
	res.send('Living Together');
});

//----------------------------------------------
// 3) - Route Parameters
//----------------------------------------------
//Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL
app.get('/greeting/:name', (req, res) => {
	let name = req.param('name');
	res.send(`Hello, ${name}!`);
});
app.get('/greeting', (req, res) => {
	res.send(`Add your name after the / for a greeting. Ex: /greeting/John`);
});

//----------------------------------------------------
// 4) - Query Parameters: Tell the year you were born
//----------------------------------------------------

//
app.get('/year', (req, res) => {
	let age = req.param('age');
	let date = new Date(); //the current date
	let currentYear = date.getFullYear();
	res.send(`You were born in the year ${currentYear - age}`);
});

//----------------------------------------------------
// For Practice - How to chain queary Parameters
//----------------------------------------------------
// NOTE: the '&' symbol is used to chain query parameters together
//the first one here is: '?img1=....'
//the second on here is: '&img2=....' important to note that you don't need '?' again
// http://localhost:3000/pics?img1=http://www.coolminiornot.com/pics/pics16/img5c942beb7371d.jpg&img2=https://i.redd.it/pdbcui1g69az.jpg
app.get('/pics', (req, res) => {
	let imgVar1 = req.param('img1');
	let imgVar2 = req.param('img2');
	//NOTE: all the image need to be  nested in the .send()
	//using .send over and over will cause issues
	res.send(`
	<img src="${imgVar1}" />
	<img src="${imgVar2}" />
	`);
});
