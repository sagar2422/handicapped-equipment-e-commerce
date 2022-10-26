const mongoose = require('mongoose');
const { productSchema } = require('./Product');
const orderSchema = new mongoose.Schema({
	userId: {
		type: String,
		unique: false,
		required: true,
	},
	products: {
        type: Array
    }
},{timestamps:true});

const Order = mongoose.model('Order', orderSchema,'orders');

module.exports = { Order, orderSchema };
