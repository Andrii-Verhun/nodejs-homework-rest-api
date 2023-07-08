const Contacts = require('./schema/contacts')
const User = require('./schema/user')

const listContacts = (skip, limit) => {
    return Contacts.find().skip(skip).limit(limit)
}

const getContactById = (id) => {
    return Contacts.findOne({_id: id})
}

const addContact = (body) => {
    return Contacts.create(body)
}

const removeContact = (id) => {
    return Contacts.findByIdAndRemove({_id: id})
}

const updateContact = (id, body) => {
    return Contacts.findByIdAndUpdate({_id: id}, body, {new: true})
}

const updateStatusContact = (id, body) => {
    return Contacts.findByIdAndUpdate({ _id: id }, body, { new: true })
}

const registerUser = (body) => {
    return User.create(body)
}

const loginUser = (email, token = null) => {
    if (token) {
        return User.findOneAndUpdate({email}, {token})
    }
    return User.findOne({email})
}

const getUser = (id) => {
    return User.findOne({_id: id})
}

const logoutUser = (id) => {
    return User.findByIdAndUpdate({_id: id}, {token: ''})
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
    updateStatusContact,
    registerUser,
    loginUser,
    getUser,
    logoutUser,
}