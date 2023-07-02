const { updateContact } = require('../../service/index')
const { errorHandler } = require('../../helpers/errorHandler')
const { putContactSchema } = require('../../joiSchemas/index')

const controlPutContactById = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) throw errorHandler(400, 'missing fields')
    const {value, error} = putContactSchema.validate(req.body)
    if (error) {
      throw errorHandler(400, `Invalid ${error.details[0].context.label} field`)
    }
    const result = await updateContact(req.params.contactId, value)
    if (result === null) throw errorHandler(404, 'Not found')
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = controlPutContactById