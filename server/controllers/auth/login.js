const Joi = require('joi');
const bcrypt = require('bcryptjs');
const { User } = require('../../models/User');

async function login(req, res) {
	try {
		console.log(req.body);
		const { error } = validate(req.body);
		if (error) {
			res.status(400).json({ messsage: error.details[0].message });
		}

		const newUser = await User.findOne({ email: req.body.email });
		if (!newUser) {
			res.status(401).json({ message: 'Invalis Password or Email' });
		} else {
			const validPassword = await bcrypt.compare(
				req.body.password,
				newUser.password
			);

			if (!validPassword) {
				res.status(401).json({ message: 'Invalis Password or Email' });
			} else {
				const token = newUser.generateAuthToken();
				res.status(200).send({
					data: token,
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