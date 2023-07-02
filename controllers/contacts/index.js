const controlGetAll = require('./getAll')
const controlGetById = require('./getById')
const controlAddNewContact = require('./addNewContact')
const controlDeleteContact = require('./deleteContact')
const controlPutContactById = require('./putContactById')
const controlUpdateFavorite = require('./updateFavorite')

module.exports = {
    controlGetAll,
    controlGetById,
    controlAddNewContact,
    controlDeleteContact,
    controlPutContactById,
    controlUpdateFavorite,
}