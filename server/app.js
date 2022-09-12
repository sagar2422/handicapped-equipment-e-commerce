require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const products = require('./routes/products');

const app = express();
app.use(express.json());


app.use(products);

const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})