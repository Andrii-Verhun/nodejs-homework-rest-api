const { errorHandler } = require('../../helpers/errorHandler')
const { updateSubscription } = require('../../service')

const controlerSubscription = async (req, res, next) => {
    try {
        const { user } = req
        const type = req.body.subscription
        if (type !== 'starter' && type !== 'pro' && type !== 'business') {
            throw errorHandler(400, 'Missing or invalid fields')
        }

        const result = await updateSubscription(user.id, type)
        if (!result) throw errorHandler(404, 'User not found')

        res.json({
            email: result.email,
            subscription: result.subscription,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = controlerSubscription