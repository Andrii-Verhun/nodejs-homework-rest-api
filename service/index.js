const Contacts = require('./schema/contacts')

const listContacts = () => {
    return Contacts.find()
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

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
}