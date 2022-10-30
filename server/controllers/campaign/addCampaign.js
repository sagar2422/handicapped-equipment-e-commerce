const { Campaign } = require('../../models/Campaign');

async function addCampaign(req, res) {
	const { id, productId, title, description, total } = req.body;
	console.log(req.body);
	try {
		const campaign = new Campaign({
			userId: id,
			completedAmount: 0,
			productId,
			total,
			title,
			description,
		});
		campaign.save();
		console.log(campaign, 'here');
		res.status(200).json({ campaign });
	} catch (error) {
		console.log(error);
		res.status(404).json(error);
	}
}

module.exports = addCampaign;

