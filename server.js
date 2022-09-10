const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

const PORT = process.env.PORT;
const PASSWORD = process.env.DB_PASSWORD;
const USERNAME = process.env.DB_USERNAME;

const dbUrl = `mongodb+srv://${USERNAME}:${PASSWORD}@chatcluster.dsf3xui.mongodb.net/?retryWrites=true&w=majority`

app.use(express.static(__dirname));

const server = app.listen(`${PORT}`, () => {
    console.log(`Server is running on PORT, ${PORT}!`);
})

mongoose.connect(dbUrl, (err) => {
    console.log('mongoDB connected', err);
})