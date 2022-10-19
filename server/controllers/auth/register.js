const bcrypt = require('bcryptjs');

const { User, validate } = require('../../models/User');

async function register(req, res) {
	try {
		console.log(req.body);
		const { error } = validate(req.body);

		if (error) {
			res.status(400).json({ message: error.details[0].message });
		} else {
			const user = await User.findOne({ email: req.body.email });
			if (user) {
				res.status(409).json({ message: 'User already exists' });
			} else {
				const salt = bcrypt.genSaltSync(10);
				const hashedPassword = bcrypt.hashSync(req.body.password, salt);

				console.log(hashedPassword);
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					password: hashedPassword,
				});
				await newUser
					.save()
					.then(() =>
						res
							.status(200)
							.json({ message: 'User created successfully' })
					)
			}
		}
	} catch (err) {
        res.status(500).json({ message: err });
		console.log(err);
	}
}

module.exports = register;
