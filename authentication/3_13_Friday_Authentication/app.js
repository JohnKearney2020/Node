const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');

// let password = "some password";
let password = "no password";

// let salt = crypto.randomBytes(20);
let salt = crypto.randomBytes(20).toString('hex'); //this will give us a string of 20 random characters
//the salt is used in conjuction with the password to create a unique encrypted string

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256');

// console.log(salt);
// console.log(key.toString('hex'));

let hash = key.toString('hex');

// console.log(hash);

//this will be stored in database
//NOTE: notice that we don't actually send the user's password to the database. We send everything BUT THE PASSWORD
//Later, we will compare this hash with the one the server generates and see if they match. If they do, we know the password was correct.
let stored_password = `pbkdf2_sha256$3600$${salt}$${hash}`;
// console.log(stored_password)

//==================================================
//              validating user password
//==================================================
//Here we see if the user's entered password matches what we have in our database

//checking a password
let login = "some password"

let password_parts = stored_password.split('$') //this will create an array of strings. NOTE: we will have to convert the number strings back to numbers later
// ['pbkdf2_sha256', '3600', 'salt characters', 'hash characters']
// console.log(password_parts);

let keyNewLogin = pbkdf2.pbkdf2Sync(
    login,
    password_parts[2], //the salt characters are stored in index 2 of this array
    parseInt(password_parts[1]), //this is '3600' as a string in our array and we convert it back to an integer here
    256,
    'sha256'
)

let hashNewLogin = keyNewLogin.toString('hex');

if(hash == hashNewLogin) {
    console.log('Passwords match');
} else {
    console.log('Passwords do not match');
}
