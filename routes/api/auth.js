const express = require('express')
const { controlerRegister, controlerLogin } = require('../../controllers/auth')

const router = express.Router()

router.post('/register', controlerRegister)
router.get('/login', controlerLogin)

module.exports = router