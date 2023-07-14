const express = require('express')
const {
    controlerRegister,
    controlerLogin,
    controlerSubscription,
    controlerLogout,
    controlerCurrent,
    controlUploadAvatar,
} = require('../../controllers/auth')
const { auth, upload } = require('../../middleware')

const router = express.Router()

router.post('/register', controlerRegister)
router.get('/login', controlerLogin)
router.patch('/', auth, controlerSubscription)
router.get('/logout', auth, controlerLogout)
router.get('/current', auth, controlerCurrent)
router.patch('/avatars', auth, upload.single('avatar'), controlUploadAvatar)

module.exports = router