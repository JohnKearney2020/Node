const express = require('express')
const app = express();
let PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./routes/index.js'));
app.use(require('./routes/edit.js'));
app.use(require('./routes/blogs.js'));


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})