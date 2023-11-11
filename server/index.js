const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log('DB is connected'))
    .catch((err) => console.log(err));

const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

app.listen(3001, () => {
    console.log('Server is Running');
});