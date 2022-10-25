const express = require('express');

const getWishlist = require('../controllers/wishlist/getWishlist');
const addItem = require('../controllers/wishlist/addItem');
const deleteItem = require('../controllers/wishlist/deleteItem');

const router = express.Router();

router.post('/',getWishlist);
router.post('/add',addItem);
router.post('/delete',deleteItem);

module.exports = router;