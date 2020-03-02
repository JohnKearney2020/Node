const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public')); //.static means everything is a static asset

//routes
app.use(require('./controllers/index.js')) //if no file is listed it will by default look for index.js
app.use(require('./controllers/aboutus.js')) //About Us page
app.use(require('./controllers/schools.js')) //Schools page
app.use(require('./controllers/cars.js'));

app.listen(3000, (params) => {
    console.log('listening on port 3000');
})