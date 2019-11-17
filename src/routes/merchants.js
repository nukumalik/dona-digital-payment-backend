const { Router } = require('express')
const router = Router()

// Controllers
const merchantControllers = require('../controllers/merchantControllers')

router
	.get('/', merchantControllers.all)
	.get('/:id', merchantControllers.get)
	.post('/', merchantControllers.post)
	.patch('/:id', merchantControllers.patch)
	.delete('/:id', merchantControllers.delete)

module.exports = router
