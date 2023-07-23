const User = require('./schema/user')

const registerUser = (body) => {
    return User.create(body)
}

const verifyUser = (verifyToken) => {
    return User.findOneAndUpdate({ verificationToken: verifyToken }, { verificationToken: null, verify: true }, { new: true })
}

const loginUser = (email, token = null) => {
    if (token) {
        return User.findOneAndUpdate({email}, {token})
    }
    return User.findOne({email})
}

const updateSubscription = (id, type) => {
    return User.findByIdAndUpdate({_id: id}, {subscription: type}, {new: true})
}

const getUser = (id) => {
    return User.findOne({_id: id})
}

const logoutUser = (id) => {
    return User.findByIdAndUpdate({_id: id}, {token: ''})
}

const updateAvatar = (id, avatarURL) => {
    return User.findByIdAndUpdate({_id: id}, {avatarURL})
}

module.exports = {
    registerUser,
    verifyUser,
    loginUser,
    updateSubscription,
    getUser,
    logoutUser,
    updateAvatar,
}