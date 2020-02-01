const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const moment = require('moment');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

io.on('connect', (socket) => {
    console.log('a client connected');
    socket.on('disconnect', function(){
        console.log('a client disconnected');
    });
});

// pass io
app.use((req, res, next) => {
    req.io = io;
    next();
});

app.get('/', (req, res, next) => {
    res.render('index.ejs');
});

app.post('/', (req, res, next) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    let data = {
        date: moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
        ip: ip,
        data: req.body
    }

    io.emit('body_result', data);
    res.sendStatus(200);
});

module.exports = {
    http: http
}