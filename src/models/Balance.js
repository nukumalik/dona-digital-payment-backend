const db = require('../config/db')

module.exports = {
	// Get Balance
	get: userId => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM balance where user_id='${userId}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create Balance
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO balance SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update Balance
	update: (user_id, data) => {
		return new Promise((resolve, reject) => {
			const sql = 'UPDATE balance SET ? WHERE user_id = ?'

			db.query(sql, [data, user_id], (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},
}
