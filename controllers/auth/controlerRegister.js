const { registerUser } = require('../../service/')
const { userSchema } = require('../../joiSchemas')
const { errorHandler } = require('../../helpers/errorHandler')
const bcrypt = require('bcrypt')

const controlerRegister = async (req, res, next) => {
    try {
        const { value, error } = userSchema.validate(req.body)
        if (error) {
            throw errorHandler(400, `Missing or invalid required ${error.details[0].context.label} field`)
        }

        const { email, password } = value
        const salt = await bcrypt.genSalt()
        const hachedPassword = await bcrypt.hash(password, salt)

        const result = await registerUser({
            email,
            password: hachedPassword,
        })

        res.status(201).json(result)
    } catch (error) {
        if (error.code === 11000) {
            error.status = 409
            error.message = 'Email in use'
        }
        next(error)
    }
}

module.exports = controlerRegister