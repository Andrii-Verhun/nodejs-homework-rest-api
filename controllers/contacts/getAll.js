const {listContacts} = require('../../service/index')

const controlGetAll = async (req, res, next) => {
  try {
    const {page, limit, favorite} = req.query
    const skip = (page - 1) * limit
    const result = await listContacts(skip, limit, favorite)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = controlGetAll