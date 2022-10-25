const { User } = require('../../models/User');

async function deleteItem(req, res) {
	const { id, productId } = req.body;
	try {
		const user = await User.findOneAndUpdate(
			{ _id: id },
			{ $pull: { cart: { _id: productId } } }
		);
        res.send(user)
	} catch (error) {
		console.log(error);
        res.json({error:error})
	}
}

module.exports = deleteItem;
