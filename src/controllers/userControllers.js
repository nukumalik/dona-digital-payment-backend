// Model
const User = require('../models/User')
const uuid4 = require('uuid/v4')
const bcryptHelper = require('../helpers/bcrypt')

module.exports = {
	signup: async (req, res) => {
		const data = req.body
		data.id = uuid4()

		// Hashing password
		await bcryptHelper.hashPassword(data.pin)
			.then(result => {
				data.pin = result
			})
			.catch(err => {
				console.log(err)
			})

		// Saving to database
		User.signup(data)
			.then(() => {
				res.json({
					success: true,
					message: 'user succesfully added',
					user_id: data.id
				})
			})
			.catch(err => {
				console.log(err)
				
			})
	}
}
