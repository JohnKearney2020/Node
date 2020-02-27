//====================================================================
//                          Loading a Local Module
//====================================================================
// var myLogModule = require('./messages.js'); //this 'imports' the log module we created. It sets the variable 'myLogModule' equal to the 
// //log module we created in nodeFirstModule.js

// //the log module is an object, and here we call the .info method which will print the string we feed it to the console.
// myLogModule.info('Node.js started');

//====================================================================
//                          Exporting Literals
//====================================================================
// var msg = require('./messages') //this sets msg equal to the module export we created
// console.log(msg); //hello world

//====================================================================
//                          Exporting Objects
//====================================================================
// var msg = require('./messages'); //the .js is not necessary, this set msg = to the module we created in messages.js
// console.log(msg.simpleMessage); //we can use the object we created in messages.js, 'Hello, World!'

//====================================================================
//                    Exporting Objects with a function
//====================================================================
// var msg = require('./messages.js'); //the .js will still work
// msg.log('Hello, world!'); //this will print to the console

//====================================================================
//                    Attach an object to module.exports
//====================================================================
// var person = require('./messages');
// console.log(person.firstName + ' ' + person.lastName); //James bond

//====================================================================
//                   Exporting a pure Function
//====================================================================
//not to be confused with exporting an object with a function, covered earlier
// var msg = require('./messages.js'); //this sets msg equal to the one function we have in the messages.js file
// msg('Hello World');

//====================================================================
//                   Export function as a class
//====================================================================
var person = require('./messages.js'); //this imports our function object class
var person1 = new person('James', 'Bond'); //this creates a new person object
console.log(person1.fullName()); //James Bond, this calls the fullName function in the person1 class