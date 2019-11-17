const db = require('../config/db')

module.exports = {
	// All Merchant
	all: () => {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM merchants'

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Get Merchant
	get: id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM merchants where id='${id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create Merchant
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO merchants SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update Merchant
	update: (id, data) => {
		return new Promise((resolve, reject) => {
			const sql = 'UPDATE merchants SET ? WHERE id = ?'

			db.query(sql, [id, data], (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Delete Merchant
	delete: id => {
		return new Promise((resolve, reject) => {
			const sql = `DELETE FROM merchants WHERE id='${id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},
}
