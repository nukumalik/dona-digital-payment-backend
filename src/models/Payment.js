const db = require('../config/db')

module.exports = {
	// Get Payment
	get: transaction_id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM payments where transaction_id='${transaction_id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create Payment
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO payments SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update Payment
	update: (transaction_id, data) => {
		return new Promise((resolve, reject) => {
			const sql = `UPDATE payments SET ? WHERE transaction_id='${transaction_id}'`

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},
}
