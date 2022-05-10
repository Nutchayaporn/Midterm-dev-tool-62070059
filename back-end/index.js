const express = require('express')
const mongoose = require('mongoose')
const configs = require('./configs/database.js');
const BlogModel = require('./model/model.js');
const UserModel = require('./model/user.model.js');
const phone = require("./model/phoneNum")
const app = express();
const port = 4000;


const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
const { MeterProvider }  = require('@opentelemetry/sdk-metrics-base');

// Add your port and startServer to the Prometheus options
const options = {port: 9464, startServer: true};
const exporter = new PrometheusExporter(options);

// Register the exporter
const meter = new MeterProvider({
  exporter,
  interval: 1000,
}).getMeter('demo-prometheus');

// Now, start recording data
const counter = meter.createCounter('count_database', {
  description: 'count database'
});


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
        counter.add(1, { service_name: "myservice" });
        counter.add(1, { service_name: "myservice", status: "success", path: "/user" });
        counter.add(1, { service_name: "myservice", status: "failure", path: "/user" });
        counter.add(1, { service_name: "myservice", status: "data not found", path: "/user" });
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
