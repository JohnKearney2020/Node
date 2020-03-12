const express = require('express');
const router = express.Router();
let db = require('../models/database.js'); //with this we can pass info drom the database to this page

router.get('/', (req, res) => {
  
  db.query("SELECT * FROM blogs") //get an array of objects from the database
  .then((results) => {
    // [ {title:value, author_id:vlaue, category_id:value, body:value, date_pub: value}, {}, {}, {}, {}, {}]

    res.render('index.ejs', {
      blogs: results //passing the array of blogs objects to our index.ejs file with a name of blogs
      //will also be an array of objects in index.ejs
    });
  })
  .catch((error) => {
    console.log(error);
    res.send('error');
  })
});

module.exports = router;
