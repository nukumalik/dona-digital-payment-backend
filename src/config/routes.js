const { Router } = require('express')
const router = Router()

// Example route
// End Point = localhost:port/api/v1/example
router.use('/example', require('../routes/example'))

module.exports = router
