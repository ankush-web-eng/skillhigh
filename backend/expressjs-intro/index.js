const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
})

app.get('/ankush', function(req, res) {
    res.send('Hello Ankush!');
})
    
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});