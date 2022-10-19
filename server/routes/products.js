const express = require('express');
const getProduct = require('../controllers/products/getProduct');
const postProduct = require('../controllers/products/postProduct');

const router = express.Router();

router.get('/', getProduct);

router.post('/', postProduct);

module.exports = router;

