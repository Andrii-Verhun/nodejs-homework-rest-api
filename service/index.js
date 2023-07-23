const {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
    updateStatusContact, } = require('./contacts')
    
const {
    registerUser,
    verifyUser,
    loginUser,
    updateSubscription,
    getUser,
    logoutUser,
    updateAvatar, } = require('./user')
    
const sendEmail = require('./email/sendEmail')

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
    updateStatusContact,
    registerUser,
    verifyUser,
    loginUser,
    updateSubscription,
    getUser,
    logoutUser,
    updateAvatar,
    sendEmail,
}