const express = require('express')

const router = express.Router()

const {
  controlGetAll,
  controlGetById,
  controlAddNewContact,
  controlDeleteContact,
  controlPutContactById
} = require('../../controlle/controlle')

router.get('/', controlGetAll )

router.get('/:contactId', controlGetById)

router.post('/', controlAddNewContact)

router.delete('/:contactId', controlDeleteContact)

router.put('/:contactId', controlPutContactById)

module.exports = router
