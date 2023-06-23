const express = require('express')

const router = express.Router()

const Joi = require('joi');

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../models/contacts')
const { errorHandler } = require('../../helpers/errorHandler')

const contactSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

router.get('/', async (req, res, next) => {
  try {
    const result = await listContacts()
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const result = await getContactById(req.params.contactId)
    if (!result) throw errorHandler(404, 'Not found')
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const validationContact = contactSchema.validate(req.body)
    if (validationContact.error) {
      throw errorHandler(400, `missing required ${validationContact.error.details[0].context.label} field`)
    }

    const newContact = await addContact(validationContact.value)
    res.status(201).json(newContact)
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
