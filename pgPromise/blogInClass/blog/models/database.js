const promise = require('bluebird');
//init options
let initOptions = {
    promiseLib: promise
};

//set config
let config = {
    host: 'localhost',
    port: 5432,
    database: 'blogDB',
    user: 'postgres',
    password: '123'
};

//tie everything together
let pgp = require('pg-promise')(initOptions);
let db = pgp(config);
module.exports = db;