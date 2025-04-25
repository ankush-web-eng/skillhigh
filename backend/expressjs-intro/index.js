const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());
// app.use(express.static('./public'));

// ---------
function logger(req, res, next) {
    console.log('Request URL:', req.url, "Reqesut body: ",  req.body);
    next();
}

app.use(logger);
// ---------

app.get('/', function (req, res) {
    res.json('Hello World!');
})

// HTTP : HYPER TEXT TRANSFER PROTOCOL
// GET : GETTING DATA FROM SERVER
// POST : SENDING DATA TO SERVER
// PUT : UPDATING DATA ON SERVER
// DELETE : DELETING DATA FROM SERVER
// PATCH : UPDATING PARTIAL DATA ON SERVER

app.post('/post', (req, res) => {
    console.log(req.body);
    res.json('Data received!', req.body.name);
})

app.put('/random', (req, res) => {
    console.log(req.body);
    res.json('Data received!', req.body.name);
});
app.delete('/delete', (req, res) => {
    console.log(req.body);
    res.json('Data received!', req.body.name);
});

app.patch('/patch', (req, res) => {
    console.log(req.body);
    res.json('Data received!', req.body.name);
});

app.post('/post', (req, res) => {
    console.log(req.body);
    res.json('Data received!', req.body.name);
})

app.get('/ankush', function (req, res) {
    res.send('Hello Ankush!');
})


/*
What is Middleware?
Middleware in Express.js are functions that sit between
the request (req) and the response (res). They can:

- Modify the request or response.
- End the request-response cycle.
- Call the next middleware in the stack using next().
*/

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
