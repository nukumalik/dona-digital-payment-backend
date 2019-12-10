const { Router } = require('express')
const router = Router()

// Example route
// End Point = localhost:port/api/v1/example
router
	// .use('/example', require('../routes/example'))
	.use('/users', require('../routes/users'))
	.use('/deals', require('../routes/deals'))
	.use('/merchants', require('../routes/merchants'))
	// .use('/payments', require('../routes/payments'))
	// .use('/ppobs', require('../routes/ppobs'))
	.use('/transactions', require('../routes/transactions'))
	// .use('/transfers', require('../routes/transfers'))
	.use('/balances', require('../routes/balances'))

module.exports = router
