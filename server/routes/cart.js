const express = require('express');

const getCart = require('../controllers/cart/getCart');
const addItem = require('../controllers/cart/addItem');
const deleteItem = require('../controllers/cart/deleteItem');

const router = express.Router();

router.post('/cart',getCart);
router.post('/cart/add',addItem);
router.post('/cart/delete',deleteItem);

module.exports = router;

