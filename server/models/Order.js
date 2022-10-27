const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	userId: {
		type: String,
		unique: false,
		required: true,
	},
	products: {
        type: Array
    },
	total: {
		type: Number
	},
	address: {
		type: String,
		required: true
	}
},{timestamps:true});

const Order = mongoose.model('Order', orderSchema,'orders');

module.exports = { Order, orderSchema };
