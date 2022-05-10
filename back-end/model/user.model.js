const mongoose = require('mongoose')

const User = mongoose.Schema({
    user : {
        type : String
    }
})

const UserModel = mongoose.model('user', User)

module.exports = UserModel