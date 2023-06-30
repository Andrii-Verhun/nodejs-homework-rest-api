const express = require('express')

const router = express.Router()

const {
  controlGetAll,
  controlGetById,
  controlAddNewContact,
  controlDeleteContact,
  controlPutContactById,
  controlUpdateFavorite
} = require('../../controllers/contacts/index')

router.get('/', controlGetAll )

router.get('/:contactId', controlGetById)

router.post('/', controlAddNewContact)

router.delete('/:contactId', controlDeleteContact)

router.put('/:contactId', controlPutContactById)

router.patch('/:contactId/favorite', controlUpdateFavorite)

module.exports = router
