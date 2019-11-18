// Model
const Transaction = require('../models/Transaction')
const Transfer = require('../models/Transfer')
const Payment = require('../models/Payment')
const PPOB = require('../models/PPOB')
const Topup = require('../models/Topup')

module.exports = {
	// All Transaction
	allTransaction: (req, res) => {
		// User ID
		const { user_id } = req.prams

		Transaction.all(user_id)
			.then(result => {
				// Type Transfer
				if (result.type === 'transfer') {
					for (let i = 0; i <= result.length; i++) {
						Transfer.get(result.id[i]).then(data => {
							res.status(200).json({
								status: 200,
								error: false,
								message: 'Success to get all transaction with transfer type',
								data,
							})
						})
					}
				}

				// Type Payment
				if (result.type === 'payment') {
					for (let i = 0; i <= result.length; i++) {
						Payment.get(result.id[i]).then(data => {
							res.status(200).json({
								status: 200,
								error: false,
								message: 'Success to get all transaction with payment type',
								data,
							})
						})
					}
				}

				// Type PPOB
				if (result.type === 'ppob') {
					for (let i = 0; i <= result.length; i++) {
						PPOB.get(result.id[i]).then(data => {
							res.status(200).json({
								status: 200,
								error: false,
								message: 'Success to get all transaction with PPOB type',
								data,
							})
						})
					}
				}

				// Type Topup
				if (result.type === 'topup') {
					for (let i = 0; i <= result.length; i++) {
						Topup.get(result.id[i]).then(data => {
							res.status(200).json({
								status: 200,
								error: false,
								message: 'Success to get all transaction with topup type',
								data,
							})
						})
					}
				}
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
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an transaction',
					data: result,
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
	// updateTransaction: (req, res) => {
	// 	// Transaction ID
	// 	const { id } = req.params

	// 	// Body Fields
	// 	const { transaction_id, merchant_id, amount, description } = req.body

	// 	// Data
	// 	const data = {}
	// 	if (transaction_id) data.transaction_id = transaction_id
	// 	if (merchant_id) data.merchant_id = merchant_id
	// 	if (amount) data.amount = amount
	// 	if (description) data.description = description
	// 	data.paid_at = new Date()

	// 	Transaction.update(data)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to update transaction with ID: ' + id,
	// 				data,
	// 			})
	// 		})
	// 		.catch(error => {
	// 			res.status(400).json({
	// 				status: 400,
	// 				error: true,
	// 				message: 'Failed to update exmaple with ID: ' + id,
	// 				data: error,
	// 			})
	// 		})
	// },

	// Delete Transaction By ID
	// deleteTransaction: (req, res) => {
	// 	// Transaction ID
	// 	const { id } = req.params

	// 	Transaction.delete(id)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to Delete transaction with ID: ' + id,
	// 				data: [],
	// 			})
	// 		})
	// 		.catch(error => {
	// 			res.status(404).json({
	// 				status: 404,
	// 				error: true,
	// 				message: 'Transaction does not exists',
	// 				data: error,
	// 			})
	// 		})
	// },
}
