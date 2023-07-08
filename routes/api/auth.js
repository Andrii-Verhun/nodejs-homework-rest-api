const express = require('express')
const { controlerRegister } = require('../../controllers/auth')

const router = express.Router()

router.post('/register', controlerRegister)

module.exports = router