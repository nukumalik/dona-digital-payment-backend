// require('dotenv/config')
const JwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')

var options = {}

options.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = 'very secret key'

const db = require('../config/db')

passport.use(
	new JwtStrategy(options, (jwtPayload, done) => {
		db.query(`SELECT * FROM users WHERE id = '${jwtPayload.id}'`, (err, user) => {
			if (err) {
				return done(err, false)
			}
			if (user) {
				return done(null, user)
			} else {
				return done(null, false)
			}
		})
	})
)

module.exports = passport
