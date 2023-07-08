const { loginUser } = require('../../service')
const { userSchema } = require('../../joiSchemas')
const { errorHandler } = require('../../helpers/errorHandler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env

const controlerLogin = async (req, res, next) => {
    try {
        const { value, error } = userSchema.validate(req.body)
        if (error) {
            throw errorHandler(400, `Missing or invalid required ${error.details[0].context.label} field`)
        }

        const { email, password } = value
        const user = await loginUser(email)
        if (!user) throw errorHandler(401, 'Email is wrong')

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) throw errorHandler(401, 'Password is wrong')

        const token = jwt.sign({ id: user._id }, JWT_SECRET, {expiresIn: '30m'})
        await loginUser(email, token)
        res.json({
            token,
            user: {
                email: user.email,
                subscription: user.subscription,
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = controlerLogin