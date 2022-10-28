const { User } = require('../../models/User');
const { Product } = require('../../models/Product');
async function addItem(req, res) {
	const { id, productId } = req.body;
    console.log(req.body, 'here')
	try {
        const product = await Product.find({_id:productId});
        console.log(product)
		const user = await User.updateOne(
            {_id:id},
            {$push: {cart: [...product]}}
        )
        console.log(user)
        res.status(200).json(product);
	} catch (error) {
		console.log(error);
        res.status(404).json({error:'Unable to add items to cart'})
	}
}

module.exports = addItem;
