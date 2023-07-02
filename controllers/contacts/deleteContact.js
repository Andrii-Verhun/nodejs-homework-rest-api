const { removeContact } = require('../../service/index')
const { errorHandler } = require('../../helpers/errorHandler')

const controlDeleteContact = async (req, res, next) => {
  try {
    const result = await removeContact(req.params.contactId)
    if (result === null) throw errorHandler(404, 'Not found')
    res.json({message: 'contact deleted'})
  } catch (error) {
    next(error)
  }
}

module.exports = controlDeleteContact