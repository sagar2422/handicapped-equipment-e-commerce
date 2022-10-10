const express = require('express');

const getProduct = require('../controllers/products/getProduct');

const router = express.Router();

router.get('/',getProduct);

module.exports = router;