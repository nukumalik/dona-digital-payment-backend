const db = require('../config/db')

module.exports = {
	// All Transaction
	all: user_id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM transactions WHERE user_id='${user_id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Get Transaction
	get: id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM transactions where id='${id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create Transaction
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO transactions SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update Transaction
	update: (id, data) => {
		return new Promise((resolve, reject) => {
			const sql = `UPDATE transactions SET ? WHERE id='${id}'`

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Delete Transaction
	// delete: id => {
	// 	return new Promise((resolve, reject) => {
	// 		const sql = `DELETE FROM transaction WHERE id='${id}'`

	// 		db.query(sql, (error, result) => {
	// 			if (!error) {
	// 				resolve(result)
	// 			} else {
	// 				reject(error)
	// 			}
	// 		})
	// 	})
	// },
}
