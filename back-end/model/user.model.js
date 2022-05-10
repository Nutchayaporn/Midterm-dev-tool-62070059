const mongoose = require('mongoose')

const User = mongoose.Schema({
    name : {
        type : String
    },
    surname : {
        type : String
    },
    gender : {
        type : String
    },

    idcard : {
        type : String
    },

    line : {
        type : String
    }

})

const UserModel = mongoose.model('user', User)
module.exports = UserModel