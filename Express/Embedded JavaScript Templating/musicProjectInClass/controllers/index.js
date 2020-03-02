const express = require('express');
const router = express.Router();

let data = require('../data/data.json'); //right now this index.js file is in the controllers folder, so we need to go up and then down into data.
router.get('/', (req,res) => {
    // console.log('test');
    // console.log(data.speakers[0].artwork);
    let pagePhotos = [];
    data.speakers.forEach((speakerObj) => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork);
    })
    console.log(pagePhotos);
    res.render('index.ejs', {
        artwork: pagePhotos //here we can send the array of images to the index.ejs file
    });
})

module.exports = router;