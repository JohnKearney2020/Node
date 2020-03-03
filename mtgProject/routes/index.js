const express = require('express');
const router = express.Router();

let data = require('../data/data.json'); //right now this index.js file is in the routes folder, so we need to go up and then down into data.

router.get('/', (req,res) => {
    let artWorkFileNames = []; //this array will store all of the card art image file names
    data.cards.forEach((cardObj) => {
        artWorkFileNames = artWorkFileNames.concat(cardObj.cardartfilename);
    })
    res.render('index.ejs', {
        cardimages: artWorkFileNames //here we can send the array of images to the index.ejs file
    });
})

module.exports = router;