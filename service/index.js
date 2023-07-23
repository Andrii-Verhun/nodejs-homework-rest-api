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
    updateAvatar,} = require('./user')

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
}