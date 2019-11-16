// Model
const User = require('../models/User')
const uuid4 = require('uuid/v4')
const bcryptHelper = require('../helpers/bcrypt')
const {validationResult} = require('express-validator');

module.exports = {
	signup: async (req, res) => {
		const data = req.body
		data.id = uuid4()

		const errors = validationResult(req)
		console.log(errors)
		if (!errors.isEmpty()) {
			return res.status(422)
				.json({
					success: false,
					message: 'Field cannot be empty.',
				})
		}

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
