const multer = require('multer');
const Product = require('../../models/Product');

const Storage = multer.diskStorage({
	destination: 'uploads',
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({
	storage: Storage,
}).single('image');

function postProduct(req, res) {
	upload(req, res, (err) => {
		if (err) {
			console.log(err);
		} else {
			const newProduct = new Product({
				name: req.body.name,
				description: req.body.description,
				price: req.body.price,
				image: {
					data: req.file.filename,
					contentType: 'image/png',
				},
			});
			newProduct
				.save()
				.then(() => res.send('success'))
				.catch((err) => console.log(err));
		}
	});
}

module.exports = postProduct;
