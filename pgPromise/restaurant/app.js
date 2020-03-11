const express = require('express');
const app = express();
let PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./routes/dishes'));
app.use(require('./routes/newdish'));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})