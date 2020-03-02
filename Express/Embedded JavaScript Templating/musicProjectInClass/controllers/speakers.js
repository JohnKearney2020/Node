const express = require('express');
const router = express.Router();

router.get('/speakers', (req,res) => {
    res.render('speakers.ejs');
})

module.exports = router;