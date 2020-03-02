//our cars route
const express = require('express');
const router = express.Router() //now we need an object on express to route it back to app.js
//router can be declared this way in each module
//router can handle all of our routes

router.get('/cars/:cars', (req, res) => {
    let cars = req.param('cars')
    res.send(`${cars} Cars`)
})

router.get('/cars', (req, res) => {
    
    res.send(`Add a car brand after the slash. Ex: /cars/Honda`)
})

module.exports = router; //this put the router object we've created back into our main file
