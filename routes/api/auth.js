const express = require('express')
const {
    controlerRegister,
    controlerLogin,
    controlerSubscription,
    controlerLogout,
    controlerCurrent,
} = require('../../controllers/auth')
const { auth } = require('../../middleware')

const router = express.Router()

router.post('/register', controlerRegister)
router.get('/login', controlerLogin)
router.patch('/', auth, controlerSubscription)
router.get('/logout', auth, controlerLogout)
router.get('/current', auth, controlerCurrent)

module.exports = router