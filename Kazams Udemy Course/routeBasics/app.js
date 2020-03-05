const express = require('express');
const app = express();
const PORT = 4000;

//=============================
//      Setting up Routes
//=============================
//root route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
})

//=============================
//Route Parameters
//=============================
//also called dynamic routing
//parameters can set up webpages much more simply, instead of making hundreds of routes for each eventuality
//this route can catch many different URL's

app.get('/movies/:genre/year/:year', (req, res) => {
    //genre and year are dynamic and passed in by the user. movies and year are static keywords
    console.log(req.params.genre); 
    console.log(req.params.year);
    res.send('Movies Route');
})




//movies route
// app.get('/movies', (req, res) => {
//     res.send('Movies');
// })
//movies / year
// app.get('/movies/year', (req, res) => {
//     res.send('Movies/Year');
// })
// app.get('/movies/comedy', (req, res) => {
//     res.send('Comedy Movies');
// })
// app.get('/movies/action', (req, res) => {
//     res.send('Action Movies');
// })
// app.get('/movies/romance', (req, res) => {
//     res.send('Romance Movies');
// })

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})