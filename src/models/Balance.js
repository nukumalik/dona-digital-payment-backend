const db = require('../config/db')

module.exports = {
	// Get Deal
	get: user_id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM balances where userid_='${user_id}'`

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
			const sql = 'INSERT INTO balances SET ?'

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
	update: (user_id, data) => {
		return new Promise((resolve, reject) => {
			const sql = `UPDATE balances SET ? WHERE user_id='${user_id}'`

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
