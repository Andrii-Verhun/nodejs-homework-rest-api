const controlerRegister = require('./controlerRegister')
const controlVerify = require('./controlVerify')
const controlVerifyResend = require('./controlVerifyResend')
const controlerLogin = require('./controlerLogin')
const controlerSubscription = require('./controlerSubscription')
const controlerLogout = require('./controlerLogout')
const controlerCurrent = require('./controlerCurrent')
const controlUploadAvatar = require('./controlUploadAvatar')

module.exports = {
    controlerRegister,
    controlVerify,
    controlVerifyResend,
    controlerLogin,
    controlerSubscription,
    controlerLogout,
    controlerCurrent,
    controlUploadAvatar,
}