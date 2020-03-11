const express = require('express');
const router = express.Router();

// let data = require('../data/data.json'); //right now this index.js file is in the routes folder, so we need to go up and then down into data.

router.get('/blogs', (req,res) => {

    res.render('blogs.ejs', {
    
    });
})

module.exports = router;