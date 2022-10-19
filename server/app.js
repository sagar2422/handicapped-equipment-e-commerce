require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

//LOCAL  MODULES
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

const app = express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: '/auth/google/callback',
		},
		(accessToken) => {
			console.log(accessToken);
		}
	)
);

mongoose.connect(process.env.MONGO_DB, () => {
	console.log('connected to db!');
});

//ROUTES
//app.use('/api/user', authRoutes);
app.use('/products', productRoutes);
app.get('/bleg',(req,res)=>{
	res.send('gjgjgj');
});
app.get(
	'/api/user',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
