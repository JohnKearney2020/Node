//our homepage route
const express = require('express');
const router = express.Router() //now we need an object on express to route it back to app.js

router.get('/', (req, res) => {
    res.send('this is my homepage');
});

module.exports = router;