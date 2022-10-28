const { Order } = require('../../models/Order');
const { Product } = require('../../models/Product');

async function convertProducts(orders) {
	const orders2 = await Promise.all(
		orders.map(async (order) =>
			{
				const response = await Promise.all(
					order.products.map(async (_id) => {
						const product = await Product.findOne({ _id });
						return product;
					})
				)
				return {products:response,createdAt:order.createdAt,_id:order._id,address:order.address,userId:order.userId};
			}
		)
	);
	return orders2;
}

async function getOrder(req, res) {
	const { id } = req.body;
	try {
		let orders = await Order.find({ _id: id });
		const orders2 = await convertProducts(orders);
		// console.log(orders2)
		res.status(200).json(orders2);
	} catch (error) {
		console.log(error);
		res.status(404).json({ error: error });
	}
}

module.exports = getOrder;
