const { Campaign } = require('../../models/Campaign');

async function updateCampaign(req, res) {
	const { completedAmount, id } = req.body;
  console.log(req.body);
    try {
	const campaign = await Campaign.updateOne({ _id: id }, { completedAmount: completedAmount });
    res.status(200).json(campaign);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);  
    }

}

module.exports = updateCampaign;
