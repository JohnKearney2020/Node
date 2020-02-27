//====================================================================
//                Exporting a generic module that is an object
//====================================================================
// var log = {
//     info: function (info) { 
//         console.log('Info: ' + info);
//     },
//     warning:function (warning) { 
//         console.log('Warning: ' + warning);
//     },
//     error:function (error) { 
//         console.log('Error: ' + error);
//     }
// };
// module.exports = log //this is *CRITICAL* to export this code so that other .js files can use the code.


//====================================================================
//                          Exporting Literals
//====================================================================
// module.exports = 'Hello world';
//or
// exports = 'Hello world';

//====================================================================
//                          Exporting Objects
//====================================================================
// exports.simpleMessage = 'Hello, World!'; //here we are exporting an object that we can then access.
// //or
// module.exports.simpleMessage = 'Hello, World!';

//====================================================================
//                    Exporting Objects with a function
//====================================================================
// module.exports.log = function (msg) {  //this will export the log object so we can use its method
//     console.log(msg);
// };

//====================================================================
//                    Attach an object to module.exports
//====================================================================
// module.exports = { //another way of exporting an object, which we can access in other js files.
//     firstName: 'James',
//     lastName: 'Bond'
// }

//====================================================================
//                   Exporting a pure Function
//====================================================================
//not to be confused with exporting an object with a function, covered earlier
// module.exports = function (msg) { //this is exporting a pure function
//     console.log(msg);
// };

//====================================================================
//                   Export function as a class
//====================================================================
module.exports = function (firstName, lastName) { //similar to what we just did, but the function is a class, too
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    }
}