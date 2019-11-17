// Model
const User = require('../models/User')
const uuid4 = require('uuid/v4')
const bcryptHelper = require('../helpers/bcrypt')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

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
		console.log(data.pin)
		await bcryptHelper.hashPassword(data.pin)
			.then(result => {
				data.pin = result
				console.log(data.pin)
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
	},

	login: (req, res) => {
		const {phone, pin} = req.body
		const errors = validationResult(req)
		console.log(errors)

		//validation
		if (!errors.isEmpty()) {
			return res.status(422)
				.json({
					success: false,
					message: 'Field cannot be empty.',
				})
		}

		User.login(phone)
			.then(result => {
				if (result.length < 1) {
					res.status(401)
					res.json({
						status: 401,
						success: false,
						message: 'phone number is not registered'
					})
				} else {
					bcrypt.compare(pin, result[0].pin)
						.then(compareResult => {
							// console.log(result[0])
							let userData = {
								id: result[0].login,
								name: result[0].name,
								email: result[0].email,
								phone: result[0].phone,
								photo: result[0].photo
							}
							if (compareResult) {
								const token = jwt.sign({...result[0]}, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
								res.json({
									success: true,
									message: 'Login Successful.',
									token: 'Bearer ' + token,
									data: userData
								})
							} else {
								res.status(401)
								res.json({
									status: 401,
									success: false,
									message: 'Wrong pin.'
								})
							}
						})
						.catch(error => {
							console.log(error)
						})
				}
			})
			.catch(err => {
				console.log(err)
			})
	}
}
