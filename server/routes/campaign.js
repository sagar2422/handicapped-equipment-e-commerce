const express = require('express');

const getCampaigns = require('../controllers/campaign/getCampaigns');
const addCampaign = require('../controllers/campaign/addCampaign');
const updateCampaign = require('../controllers/campaign/updateCampaign');
const getUserCampaigns = require('../controllers/campaign/getUserCampaigns');
const getCampaign = require('../controllers/campaign/getCampaign');

const router = express.Router();

router.post('/',getCampaigns);
router.post('/campaign',getCampaign);
router.post('/user',getUserCampaigns);
router.post('/add',addCampaign);
router.post('/update',updateCampaign);


module.exports = router;

