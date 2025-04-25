const express = require('express')
const mongoose = require('mongoose');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET = 'IAMAPIDERMAN'

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, role, address } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(400).json({ 'message': 'User already exists' });
        }

        const newUser = new User({
            name,
            email,
            password,
            role: role || 'user',
            address
        });

        await newUser.save();

        res.status(201).json({ 'message': 'User created successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': 'Internal server error' });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            res.status(404).json({ 'message': 'User not found' });
        }

        if (existingUser.password !== password) {
            res.status(401).json({ 'message': 'Invalid credentials' });
        }

        const token = jwt.sign({ email }, SECRET, { expiresIn: '7d' })

        res.status(200).json({ 'message': 'User signed in successfully', token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ 'message': 'Internal server error' });
    }
});

module.exports = router;