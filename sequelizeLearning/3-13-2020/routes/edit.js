const express = require('express');
const router = express.Router();

// let data = require('../data/data.json'); //right now this index.js file is in the routes folder, so we need to go up and then down into data.

router.get('/edit', (req,res) => {

    res.render('edit.ejs', {
    
    });
})

module.exports = router;