//promise library
const promise = require('bluebird');
let initOptions = {
    promiseLib: promise
}
//testdbJan20
let config = {
    host: 'localhost',
    port: 5432,
    database: '3_11_lecture',
    user: 'postgres',
    password: '123'
}
//load and init pg-promise
let pgp = require('pg-promise')(initOptions);
let db = pgp(config);
// console.log(db);
// db.query("SELECT * FROM dishes WHERE title='soup'")
//     .then((results) => {
//         console.log(results);
//     })
// db.one("INSERT INTO pgpromise VALUES (DEFAULT, 'Alina', 'Moscow') RETURNING id")
//     .then((result) => {
//         //object with id in the value
//         console.log(result);
//         console.log('record was inserted');
//         db.query(`SELECT * FROM pgpromise WHERE id=${result.id}`)
//         .then((results) => {
//             console.log(`return from query`)
//         })
//     })

//===============================
//  Sequel Injection
//===============================
//can put a placeholder and link it to a variable to prevent sql injection
let firstName = 'Forkhan';
let city = 'Chicago';
db.result("INSERT INTO pgpromise VALUES (DEFAULT, $1, $2)", [firstName, city])
    .then((result) => {
        console.log('record was inserted');
    })

// console.log(pgpromise);

// db.query("SELECT * FROM pgpromise WHERE name = 'John'")
// db.query("SELECT * FROM pgpromise")
// .then((results) => {
//     results.forEach((person) => {
//         console.log(person.name)
//     })
//     // console.log(results)
// })