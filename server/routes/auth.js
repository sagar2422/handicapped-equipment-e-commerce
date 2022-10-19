const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register',async (req,res)=> {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.status(200).send(savedUser);
        console.log(savedUser);
    }catch(err) {
        res.status(400).send(err);
        console.log(err);
    }
});

module.exports = router;