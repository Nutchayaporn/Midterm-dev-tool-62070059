const mongoose = require('mongoose')

const PhoneSchema = mongoose.Schema({
    phone : {
        type : String
    }
})

const PhoneModel = mongoose.model('phone', PhoneSchema)

module.exports = PhoneModel