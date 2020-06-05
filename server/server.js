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


const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes')


const app = express();



mongoose.Promise = global.Promise

mongoose.connect(config.mongoURI, { useNewUrlParser: true, 
    useCreateIndex: true,         
    useUnifiedTopology: true },console.log('connected to the database'))


mongoose.connection.on('error',() =>{

    throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/', userRoutes
)

app.use('/', authRoutes)

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }else if (err) {
      res.status(400).json({"error" : err.name + ": " + err.message})
      console.log(err)
    }
  })


app.listen(config.port, (err) =>{

    if(err){
        console.log(err)
    }

    console.log(`listening on port ${config.port}`)

})