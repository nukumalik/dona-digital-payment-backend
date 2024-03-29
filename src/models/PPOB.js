const db = require('../config/db')

module.exports = {
	// Get PPOB
	get: transaction_id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM ppobs where transaction_id='${transaction_id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create PPOB
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO ppobs SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update PPOB
	update: (transaction_id, data) => {
		return new Promise((resolve, reject) => {
			const sql = `UPDATE ppobs SET ? WHERE transaction_id='${transaction_id}'`

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
