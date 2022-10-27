const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 255
    },
    description: {
        type: String,
        required:true,
    },
    total: {
        type: Number,
        required: true
    },
    completedAmount: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    productId: {
        type:String,
        required:true
    }
},{timestamps:true});

const Campaign = mongoose.model('Campaign',campaignSchema);


module.exports = {campaignSchema,Campaign};