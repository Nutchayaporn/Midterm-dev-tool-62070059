const express = require('express')
const mongoose = require('mongoose')
const configs = require('./configs/database.js');
const BlogModel = require('./model/model.js');
const UserModel = require('./model/user.model.js');
const phone = require("./model/phoneNum")
const app = express();
const port = 4000;

mongoose.Promise = global.Promise 
mongoose.connect(configs.mongouri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use(express.json())
app.get('/test', async(req, res) => {
    try {
        let a = new BlogModel({ title : "DED" })
        await a.save()
        const result = await BlogModel.find()
        res.send(result)
    }
    catch (err) {
        err
    }
})

app.get('/user', async(req, res) => {
    try {
       
        // let a = new UserModel({ title : "DED" })
        // await a.save()
        const result = await UserModel.find()
        console.log(result)
        res.send(result)
    }
    catch (err) {
        err
    }
})
















app.listen(port, () => {
    console.log(`run on port ${ port }`)
})
