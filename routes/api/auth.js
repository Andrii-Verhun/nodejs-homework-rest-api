const express = require('express')
const { controlerRegister, controlerLogin, controlerLogout } = require('../../controllers/auth')
const { auth } = require('../../middleware')

const router = express.Router()

router.post('/register', controlerRegister)
router.get('/login', controlerLogin)
router.get('/logout',auth , controlerLogout)

module.exports = router