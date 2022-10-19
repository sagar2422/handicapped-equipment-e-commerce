const multer = require('multer');
const Product = require('../../models/Product');
const fs = require('fs')
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({
	storage: storage,
});

function postProduct(req, res) {
	const newProduct = new Product({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		image: {
			data: fs.readFileSync('uploads/'+req.file.filename),
			contentType: 'image/png',
		},
	});
	newProduct
		.save()
		.then(() => res.send('success'))
		.catch((err) => console.log(err));
}

module.exports = postProduct;
