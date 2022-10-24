const Product = require('../../models/Product');

async function  getProduct(req,res) {

    const json = await Product.find();
    res.json(json);
}

module.exports = getProduct;