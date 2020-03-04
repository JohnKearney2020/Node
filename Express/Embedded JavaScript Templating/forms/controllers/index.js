const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//request => server handles req uest => middlewate => handler
//this makes body-parser info availble to all routes below it
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (req, res) => {
    res.render('index');
})

router.post('/', (req, res) => {
    console.log(req.body); //req.body is where all the data from the form is stored
    let email = req.body.email;
    let isValid = req.body.isValid;
    let password = req.body.password;
    let isTrue = req.body.isTrue;

    // res.send(`email: ${email} password: ${password}`);
    res.render('index', {
        // email: email, OR below
        email,
        isValid,
        password,
        isTrue
    })
})

module.exports = router;