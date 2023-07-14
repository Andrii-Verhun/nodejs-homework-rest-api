const { Schema, model } = require('mongoose')

const user = new Schema({
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  avatarURL: {
    type: String,
    default: '',
  },
  token: String,
}, {timestamps: true, versionKey: false})

const User = model('users', user)

module.exports = User