const { Campaign } = require('../../models/Campaign');
const { User } = require('../../models/User');
const { Product } = require('../../models/Product');

async function getCampaigns(req, res) {
	try {
		let campaigns = await Campaign.find();
        console.log(campaigns)
        res.status(200).json(campaigns);
	} catch (error) {
        console.log(error)
        res.status(404).json(error);
    }
}

module.exports = getCampaigns;
