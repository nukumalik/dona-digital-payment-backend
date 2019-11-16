const db = require('../config/db')

module.exports = {
	// All Example
	singup: (data) => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO user SET ?'
			db.query(sql, data, (err, result) => {
				if(!err) {
					resolve(result)
				} else {
					reject(new Error(err))
				}
			})
		})
	}
}
