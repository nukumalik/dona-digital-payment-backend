// Model
const Transaction = require('../models/Transaction')
const Transfer = require('../models/Transfer')
const Payment = require('../models/Payment')
const PPOB = require('../models/PPOB')
const Topup = require('../models/Topup')
const Balance = require('../models/Balance')

module.exports = {
	// All Transaction
	allTransaction: (req, res) => {
		// User ID
		const { user_id } = req.params

		Transaction.all(user_id)
			.then(async result => {
				let dataResult = []
				for (let i = 0; i < result.length; i++) {
					if (result[i].type === 'topup') {
						await Topup.get(result[i].id).then(data => {
							dataResult.push({ ...data[0], transaction_type: 'topup' })
						})
					}

					if (result[i].type === 'ppob') {
						await PPOB.get(result[i].id).then(data => {
							dataResult.push({ ...data[0], transaction_type: 'ppob' })
						})
					}
				}

				res.json({
					status: 200,
					error: false,
					message: 'Success get all transactions',
					data: dataResult,
				})
			})
			.catch(error => {
				res.status(500).json({
					status: 500,
					error: true,
					message: 'Failed to get transaction',
					data: error,
				})
			})
	},

	// Create Transaction By ID
	createTransaction: (req, res) => {
		// Body Fields
		const { user_id } = req.params
		const { type } = req.body

		// ID
		const today = new Date()
		const time = String(today.getTime())
		const dd = String(today.getDate()).padStart(2, '0')
		const mm = String(today.getMonth() + 1).padStart(2, '0')
		const year = today.getFullYear()
		const id = `${year}-${mm}${dd}-${time}`

		// Data
		const data = { id, user_id, type }

		Transaction.create(data)
			.then(async () => {
				if (type === 'payment') {
					const transaction_id = id
					const { merchant_id, amount, description } = req.body
					const paymentData = { transaction_id, merchant_id, amount, description }

					// Update user balance
					const userBalance = Balance.get(user_id).data[0].amount
					if (amount > userBalance) {
						return res.status(400).json({
							status: 400,
							error: true,
							message: 'Your amount is not enough',
							data: [],
						})
					} else {
						Balance.update(user_id, { amount: userBalance - amount })
					}

					Payment.create(paymentData)
						.then(data => {
							res.status(200).json({
								status: 200,
								error: false,
								message: 'Success to create an transaction',
								data,
							})
						})
						.catch(error => {
							res.status(400).json({
								status: 400,
								error: true,
								message: 'Failed to create transaction',
								data: error,
							})
						})
				}

				if (type === 'ppob') {
					const transaction_id = id
					const { merchant_id, phone, nominal, amount, type_ppob } = req.body
					const order_at = new Date()
					const status = 'pending'
					const ppobData = { transaction_id, merchant_id, phone, type: type_ppob, nominal, amount, status, order_at }
					PPOB.create(ppobData)
						.then(async data => {
							const userBalance = await Balance.get(user_id)
							Balance.update(user_id, { amount: parseInt(userBalance[0].amount) - parseInt(amount) })
								.then(() => {})
								.catch(err => console.log(err))

							res.status(200).json({
								status: 200,
								error: false,
								message: 'Success to create an transaction',
								data,
							})
						})
						.catch(error => {
							res.status(400).json({
								status: 400,
								error: true,
								message: 'Failed to create transaction',
								data: error,
							})
						})
				}

				if (type === 'topup') {
					console.log('asdf')
					const transaction_id = id
					const { merchant_id, amount, method } = req.body
					const topupData = { transaction_id, merchant_id, amount, method }

					const userBalance = await Balance.get(user_id)
					Balance.update(user_id, { amount: parseInt(userBalance[0].amount) + parseInt(amount) })
						.then(() => {})
						.catch(err => console.log(err))

					Topup.create(topupData)
						.then(data => {
							res.status(200).json({
								status: 200,
								error: false,
								message: 'Success to create an transaction',
								data,
							})
						})
						.catch(error => {
							console.log(error)
							res.status(400).json({
								status: 400,
								error: true,
								message: 'Failed to create transaction',
								data: error,
							})
						})
				}

				if (type === 'transfer') {
					const transaction_id = id
					const sender_id = req.params.user_id
					const { receiver_id, amount } = req.body
					const transferData = { transaction_id, sender_id, receiver_id, amount }

					// Update user balance
					const userBalance = Balance.get(user_id).data[0].amount
					if (amount > userBalance) {
						return res.status(400).json({
							status: 400,
							error: true,
							message: 'Your amount is not enough',
							data: [],
						})
					} else {
						Balance.update(user_id, { amount: userBalance - amount })
					}

					Transfer.create(transferData)
						.then(data => {
							res.status(200).json({
								status: 200,
								error: false,
								message: 'Success to create an transaction',
								data,
							})
						})
						.catch(error => {
							res.status(400).json({
								status: 400,
								error: true,
								message: 'Failed to create transaction',
								data: error,
							})
						})
				}
			})
			.catch(error => {
				res.status(400).json({
					status: 400,
					error: true,
					message: 'Failed to create transaction',
					data: error,
				})
			})
	},

	// Get Transaction By ID
	getTransaction: (req, res) => {
		// Transaction ID
		const { id } = req.params

		Transaction.get(id)
			.then(result => {
				// Type Transfer
				if (result.type === 'transfer') {
					Transfer.get(id).then(data => {
						res.status(200).json({
							status: 200,
							error: false,
							message: 'Success to get transfer transaction with transaction ID: ' + id,
							data,
						})
					})
				}

				// Type Payment
				if (result.type === 'payment') {
					Payment.get(id).then(data => {
						res.status(200).json({
							status: 200,
							error: false,
							message: 'Success to get payment transaction with transaction ID: ' + id,
							data,
						})
					})
				}

				// Type PPOB
				if (result.type === 'ppob') {
					PPOB.get(id).then(data => {
						res.status(200).json({
							status: 200,
							error: false,
							message: 'Success to get PPOB transaction with transaction ID: ' + id,
							data,
						})
					})
				}

				// Type Topup
				if (result.type === 'topup') {
					Topup.get(id).then(data => {
						res.status(200).json({
							status: 200,
							error: false,
							message: 'Success to get topup transaction with transaction ID: ' + id,
							data,
						})
					})
				}
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Transaction does not exists',
					data: error,
				})
			})
	},

	// Update Transaction By ID
	updateTransaction: (req, res) => {
		// Transaction ID
		const { id } = req.params

		// Body Fields
		const { transaction_id, merchant_id, amount, description } = req.body

		// Data
		const data = {}
		if (transaction_id) data.transaction_id = transaction_id
		if (merchant_id) data.merchant_id = merchant_id
		if (amount) data.amount = amount
		if (description) data.description = description
		data.paid_at = new Date()

		Transaction.update(data)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to update transaction with ID: ' + id,
					data,
				})
			})
			.catch(error => {
				res.status(400).json({
					status: 400,
					error: true,
					message: 'Failed to update exmaple with ID: ' + id,
					data: error,
				})
			})
	},

	// Delete Transaction By ID
	deleteTransaction: (req, res) => {
		// Transaction ID
		const { id } = req.params

		Transaction.delete(id)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to Delete transaction with ID: ' + id,
					data: [],
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Transaction does not exists',
					data: error,
				})
			})
	},
}
