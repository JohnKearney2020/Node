const db = require('./models');

// db.categories.findAll()
// .then((results) => { //this is an array of objects.
//     // console.log(results);
//     results.forEach((record) => {
//         console.log(record.name);
//     })
// })

// // create some blogs
// db.blogs.create({
//     title: 'loving sequelize',
//     body: 'we love sequelize',
//     date_pub: '03/11/2020',
//     author_id: 1,
//     category_id: 1
// })
// .then((blog) => {
//     console.log(blog.id);
// })

// db.blogs.create({
//     title: 'CSS for idiots',
//     body: 'You know you need this. Come on already.',
//     date_pub: '05/24/2017',
//     author_id: 3,
//     category_id: 1
// })
// .then((blog) => {
//     console.log(blog.id);
// })

// db.blogs.create({
//     title: 'HTML for Hippies',
//     body: 'Totally awesome :)',
//     date_pub: '09/22/2018',
//     author_id: 3,
//     category_id: 1
// })
// .then((blog) => {
//     console.log(blog.id);
// })

// db.blogs.create({
//     title: 'Javascript for Everyone',
//     body: 'Yep yep yep',
//     date_pub: '12/1/1989',
//     author_id: 5,
//     category_id: 4
// })
// .then((blog) => {
//     console.log(blog.id);
// })

//=====================================
//          Joining two tables
//=====================================
db.blogs.findAll({include: [{model: db.author}]}) //this is joining the blogs table with the author table
.then((results) => { 
    results.forEach((record) => {
            console.log(`Blog name: ${record.title}, Author: ${record.author.name}`);
    })
    // console.log(`Blog name: ${results[0].title}, Author: ${results[0].author.name}`);
})

//this will NOT work
// db.author.findAll({include: [{model: db.blogs}]}) //this is joining the blogs table with the author table
// .then((results) => { 
//     console.log(`Author: ${results[3].name}, Blog name: ${results[3].blogs.title}`);
// })

//=========================================================
//          Passing Table data to EJS
//=========================================================
//this won't work technically b/c we don't have express set up
// app.get('/', (req,res) => {
//     //database call
//     db.blogs.findAll({include: [{model: db.author}]}) //this is joining the blogs table with the author table
//     .then((results) => { 
//         results.forEach((record) => {
//                 console.log(`Blog name: ${record.title}, Author: ${record.author.name}`);
//         })
//     })
//     res.render('index', {
//         results: blogs
//     });
// })

