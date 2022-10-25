const express = require('express');

const getCart = require('../controllers/cart/getCart');
const addItem = require('../controllers/cart/addItem');
const deleteItem = require('../controllers/cart/deleteItem');

const router = express.Router();

router.post('/',getCart);
router.post('/add',addItem);
router.post('/delete',deleteItem);

module.exports = router;

