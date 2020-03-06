const express = require('express');
const app = express();
const http = require('http').Server(app);

const io = require('socket.io')(http);


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(require('./routes/index'));

io.on('connection', () => { //turn the socket on
    console.log('user is connected');
    socket.on('chat message', (msg) => {});
})
http.listen(3000, () => {
    console.log('server live on port 3000...');
})