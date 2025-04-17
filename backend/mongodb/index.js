const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/test'

mongoose.connect(URI)
    .then(function () {
        console.log('connected to databse!!!')
    })
    .catch(function (err) {
        console.log(err)
    });