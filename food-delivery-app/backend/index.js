const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const authRouter = require("./routes/auth.route");
const productRouter = require("./routes/product.route");
const cartRouter = require("./routes/cart.route");
const orderRouter = require("./routes/order.route");

const app = express();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';

app.use(bodyParser.json());
app.use(cors({
    origin : [process.env.FRONTEND_URL,'http://localhost:5173'],
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
}));

mongoose.connect(MONGO_URI)
    .then(() => console.log("connected to database..."))
    .catch(() => console.log("error connecting to database..."));

app.get('/', (req, res) => {
    res.send('Welcome to the Foodie API!');
})

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter);
app.use('/api/orders', orderRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
