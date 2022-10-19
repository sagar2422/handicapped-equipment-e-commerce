require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our connection to the mongo database
const passport = require('./passport');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

const app = express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(
	session({
		secret: process.env.APP_SECRET ,
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser


//ROUTES
app.use('/api/user',authRoutes);
app.use(productRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})