const { loginUser } = require('../../service')
const { errorHandler } = require('../../helpers/errorHandler')
const { userEmailSchema } = require('../../joiSchemas')
const sendEmail = require('../../helpers/sendEmail')

const controlVerifyResend = async (req, res, next) => {
    try {
        if (!req.body.email) throw errorHandler(400, 'Missing required field email')
        const { value, error } = userEmailSchema.validate(req.body)
        if (error) {
            throw errorHandler(400, `Invalid required ${error.details[0].context.label} field`)
        }

        const result = await loginUser(value.email)
        if(!result) throw errorHandler(404, 'User not found')
        if (result.verify) throw errorHandler(400, 'Verification has already been passed')

        await sendEmail(result.email, result.verificationToken)
        res.json({ message: "Verification email sent" })
    } catch (error) {
        next(error)
    }

} 

module.exports = controlVerifyResend