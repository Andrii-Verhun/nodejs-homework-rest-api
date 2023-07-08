const { errorHandler } = require("../../helpers/errorHandler")


const controlerCurrent = async (req, res, next) => {
    try {
        const { user } = req
        if (!user) throw errorHandler(401, 'Not authorized')

        const { email, subscription } = user
        res.json({
            email,
            subscription,
        })
    } catch (error) {
        next(error)
    }
    

}

module.exports = controlerCurrent