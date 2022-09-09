require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})