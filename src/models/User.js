const db = require('../config/db')

module.exports = {
	// All Example
	signup: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO users SET ?'
			db.query(sql, data, (err, result) => {
				if (!err) {
					resolve(result)
				} else {
					reject(new Error(err))
				}
			})
		})
	},

	getSingleUser: phone => {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM users WHERE phone LIKE ?'
			db.query(sql, phone, (err, result) => {
				if (!err) {
					resolve(result)
				} else {
					reject(new Error(err))
				}
			})
		})
	},

	getOtpCode: phone => {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM user_otp WHERE phone LIKE ?'
			db.query(sql, phone, (err, result) => {
				if (!err) {
					resolve(result)
				} else {
					reject(new Error(err))
				}
			})
		})
	},

	addOtpCode: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO user_otp SET ?'
			db.query(sql, data, (err, result) => {
				if (!err) {
					resolve(result)
				} else {
					reject(new Error(err))
				}
			})
		})
	},

	updateOtpCode: (data, phone) => {
		return new Promise((resolve, reject) => {
			const sql = 'UPDATE user_otp SET ? WHERE phone = ?'
			db.query(sql, [data, phone], (err, result) => {
				if (!err) {
					resolve(result)
				} else {
					reject(new Error(err))
				}
			})
		})
	},

	deleteOtpCode: phone => {
		return new Promise((resolve, reject) => {
			const sql = 'DELETE FROM user_otp WHERE phone = ?'
			db.query(sql, phone, (err, result) => {
				if (!err) {
					resolve(result)
				} else {
					reject(new Error(err))
				}
			})
		})
	},

	updateUserPin: (pin, phone) => {
		return new Promise((resolve, reject) => {
			const sql = 'UPDATE users SET pin = ? WHERE phone = ?'
			console.log(sql)
			db.query(sql, [pin, phone], (err, result) => {
				if (!err) {
					resolve(result)
				} else {
					reject(new Error(err))
				}
			})
		})
	},
}
