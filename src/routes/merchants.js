const { Router } = require('express')
const router = Router()
const upload = require('../helpers/multer').merchanMulter

// Controllers
const merchantControllers = require('../controllers/merchantControllers')

router
	.get('/', merchantControllers.allMerchant)
	.get('/:id', merchantControllers.getMerchant)
	.post('/', upload.single('photo'), merchantControllers.createMerchant)
	.patch('/:id', merchantControllers.updateMerchant)
	.delete('/:id', merchantControllers.deleteMerchant)

module.exports = router
