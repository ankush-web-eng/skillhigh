const express = require('express')
const User = require('../models/user.model');
const authenticate = require('../utils/authenticate');
const Product = require('../models/product.model');

const router = express.Router();

router.post('/add-product', authenticate, async (req, res) => {
    try {
        const { name, description, price, category, imageUrl } = req.body;

        const user = await User.findById(req.user._id);

        if (user.role != 'admin') {
            return res.status(403).json({ 'message': 'Forbidden' });
        }

        console.log(req.body)

        const newProduct = new Product({
            name,
            description,
            price,
            category,
            imageUrl
        });

        await newProduct.save();

        res.status(201).json({ 'message': 'Product added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': 'Internal server error' });
    }
});

router.get('/get-product', async (req, res) => {
    try {
        const products = await Product.find({});

        if (!products) {
            return res.status(404).json({ 'message': 'No products found' });
        }
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': 'Internal server error' });
    }
})

module.exports = router;