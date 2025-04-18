const mongoose = require('mongoose');
const express = require('express');
const Item = require('./model/item');
const bodyparser = require('body-parser');

const URI = 'mongodb://127.0.0.1:27017/test'
const app = express();
app.use(bodyparser.json());
const PORT = 3000;

mongoose.connect(URI)
    .then(function () {
        console.log('connected to database!!!')
    })
    .catch(function (err) {
        console.log(err)
    });

// get API -> get all the items from the database

app.get('/get-items', async (req, res) => {
    try {
        // db.Item.find();
        const dbItems = await Item.find();
        res.status(200).json({ dbItems });
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': "Internal Server Error" });
    }
});

//post API-> saves items into the database

app.post('/post-items', async (req, res) => {
    try {
        const { name, age } = req.body;
        // db.Item.insertOne({})
        const newItem = Item.insertOne({ name, age });
        res.status(200).json({ newItem, 'message': 'Saved into database successfully!!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': "Internal Server Error" });
    }
})

// put API -> updates entries in the database

app.put('/update-items', async (req, res) => {
    try {
        // take name -> with name -> search in the database -> update age
        const { name, age } = req.body;
        const item = await Item.findOne({ name });
        const updatedItem = await item.updateOne({ name: name, age: age });
        res.status(200).json({ 'message': 'Updated into database successfully!!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': "Internal Server Error" });
    }
})

// delete API -> deletes entries in the database

app.delete('/delete-items', async (req, res) => {
    try {
        // name -> delete with the name
        const { name } = req.body;
        const deletedItem = await Item.deleteOne({ name });
        res.status(200).json({ deletedItem, 'message': 'Deleted successfully!!' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': "Internal Server Error" });
    }
})

app.listen(PORT, function () {
    console.log(`server is running on port ${PORT}`)
});