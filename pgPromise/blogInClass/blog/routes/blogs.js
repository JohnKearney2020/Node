const express = require('express');
const router = express.Router();
let db = require('../models/database.js')
//shows the details of a blog
router.get('/blogs/:blogID', (req, res) => {
  
  let blogID = req.params.blogID; //will grab the blogID off the URL

  db.query('SELECT * FROM blogs WHERE id=$1', [blogID]) //get all rows for that specific blog
  .then((results) => {
    res.render('blogs.ejs', { //array of objects
      blog: results[0] //the blog we want will always be at index 0 and the only blog in fact. This is an object
    })
  })
  .catch((error) => {
    console.log(error);
  })

});

module.exports = router;
