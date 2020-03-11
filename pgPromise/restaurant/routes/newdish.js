const express = require('express');
let db = require('../models/database');
let bodyParser = require('body-parser');
const router = express.Router();

router.get('/newdish', (req, res) => {
    db.query('SELECT * FROM categories')
        .then((results) => {
        
        res.render('newdish',{
            categories: results
        })
    })

})

router.use(bodyParser.urlencoded({ extended: false }));
router.post('/newdish', (req, res) => {
    let name = req.body.title;
    let category = req.body.category;
    let fooddescription = req.body.description;
    let price = parseInt(req.body.price);
    let imageurl = req.body.imageURL;
    let course = "";
    db.none("INSERT INTO restaurants (name, category, fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)",
        [name, category, fooddescription, price, course, imageurl])
        .then(() => {
            res.redirect('/dishes')
        })
        .catch((error) => {
            res.send(error);
        })

})
module.exports = router;









// const express = require('express');
// const router = express.Router();
// let db = require('../models/database.js');
// let bodyParser = require('body-parser');

// router.get('/newdish', (req,res) => {
//     res.render('newdish');
// })

// router.use(bodyParser.urlencoded({extended: false}));

// router.post('/newdish', (req,res) => {
//     let name = request.body.title;
//     let category = 1;
//     let fooddescription = request.body.description;
//     let price = parseInt(req.body.price);
//     let imageurl = req.body.imageurl;
//     let course = ""

//     db.none("INSERT INTO restaurants (name, fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)",
//     [name, category, fooddescription, price, imageurl, course])
//     .then(() => { //.none so not expecting results
//         res.redirect('/dishes'); //will show all dishes in the database
//     })
//     res.send('post sucessful');
// })
// module.exports = router;

