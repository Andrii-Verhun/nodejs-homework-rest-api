const { addContact } = require('../../service/index')
const { errorHandler } = require('../../helpers/errorHandler')
const { addContactSchema } = require('../../joiSchemas/index')

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

module.exports = controlAddNewContact