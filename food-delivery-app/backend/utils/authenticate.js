const jwt = require('jsonwebtoken');
const SECRET = 'IAMAPIDERMAN'
const User = require('../models/user.model');

const authenticate = async (req, res, next) => {
    try {
        const header = req.headers['authorization'];
        const token = header.split(' ')[1];

        if (!token) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const verifiedToken = jwt.verify(token, SECRET);
        if (!verifiedToken) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const user = await User.findOne({ email: verifiedToken.email });
        if (!user) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        req.user = user;
        next();

    } catch (error) {
        console.error('Error in authentication:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = authenticate;