const { check } = require('express-validator')

module.exports = {
	register: [
		check('phone')
			.not()
			.isEmpty(),
		check('pin')
			.not()
			.isEmpty(),
	],
	login: [
		check('phone')
			.not()
			.isEmpty(),
		check('pin')
			.not()
			.isEmpty(),
	],
}
