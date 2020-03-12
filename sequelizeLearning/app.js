let db = require('./models') //will look at index.js file by default

//created a model called 'user'
// db.user.create({
//     firstName: 'John',
//     lastName: 'Kearney',
//     email: '123@hello.com'
// })
// db.user.create({
//     firstName: 'Jaye',
//     lastName: 'Jenson',
//     email: 'jay@hello.com'
// })
// db.user.create({
//     firstName: 'Alina',
//     lastName: 'Belova',
//     email: 'Alina@hello.com'
// })
// db.user.create({
//     firstName: 'Meryem',
//     lastName: 'Turkey',
//     email: 'Meryem@hello.com'
// })

// db.user.findAll()
// .then((results) => {
//     results.forEach((record) => {
//         console.log(`${record.firstName} ${record.lastName} ${record.email}`)
//     })
//     // console.log(results)
// })

//find by ID
// db.user.findByPk(3)
// .then((record) => {
//     console.log(record.id, record.firstName, record.lastName, record.email);
// })

//find by first name = something
// db.user.findAll({where: {firstName: "Alina"}})
// .then((results) => {
//     results.forEach((person) => {
//         console.log(person.firstName, person.lastName, person.email);
//     })
// })


//delete a row from a table
// db.user.destroy({where: {id: 1}})
// .then((rowDeleted) => {
//     console.log(rowDeleted);

//     if(rowDeleted == 1) {
//         console.log('deleted sucessfully')
//     }
// })

//Using SQL directly in our code
let sequelize = db.sequelize;
sequelize.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT })
    .then(results => {
        results.forEach(record => {
            console.log(record.firstName);
        })
    })


//Update a record
db.user.findByPk(3)
.then((user) => {
    user.firstName = "Mery";
    user.save()
    .then(() => {
        console.log('record saved');
    })
})