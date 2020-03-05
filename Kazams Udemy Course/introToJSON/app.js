const express = require('express');
const app = express();
const PORT = 4000;

app.get('/movies', (req,res) => {
    
    let movies = [
        {title: 'Lord of the Rings', year: 2001},
        {title: 'Crank 2: High Voltage', year: 2004},
        {title: 'Aliens', year: 1986},
    ]
    // let movie = {title: 'Lord of the Rings', year: 2001};
    //instead of res.send, we can use res.json
    res.json(movies); //this will send back the movies object as JSON
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT: ${PORT}`);
})