const { logoutUser } = require('../../service')

const controlerLogout = async (req, res, next) => {
    try {
        const { user } = req
        const result = await logoutUser(user.id)
        res.status(204).json()
    } catch (error) {
        next(error)
    }
}

module.exports = controlerLogout