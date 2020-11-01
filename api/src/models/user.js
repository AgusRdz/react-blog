const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  name: {
    firstName: String,
    lastName: String
  },
  email: {
    type: String,
    unique: true
  },
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: null
  }
})
userSchema.plugin(require('mongoose-bcrypt'))
userSchema.plugin(require('mongoose-unique-validator'), {
  message: '{PATH} should be unique'
})
userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  delete userObject.password
  delete userObject.__v

  return userObject
}

const User = mongoose.model('User', userSchema)

module.exports.User = User
