const express = require('express')
const { auth } = require('../../middleware')

const router = express.Router()

const {
  controlGetAll,
  controlGetById,
  controlAddNewContact,
  controlDeleteContact,
  controlPutContactById,
  controlUpdateFavorite
} = require('../../controllers/contacts/index')

router.get('/',auth ,controlGetAll )

router.get('/:contactId',auth , controlGetById)

router.post('/',auth , controlAddNewContact)

router.delete('/:contactId',auth , controlDeleteContact)

router.put('/:contactId',auth , controlPutContactById)

router.patch('/:contactId/favorite',auth , controlUpdateFavorite)

module.exports = router
