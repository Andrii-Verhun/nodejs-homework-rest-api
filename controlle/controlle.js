const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact
} = require('../service/index')
const { errorHandler } = require('../helpers/errorHandler')
const { addContactSchema, putContactSchema } = require('../schemas/schemas')

const controlGetAll = async (req, res, next) => {
  try {
    const result = await listContacts()
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const controlGetById = async (req, res, next) => {
  try {
    const result = await getContactById(req.params.contactId)
    if (!result) throw errorHandler(404, 'Not found')
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const controlAddNewContact = async (req, res, next) => {
  try {
    const {value, error} = addContactSchema.validate(req.body)
    if (error) {
      throw errorHandler(400, `Missing or invalid required ${error.details[0].context.label} field`)
    }

    const newContact = await addContact(value)
    res.status(201).json(newContact)
  } catch (error) {
    next(error)
  }
}

const controlDeleteContact = async (req, res, next) => {
  try {
    const result = await removeContact(req.params.contactId)
    if (result) throw errorHandler(404, 'Not found')
    res.json({message: 'contact deleted'})
  } catch (error) {
    next(error)
  }
}

const controlPutContactById = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) throw errorHandler(400, 'missing fields')
    const {value, error} = putContactSchema.validate(req.body)
    if (error) {
      throw errorHandler(400, `Invalid ${error.details[0].context.label} field`)
    }
    const result = await updateContact(req.params.contactId, value)
    if (!result) throw errorHandler(404, 'Not found')
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const controlIsFavorite = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) throw errorHandler(400, 'missing field favorite')
    const result = await updateStatusContact(req.params.contactId, req.body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  controlGetAll,
  controlGetById,
  controlAddNewContact,
  controlDeleteContact,
  controlPutContactById,
  controlIsFavorite
}