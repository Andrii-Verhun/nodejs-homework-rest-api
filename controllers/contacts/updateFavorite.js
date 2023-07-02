const { updateStatusContact } = require('../../service/index')
const { errorHandler } = require('../../helpers/errorHandler')
const { patchContactFavorite } = require('../../joiSchemas/index')

const controlUpdateFavorite = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) throw errorHandler(400, 'missing field favorite')
    const { value, error } = patchContactFavorite.validate(req.body)
    if (error) {
      error.status = 400
      throw error
    }
    const result = await updateStatusContact(req.params.contactId, value)
    if (result === null) throw errorHandler(404, 'Not found')
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = controlUpdateFavorite