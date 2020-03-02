const express = require('express');
const router = express.Router();

router.get('/schools', (req, res) => {
    // res.send('index page');
    res.render('schools.ejs'); //this is the ejs page that we will render
});

module.exports = router;