const {listContacts} = require('../../service/index')

const controlGetAll = async (req, res, next) => {
  try {
    const result = await listContacts()
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = controlGetAll