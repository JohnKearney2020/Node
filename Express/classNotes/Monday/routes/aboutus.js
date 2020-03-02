//our aboutUs route
const express = require('express');
const router = express.Router() //now we need an object on express to route it back to app.js

router.get('/aboutus', (req, res) => {
    res.send('about us');
});

module.exports = router;
