const express = require('express');
const mongoose = require('mongoose');
const authRouter = require("./routes/auth.route");
const bodyParser = require('body-parser');

const app = express();
const MONGO_URI = ' mongodb://127.0.0.1:27017';

app.use(bodyParser.json());

mongoose.connect(MONGO_URI)
.then(() => console.log("connected to database..."))
.catch(() => console.log("error connecting to database..."));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api/auth', authRouter);