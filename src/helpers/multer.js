const multer = require('multer')
const path = require('path')

var storageMulter = multer.diskStorage({
	destination: (req,file,callback) => {
		callback(null, './public/media/img/user_photo')
	},
	filename: (req, file, callback) => {
		callback(null, req.body.name + Date.now() + file.originalname.slice(-4))
	}
})

var fileFilter = (req, file, callback) => {
	var ext = path.extname(file.originalname)
	if (ext !== '.png' && ext !== '.jpg' && ext !== '.svg' && ext !== '.jpeg') {
		callback(null, false)
		return
	}
	callback(null, true)
}

module.exports = multer({storage: storageMulter, fileFilter})