const express = require('express');
const path = require('path');
const app = express();

//const serveMiddleware = serveStatic(path.resolve(__dirname, 'static'));

function rootHandler (req, res){
    res.send('Hello fucking World');
    res.send('Content-Type', 'text-plain')
    res.status(201);
    res.send('<h1>Hello world!</h1>');
}

function searchHandler (req, res){
    res.send(req.query.q);
}

app.use('/assets', express.static('static'));

app.all('/', rootHandler);

app.get('/search', searchHandler);

app.listen(9000);