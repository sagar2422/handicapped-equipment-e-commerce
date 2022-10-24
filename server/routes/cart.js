const express = require('express');

const getCart = require('../controllers/cart/getCart');
const updateCart = require('../controllers/cart/updateCart');

const router = express.Router();

router.post('/cart',getCart);
router.post('/cart/update',updateCart);

module.exports = router;

