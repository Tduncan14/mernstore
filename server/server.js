const express = require('express');
const path = require('path');
const {MongoClient} = require('mongodb')
const cors = require("cors");
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
const config = require('../config/config');
const bodyParser = require('body-parser');
const compress = require('compression');
const mongoose = require('mongoose');

const app = express();



mongoose.Promise = global.Promise

mongoose.connect(config.mongoURI, { useNewUrlParser: true, 
    useCreateIndex: true,         
    useUnifiedTopology: true })


mongoose.connection.on('error',() =>{

    throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())


app.listen(config.port, (err) =>{

    if(err){
        console.log(err)
    }

    console.log(`listening on port ${config.port}`)

})