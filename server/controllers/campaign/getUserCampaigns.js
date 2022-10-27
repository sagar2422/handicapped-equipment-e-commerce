const { Campaign } = require('../../models/Campaign');

async function getUserCampaigns(req, res) {
    const {id} = req.body;
	try {
		let campaigns = await Campaign.find({userId:id});
        console.log(campaigns)
        res.status(200).json(campaigns);
	} catch (error) {
        console.log(error)
        res.status(404).json(error);
    }
}

module.exports = getUserCampaigns;
