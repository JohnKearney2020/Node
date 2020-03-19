const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const bcrypt = require('bcryptjs');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./routes/'));
app.use(require('./routes/blogs.js'));
app.use(require('./routes/editblogs.js'));

//=============================================================
//             Cookies
//=============================================================
app.use(cookieParser());
app.use(sessions({
    secret: 'asdfghi',
    cookie: {secure: false, maxAge: 14 * 24 * 60 * 60 * 1000} //two weeks in milliseconds
}))

//=============================================================
              //Authentication
//=============================================================
app.use(bodyParser.urlencoded({extended: false}));

// create a login form, and registration form
// create a database
// create a record in our table for the user



//=============================================================
//                           Login
//=============================================================
app.get('/login', (req,res) => {
  // res.send('login')
  res.render('login.ejs');
})

app.post('/login', (req,res) => {
  let userNameLogin = req.body.username;
  let password = req.body.password;

  db.users.findAll({where: {username: userNameLogin}}) //see if the username exists in our database
  .then(((results) => { //an array of objects. each object is a record in the database.
    if(results.length > 0){ //if at least one user was found
      //test if passwords match. Format: bcrypt.compare(password the user entered, database password, callback Function)
      //interestingly, we don't have to do anything special to the unencrypted password the user entered for bcrypt.compare to check it
      //against the encrypted password
      bcrypt.compare(password, results[0].password, (error, response) => {
        //response = match, error = no match  
        if(response){ //if we find a matching user
          req.session.userid = userNameLogin; //here we create a cookie based on the user logging in
          res.redirect('/');
        } else {
          res.redirect('/error')
        }
      })
    } else { //if we can't find the username the user entered
      res.redirect('/error');
    }  
  }))
})

//=============================================================
//                           Logout
//=============================================================
app.get('/logout', (req,res) => {
  req.session.destroy((err) => { //this will destroy the login cookie and log the user out
    res.redirect('/');
  })
})


//=============================================================
//                         Error route
//=============================================================
app.get('/error', (req,res) => {
    res.send('error: username or password is incorrect');
})


//=============================================================
//                        Admin Page
//=============================================================
//we need to create our own custom middleware. How middleware works below:
// middleware server recieves request => middleware => route to appropriate handler
//we are going to create our own function, auth, that will execute before the normal callback function.
//    *it will look for a valid cookie, that could only exist if a legitimate user with a valid password had loggedin
//    *depending on if it can find that cookie or not, it will route users to a specific page

let auth = (req, res, next) => {
  if(req.session.userid) { //if the proper cookie exists
    next(); //we will send the request and response to the callback function in the app.get('/admin') route above.
  } else { //if that cookie does not exist, we will redirect them.
    res.redirect('/login');
  }
}

app.get('/admin', auth, (req,res) => {
  res.send('protected page');
})

//===============================================
//        Protecting Child Routes of admin
//===============================================
//we can use a wildcard and our 'auth' function to protect all child routes of /admin
//we need to use app.all()
app.all('/admin/*', auth, (req,res,next) => {
  next();
})

app.get('/admin/dashboard', (req,res) => { //notice that we don't need the 'auth' function since this is a child of /admin/
//and we used the app.all('/admin/*'), which routes the user to here, in conjunction with 'auth' already
  res.send('This is a protected site, child of admin');
})



//=============================================================
//                        Registration
//=============================================================
app.get('/registration', (req,res) => {
  res.render('registration.ejs');
})

app.post('/registration', (req,res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = bcrypt.hashSync(req.body.password, 8); //first arg: string to encrypt, 2nd arg: salt, and how long the salt is. 8 characters in this case.
  
  //store this information inside of a table
  db.users.create({username: username, email:email, password:password})
  .then((user) => {
    // console.log(user);
    // console.log(username, email, password);
    // res.send('recieved post');
    res.redirect('./login');
  })
  .catch((error) => {
    // console.log(error);
  })
})


app.listen(3000, () => {
  console.log('Listening on 3000');
});

