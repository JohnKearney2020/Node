//here we set up our mustache server side pages
//then we pass data to the mustache pages. Our server can inject values into the pages so it gets supplied client side

const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

//setup our Express template engine
app.engine('mustache', mustacheExpress());
//set up where express is going to find our views. Views is a fancy word for pages.
app.set('views', './views');
//set up the view engine, basically says that the extension of the pages will be mustache
app.set('view engine', 'mustache');

app.get('/users', (req, res) => {
    let users = [
        {name: 'John Doe', age: 34},
        {name: 'Mary Doe', age: 32},
        {name: 'Alex Lowe', age: 27}
    ]

    //if we want to return it to a specific page:
    //NOTE: we must convert the array of objects to an object to pass it to the users.mustache page.
    res.render('users.mustache', {users: users});
})


//set up a rendered page
app.get('/', (req, res) => { //pass in the name of the page we want to render
    // let user = {name: 'John Doe', street: '1200 Richmond'};
    //the same functionality as above, but with a nested object
    let user = {
        name: 'John Doe',
        address: {
            street: '123 Fun Street',
            city: 'Houston',
            state: 'TX'
        }
    }

    res.render('index.mustache', user); //the second argument is what we want to pass to the page. We want to pass it as an object
})

app.listen(4000, () =>{
    console.log('Server is running on port 4000...');
})