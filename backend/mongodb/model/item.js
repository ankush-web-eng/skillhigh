const mongoose = require('mongoose');

//* defined Schema
const itemSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    }
});

//* defined Model
const Item = mongoose.model('Item', itemSchema)

module.exports = Item;