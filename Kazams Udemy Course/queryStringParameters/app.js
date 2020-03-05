//Query strings are more common when you are searching, filtering, sorting etc. on a website.
//think of a typical Amazon search where you need to extract the query string and do an action based on that.

const express = require('express');
const app = express();
const PORT = 4000;

//http://localhost:4000/movies?sort=asc&page=16
app.get('/movies', (req, res) => {
    console.log(req.query.sort); //asc, sort is a parameter name, asc is the parameter value
    console.log(req.query.page);
    res.send('[Movies]');
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT: ${PORT}`);
})