const express = require('express');
const app = express();
let PORT = 3000;

//sits in between my server and our routes
app.use(require('./routes/index.js')); //homepage
app.use(require('./routes/cars.js')); //car page
app.use(require('./routes/aboutus.js')); //about Us

//======================
//Routes
//======================
// ***we have moved all of these to the routes folder and imported them


// app.get('/', (req, res) => {
//     res.send('Home Page')
// })
//test
// app.get('/aboutUs', (req, res) => {
//     res.send('about us')
// })
// app.get('/cars/:cars', (req, res) => {
//     let cars = req.param('cars')
//     res.send(`${cars} Cars`)
// })


app.get('/animals', (req, res) => {
    res.send('Animals')
})
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})