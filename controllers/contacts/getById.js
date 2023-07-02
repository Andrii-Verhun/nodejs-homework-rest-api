const { getContactById } = require('../../service/index')
const { errorHandler } = require('../../helpers/errorHandler')

const controlGetById = async (req, res, next) => {
  try {
    const result = await getContactById(req.params.contactId)
    if (result === null) throw errorHandler(404, 'Not found')
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = controlGetById