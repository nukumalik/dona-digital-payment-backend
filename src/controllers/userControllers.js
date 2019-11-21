// Model
const User = require('../models/User')
const uuid4 = require('uuid/v4')
const bcryptHelper = require('../helpers/bcrypt')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const moment = require('moment')

module.exports = {
	signup: async (req, res) => {
		const data = req.body
		data.id = uuid4()

		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(422).json({
				status: 422,
				error: true,
				message: 'Field cannot be empty.',
			})
		}

		// Saving file path to database
		if (req.file) {
			req.file.filename = data.name + req.file.filename
			data.photo = req.file.path
		}

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

		User.getSingleUser(phone)
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
								const token = jwt.sign({ ...result[0] }, 'very secret key', { expiresIn: '1h' })
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
	forgot: (req, res) => {
		const phone = req.body.phone

		User.getSingleUser(phone).then(result => {
			if (result.length < 1) {
				res.status(401)
				res.json({
					status: 401,
					error: true,
					message: 'phone number is not registered',
				})
			} else {
				let otpCode = Math.floor(1000 + Math.random() * 9000)
				User.getOtpCode(phone).then(result => {
					let expDate = moment(new Date())
						.add(10, 'm')
						.toDate()
					let data = {
						phone,
						otp_code: otpCode,
						expired_date: expDate,
					}

					if (result.length < 1) {
						User.addOtpCode(data)
							.then(() => {
								res.json({
									status: 200,
									error: false,
									message: 'otp are ready to be verified',
									data,
								})
							})
							.catch(err => {
								console.log(err)
							})
					} else {
						let dataupdate = { ...data }
						delete dataupdate.phone
						User.updateOtpCode(dataupdate, phone)
							.then(() => {
								res.json({
									status: 200,
									error: false,
									message: 'otp are ready to be verified',
									data,
								})
							})
							.catch(err => {
								console.log(err)
							})
					}
				})
			}
		})
	},

	verifyOtp: (req, res) => {
		const otpCode = req.body.otp_code
		const phone = req.body.phone

		User.getOtpCode(phone).then(result => {
			if (result.length < 1) {
				res.status(401)
				res.json({
					status: 401,
					error: true,
					message: 'phone number is not registered',
				})
			} else {
				console.log(result[0].otp_code == otpCode)
				if (parseInt(result[0].otp_code) === parseInt(otpCode)) {
					let data = {
						verified: 1,
						verify_expiration: moment(new Date())
							.add(30, 'm')
							.toDate(),
					}
					User.updateOtpCode(data, phone)
						.then(() => {
							res.json({
								status: 200,
								error: false,
								message: 'otp is verified, user can now change the pin',
								data: { ...data, phone },
							})
						})
						.catch(err => {
							console.console.log(err)
						})
				} else {
					res.status(401)
					res.json({
						status: 401,
						error: true,
						message: 'otp code is wrong',
					})
				}
			}
		})
	},

	changePin: async (req, res) => {
		let data = req.body

		// Hashing password
		await bcryptHelper
			.hashPassword(data.pin)
			.then(result => {
				data.pin = result
			})
			.catch(err => {
				console.log(err)
			})

		User.getOtpCode(data.phone).then(result => {
			if (result.length < 1) {
				res.status(401)
				res.json({
					status: 401,
					error: true,
					message: 'Verify token has been expired, verify again!',
				})
			} else {
				let isVerified = result[0].verified
				let isNotExpired = new Date(result[0].verify_expiration) < new Date()
				if (isVerified && isNotExpired) {
					User.updateUserPin(data.pin, data.phone)
						.then(() => {
							User.deleteOtpCode(data.phone)
								.then(() => {
									res.json({
										status: 200,
										error: false,
										message: 'pin has been successfuly changed',
										data,
									})
								})
								.catch(err => {
									console.log(err)
								})
						})
						.catch(err => {
							console.log(err)
						})
				} else {
					res.status(401)
					res.json({
						status: 401,
						error: true,
						message: 'Verify token has been expired, verify again!',
					})
				}
			}
		})
	},
}
