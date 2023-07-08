const jwt = require('jsonwebtoken')
const { errorHandler } = require('../helpers/errorHandler')
const { getUser } = require('../service')

const {JWT_SECRET} = process.env

const auth = async (req, res, next) => {
    try {
        const [_, token] = (req.headers.authorization || '').split(' ')
        const isValidToken = jwt.verify(token, JWT_SECRET)
        
        const user = await getUser(isValidToken.id)
        if (!user || token !== user.token) throw errorHandler(401, 'Not authorized')
        
        req.user = user
        next()
    } catch (error) {
        if (error.message === 'invalid signature' || error.message === 'jwt expired' || error.message === 'jwt must be provided') {
            error.status = 401
            error.message = 'Not authorized'
        }
        next(error)
    }
}

module.exports = auth