const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.use(express.static(__dirname));

const server = app.listen(`${PORT}`, () => {
    console.log(`Server is running on PORT, ${PORT}!`);
})