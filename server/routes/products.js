const express = require('express');
const multer = require('multer');

const Product = require('../models/Product');
const getProduct = require('../controllers/products/getProduct');
const postProduct = require('../controllers/products/postProduct');

const router = express.Router();

const storage = multer.diskStorage({
	destination: (req,file,cb) => {
		cb (null,'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({
	storage: storage,
});

router.get('/', getProduct);

router.post('/',upload.single('image'), postProduct);

module.exports = router;

