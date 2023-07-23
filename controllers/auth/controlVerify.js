const { verifyUser } = require('../../service/index')
const { errorHandler } = require('../../helpers/errorHandler')


const controlVerify = async (req, res, next) => {
    const { verificationToken } = req.params

    try {
        const result = await verifyUser(verificationToken)
        if (!result) throw errorHandler(404, 'User not found')
        res.json({message: 'Verification successful'})
    } catch (error) {
        next(error)
    }
}

module.exports = controlVerify