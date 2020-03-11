const express = require('express');
const router = express.Router();

// let data = require('../data/data.json'); //right now this index.js file is in the routes folder, so we need to go up and then down into data.

router.get('/', (req,res) => {

    res.render('index.ejs', {
    
    });
})

module.exports = router;