const {Order} = require('../../models/Order');

async function getOrders(req,res) {
try {
    const orders = await Order.find();
    res.status(200).json(orders);
} catch (error) {
    console.log(error);
    res.status(404).json(error);
}
}

module.exports = getOrders;