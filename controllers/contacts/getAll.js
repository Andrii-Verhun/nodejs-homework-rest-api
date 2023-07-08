const {listContacts} = require('../../service/index')

const controlGetAll = async (req, res, next) => {
  try {
    const {page, limit} = req.query
    const skip = (page - 1) * limit
    const result = await listContacts(skip, limit)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = controlGetAll