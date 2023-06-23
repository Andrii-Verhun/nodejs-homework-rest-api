const express = require('express')

const router = express.Router()

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../models/contacts')
const {errorHandler} = require('../../helpers/errorHandler')

router.get('/', async (req, res, next) => {
  try {
    const result = await listContacts()
    res.json(result)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const result = await getContactById(req.params.contactId)
    if (!result) throw errorHandler(404, 'Not found')
    res.json(result)
  } catch (error) {
    const {status, message} = error
    res.status(status).json({message})
  }
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
