const { Router } = require('express')
const router = Router()

// Controllers
const merchantControllers = require('../controllers/merchantControllers')

router
	.get('/', merchantControllers.allMerchant)
	.get('/:id', merchantControllers.getMerchant)
	.post('/', merchantControllers.createMerchant)
	.patch('/:id', merchantControllers.updateMerchant)
	.delete('/:id', merchantControllers.deleteMerchant)

module.exports = router
