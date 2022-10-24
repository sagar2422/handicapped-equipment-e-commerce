const { User } = require('../../models/User');
const { Product } = require('../../models/Product');
async function updateCart(req, res) {
	const { id, productId } = req.body;
	try {
        const product = await Product.find({_id:productId});
		const user = await User.updateOne(
            {_id:id},
            {$push: {cart: [...product]}}
        )
        res.status(200).json(product);
	} catch (error) {
		console.log(error);
        res.status(404).json({error:'Unable to add items to cart'})
	}
}

module.exports = updateCart;
