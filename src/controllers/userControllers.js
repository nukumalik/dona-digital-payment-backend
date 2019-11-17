// Model
const User = require('../models/User')
const uuid4 = require('uuid/v4')
const bcryptHelper = require('../helpers/bcrypt')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

module.exports = {
	signup: async (req, res) => {
		const data = req.body
		data.id = uuid4()

		const errors = validationResult(req)
		console.log(errors)
		console.log(data)
		if (!errors.isEmpty()) {
			return res.status(422).json({
				status: 422,
				error: true,
				message: 'Field cannot be empty.',
			})
		}

		// Saving file path to database
		req.file.filename = data.name + req.file.filename
		data.photo = req.file.path

		// Hashing password
		await bcryptHelper
			.hashPassword(data.pin)
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
					status: 200,
					error: false,
					message: 'user succesfully added',
					user_id: data.id,
					photo: data.photo,
				})
			})
			.catch(err => {
				console.log(err)
			})
	},

	login: (req, res) => {
		const { phone, pin } = req.body
		const errors = validationResult(req)
		console.log(errors)

		//validation
		if (!errors.isEmpty()) {
			return res.status(422).json({
				status: 422,
				error: true,
				message: 'Field cannot be empty.',
			})
		}

		User.login(phone)
			.then(result => {
				if (result.length < 1) {
					res.status(401)
					res.json({
						status: 401,
						error: true,
						message: 'phone number is not registered',
					})
				} else {
					bcrypt
						.compare(pin, result[0].pin)
						.then(compareResult => {
							// console.log(result[0])
							let userData = {
								id: result[0].login,
								name: result[0].name,
								email: result[0].email,
								phone: result[0].phone,
								photo: result[0].photo,
							}
							if (compareResult) {
								const token = jwt.sign({ ...result[0] }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
								res.json({
									status: 200,
									error: false,
									message: 'Login Successful.',
									token: 'Bearer ' + token,
									data: userData,
								})
							} else {
								res.status(401)
								res.json({
									status: 401,
									error: true,
									message: 'Wrong pin.',
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
	},
}
