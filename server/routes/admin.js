const express = require('express');

const getOrders = require('../controllers/admin/getOrders');
const getUsers = require('../controllers/admin/getUsers');
const router = express.Router();

router.post('/getOrders', getOrders);
router.post('/getUsers', getUsers);
// router.post('/userData',getUser);

module.exports = router;
