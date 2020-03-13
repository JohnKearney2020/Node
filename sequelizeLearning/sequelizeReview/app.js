let db = require('./models'); //by default it is looking for the index.js file

//=============================
//Create Users for Our Table
//=============================

// db.user.create({
// 	firstName: 'Austin',
// 	lastName: 'Denny',
// 	email: 'austin@me.com'
// });
// db.user.create({
// 	firstName: 'Jaye',
// 	lastName: 'Jensen',
// 	email: 'jaye@me.com'
// });
// db.user.create({
// 	firstName: 'Alina',
// 	lastName: 'Belova',
// 	email: 'alina@me.com'
// });
// db.user.create({
// 	firstName: 'Meryem',
// 	lastName: 'Komur',
// 	email: 'meryem@me.com'
// });
// db.user.create({
// 	firstName: 'Diego',
// 	lastName: 'Rivera',
// 	email: 'Diego@me.com'
// });

//=============================
//Find all users in our table
//=============================
// db.user.findAll().then((results) => {//results is an array of objects
// 	// console.log(results);
// 	results.forEach((eachUser) => {
// 		console.log(eachUser.firstName, eachUser.lastName, eachUser.email);
// 	});
// });

//=============================
//Find a user by id
//=============================
// db.user.findByPk(3).then((userObject) => {
// 	// console.log(record); //this would print the entire user object
// 	console.log(userObject.id, userObject.firstName, userObject.lastName, userObject.email);
// });

//===================================
//Find a user by first name = "blah"
//===================================
// db.user.findAll({ where: { firstName: 'Alina' } }).then((results) => {
// 	//this could be just on user object, or could be multiple if there are many people name Alina
// 	results.forEach((eachUserObject) => {
// 		console.log(eachUserObject.firstName, eachUserObject.lastName, eachUserObject.email);
// 	});
// });

//===================================
//Delete something from our table
//===================================
// db.user.destroy({ where: { id: 1 } }).then((rowDeleted) => {
// 	console.log(rowDeleted);
// 	if (rowDeleted == 1) {
// 		console.log('deleted sucessfully');
// 	}
// });

//===================================
// Use raw SQL to query our table
//===================================
// let sequelize = db.sequelize;
// sequelize.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT }).then((results) => {
// 	results.forEach((record) => {
// 		console.log(record.firstName);
// 	});
// });

//===================================
// Update a record in our table
//===================================
// db.user.findByPk(3).then((user) => {
// 	user.firstName = 'Mery';
// 	user.save().then(() => {
// 		console.log('record saved');
// 	});
// });
