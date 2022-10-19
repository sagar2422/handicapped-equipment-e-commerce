const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    }
});

module.exports = mongoose.model('Product',productSchema);