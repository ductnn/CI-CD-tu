require('dotenv').config()

const port = process.env.PORT || 3000;
const express = require('express');
const app = new express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
