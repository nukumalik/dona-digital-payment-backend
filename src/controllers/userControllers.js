// Model
const User = require('../models/User')
const uuid4 = require('uuid/v4')
const bcryptHelper = require('../helpers/bcrypt')

module.exports = {
	signup: async (req, res) => {
		const data = req.body
		data.id = uuid4()

		// Hashing password
		await bcryptHelper.hashPassword(data.password)
			.then(result => {
				data.password = result
			})
			.catch(err => {
				console.log(err)
			})

		// Saving to database
		User.addUser(data)
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
