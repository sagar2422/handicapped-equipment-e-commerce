const express = require('express');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');

const register = require('../controllers/auth/register');
const login = require('../controllers/auth/login');
const getUser = require('../controllers/auth/getUser');
const router = express.Router();

router.post('/register', register);
router.post('/auth/login',login);
router.post('/userData',getUser);
module.exports = router;

// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 			callbackURL: '/auth/google/callback',
// 		},
// 		(accessToken, refreshToken, profile, cb) => {
// 			console.log(accessToken);
//             User.findOrCreate({ googleId: profile.id }, function (err, user) {
//                 return cb(err, user);
//               });
// 		}
// 	)
// );


// router.get('/',
//   passport.authenticate('google', { scope: ['profile'] }));

// router.get('/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });