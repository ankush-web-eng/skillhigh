const express = require('express')
const User = require('../models/user.model');
const authenticate = require('../utils/authenticate');
const Product = require('../models/product.model');
const Cart = require('../models/cart.model');
const Order = require('../models/order.model');

const router = express.Router();

router.post('/place', authenticate, async (req, res) => {
    try {
        const userId = req.user._id;

        const cart = await Cart.findOne({ user: userId }).populate('items.product');
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ 'message': 'Cart is empty' });
        }

        const totalAmount = cart.items.reduce((total, item) => {
            return Number(total) + (Number(item.product.price) * Number(item.quantity));
        }, 0);

        const order = new Order({
            user: userId,
            totalAmount,
            items: cart.items.map(item => ({
                product: item.product._id,
                quantity: item.quantity
            }))
        })

        await order.save();
        await Cart.findOneAndDelete({ user: userId });

        res.status(201).json({ 'message': 'Order placed successfully!!' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': 'Internal server error' });
    }
});

router.get('/my-orders', authenticate, async (req, res) => {
    try {
        const products = await Order.find({ user: req.user._id }).populate('items.product').sort({ createdAt: -1 });

        if (!products) {
            return res.status(404).json({ 'message': 'No Orders found' });
        }
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': 'Internal server error' });
    }
})

module.exports = router;