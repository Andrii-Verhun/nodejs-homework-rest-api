const fs = require('fs/promises')
const path = require('path')
const Jimp = require("jimp");

const controlUploadAvatar = async (req, res, next) => {
    const { originalname } = req.file
    const { user } = req
    const uniqueName = user.id + '-' + originalname
    
    Jimp.read(path.join(__dirname, '../../tmp', originalname)).then((avatar) => {
       return avatar.resize(250, 250).write('./public/avatars/' + uniqueName)
    }).catch(err => next(err))

    try {
        await fs.unlink(path.join(__dirname, '../../tmp', originalname))
    } catch (error) {
        next(error)
    }

    res.json({
        avatarURL: `http://localhost:3000/avatars/${uniqueName}`
    })
}

module.exports = controlUploadAvatar