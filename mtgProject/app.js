const express = require('express');
const app = express();

//set up public folder
app.use(express.static('public'));

//set up view folder
// app.set('view engine', 'ejs');
app.set('view engine', 'ejs');

//index.ejs
//speakers.ejs

//set up route
//index.js
app.use(require('./routes/index.js'));
//cardInfo.js
app.use(require('./routes/cardInfo.js'));

app.listen(5000, () => {
	console.log('listening on port 5000');
});
