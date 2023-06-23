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

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')).required(),
  phone: Joi.string().required(),
})

const putContactSchema = Joi.object({
  name: Joi.string().alphanum(),
  email: Joi.string().pattern(new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')),
  phone: Joi.string(),
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
    const {value, error} = addContactSchema.validate(req.body)
    if (error) {
      throw errorHandler(400, `Missing or invalid required ${error.details[0].context.label} field`)
    }

    const newContact = await addContact(value)
    res.status(201).json(newContact)
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const result = await removeContact(req.params.contactId)
    if (result) throw errorHandler(404, 'Not found')
    res.json({message: 'contact deleted'})
  } catch (error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
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
})

module.exports = router
