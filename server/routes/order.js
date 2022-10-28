const express = require('express');

const getOrders = require('../controllers/order/getOrders');
const getOrder = require('../controllers/order/getOrder');
const addOrder = require('../controllers/order/addOrder');
const deleteOrder = require('../controllers/order/deleteOrder');

const router = express.Router();

router.post('/',getOrders);
router.post('/order',getOrder);
router.post('/add',addOrder);
router.post('/delete',deleteOrder);

module.exports = router;

