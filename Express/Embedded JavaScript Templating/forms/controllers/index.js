const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//request => server handles request => middleware=> handler
router.use(bodyParser.urlencoded({extended: false}));
router.get('/', (req, res) => {
    res.render('index')
})
router.post('/', (req, res) => {
    console.log(req.body);
    let email = req.body.email;
    let isValid = req.body.isValid;
    let isTrue = req.body.isTrue;
    let password = req.body.password;
    // res.send(`email: ${email} isValid: ${isValid} isTrue: ${isTrue} password ${password}`)
    res.render('index', {
        email : email,
        isValid: isValid,
        isTrue: isTrue,
        password: password
    })
})
module.exports = router;
//first Name
//last Name
//email address
//phone number