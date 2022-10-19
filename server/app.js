require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

//LOCAL  MODULES
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

const app = express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use(passport.initialize());
// app.use(passport.session());



mongoose.connect(process.env.MONGO_DB, () => {
	console.log('connected to db!');
});

//ROUTES
app.use('/api/user', authRoutes);
app.use('/products', productRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});