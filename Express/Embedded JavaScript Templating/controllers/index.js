const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let fruits = ['oranges', 'apples', 'kiwi', 'limes', 'bananas', 'peaches'];
    
    // res.send('index page');
    res.render('index.ejs', {
        pageTitle: 'Vegan Cooking Recipes',
        description: 'How to make delicious vegan recipes',
        fruitList: fruits
    }); //second argument is where we can pass data, it is an object
});

module.exports = router;