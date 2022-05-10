const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    title : {
        type : String
    }
})

const BlogModel = mongoose.model('phone', BlogSchema)

module.exports = BlogModel