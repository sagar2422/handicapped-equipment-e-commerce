const Joi = require('joi');
const bcrypt = require('bcryptjs');
const { User } = require('../../models/User');
const jwt = require('jsonwebtoken');

async function login(req, res) {
	try {
		console.log(req.body);
		const { error } = validate(req.body);
		if (error) {
			res.status(400).json({ messsage: error.details[0].message });
		}

		const newUser = await User.findOne({ email: req.body.email });
		if (!newUser) {
			res.status(401).json({ message: 'Invalid Password or Email' });
		} else {
			const validPassword = await bcrypt.compare(
				req.body.password,
				newUser.password
			);

			if (!validPassword) {
				res.status(401).json({ message: 'Invalid Password or Email' });
			} else {
				const token = jwt.sign({_id: newUser._id},process.env.JWT_PRIVATE_KEY, {expiresIn:'7d'})

				res.status(200).send({
					data: token,
					user: {
						email: newUser.email,
						name: newUser.name,
						date: newUser.date,
					},
					message: 'Logged in Successfully',
				});
			}
		}
	} catch(error) {
		console.log(error)
        res.status(500).send({message:'Server Error'});
    }
}

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().required().label('Email'),
		password: Joi.string().label('Password'),
	});
	return schema.validate(data);
};


module.exports = login;