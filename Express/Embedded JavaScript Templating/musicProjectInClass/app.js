const express = require('express');
const app = express();

//set up public folder
app.use(express.static('public'));

//set up view folder
app.set('view engine', 'ejs');

//index.ejs
//speakers.ejs

//set up route
//index.js
app.use(require('./controllers/index'));
//speakers.js
app.use(require('./controllers/speakers'));
app.use(require('./controllers/feedback'));
app.use(require('./controllers/api'));

app.listen(4000, () => {
	console.log('listening on port 4000');
});
