const { User } = require('../../models/User');

async function getUser(req, res) {
	const id = req.body.id;
	try {
        console.log(req.body)
		const json = await User.find({ _id: id });
        console.log(json);
        res.json(json);
	} catch (error) {
        console.log(error);
		res.status(404).json({ error: 'User not found' });
	}
}

module.exports = getUser;
