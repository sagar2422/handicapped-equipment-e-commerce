const {Product }= require('../../models/Product');

async function  getProducts(req,res) {

    try {
        const json = await Product.find();
        res.json(json);
    } catch(error) {
        console.log(error);
        res.status(404).json({error:'Products not found/Internal Server error'});
    }
}

module.exports = getProducts;