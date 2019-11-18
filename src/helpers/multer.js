const multer = require('multer')
const path = require('path')

let userStorage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './public/media/img/user_photo')
	},
	filename: (req, file, callback) => {
		callback(null, req.body.name + Date.now() + file.originalname.slice(-4))
	},
})

let merchantStorage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './public/media/img/merchant_logo')
	},
	filename: (req, file, callback) => {
		callback(null, req.body.name + Date.now() + file.originalname.slice(-4))
	},
})

let fileFilter = (req, file, callback) => {
	let ext = path.extname(file.originalname)
	if (ext !== '.png' && ext !== '.jpg' && ext !== '.svg' && ext !== '.jpeg') {
		callback(null, false)
		return
	}
	callback(null, true)
}

module.exports = {
	userMulter: multer({ storage: userStorage, fileFilter }),
	merchanMulter: multer({ storage: merchantStorage, fileFilter }),
}
