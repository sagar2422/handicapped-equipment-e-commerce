const { Campaign } = require('../../models/Campaign');

async function getCampaign(req, res) {
    const {id} = req.body;
	try {
		let campaign = await Campaign.findOne({_id:id});
        console.log(campaign)
        res.status(200).json(campaign);
	} catch (error) {
        console.log(error)
        res.status(404).json(error);
    }
}

module.exports = getCampaign;
