const { Order } = require('../../models/Order');
const { User } = require('../../models/User');
async function addOrder(req, res) {
	const { id, productIds,address } = req.body;
	try {
		const order = new Order({
			products: productIds,
			userId: id,
			address: address
		});

		await order.save();
		res.status(200).json(order);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: error });
	}
}

module.exports = addOrder;
