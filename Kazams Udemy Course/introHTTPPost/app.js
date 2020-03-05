//This is how you post json data to a route and extract data from it using the body parser
//==========================================
//              HTTP Post
//==========================================

//The HTTP Post, or a post request, allows the client to send some data, know as the body, to the server
//The body can be many different things, but in this course it will mostly be 'form encoded values' or JSON
const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require('body-parser');

//set up body parser to parse json
app.use(bodyParser.json());

//you CAN have multiple routes to the same url using different methods
//itc, the .get is invoked if we go to /movies through our browser
app.get('/movies', (req,res) => {
    res.send('movies via .get method'); //this will send back the movies object as JSON
})

//================================================
// the movie data we will post to the movies page
//{title: 'Lord of the Rings, year: 2013}
//================================================

//================================================
// Postman
//================================================
//in postman, you need to set up headers as: " key: 'Content-Type', value: 'application/json' " and then put the movie
//object into the Body tab, and choose the "raw" radio button
//*****IMPORTANT: We need to parse the body for this to work *********

//this route would be invoked when we are posting to /movies
app.post('/movies', (req, res) => {
    let title = req.body.title;
    let year = req.body.year;
    let revenue = req.body.revenue;
    console.log(title);
    console.log(year);
    console.log(revenue);
    res.send('OK');
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT: ${PORT}`);
})