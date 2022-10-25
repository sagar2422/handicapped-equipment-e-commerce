const { User } = require('../../models/User');
const {Product} = require('../../models/Product');

async function addItem(req, res) {
	const { id, productId } = req.body;
    try {
        const product = await Product.find({_id:productId})
        const user = await User.updateOne(
            {_id:id},
            {$push: {wishlist: [...product]}}
            );
        res.status(200).json(user);

    } catch (error) {
        console.log(error)
        res.status(404).json({error:error});
    }
}

module.exports = addItem;
