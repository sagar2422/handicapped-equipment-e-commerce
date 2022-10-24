const {Product} = require('../../models/Product');

async function getProduct(req, res) {
	const id = req.body.id;
	try {
		const json = await Product.find({ _id: id });
		res.json(json);
	} catch(err) {
        console.log(err);
        res.status(404).json({error:'Product not found'})
    }
}

module.exports = getProduct;
