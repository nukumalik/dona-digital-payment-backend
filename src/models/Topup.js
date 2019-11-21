const db = require('../config/db')

module.exports = {
	// Get Deal
	get: transaction_id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM topups where transaction_id='${transaction_id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create Deal
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO topups SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update Deal
	update: (transaction_id, data) => {
		return new Promise((resolve, reject) => {
			const sql = `UPDATE topups SET ? WHERE transaction_id='${transaction_id}'`

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
