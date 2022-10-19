const mongoose = require('mongoose');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id: this._id},process.env.JWT_PRIVATE_KEY, {expiresIn:'7d'})
    return token;
}

const User = mongoose.model('User',userSchema);

const validate = (data) => {
    const schema = Joi.object({
      name: Joi.string().required().label('Name'),
      email:Joi.string().required().label('Email'),
      password: passwordComplexity().required().label('Password')
});
    return schema.validate(data);
} 

module.exports = {User,validate};