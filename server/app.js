const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const index = require('./routes/index');
var app = express();

require('dotenv').config();

mongoose.connect('mongodb://agnynureza:bandung1@ds123919.mlab.com:23919/react-password-manager',{ useNewUrlParser: true })
        .then(
            ()=> {console.log(`Connect To Database Capt!`)},
            err => {console.log(`Error connect to Database !!`)}
        )
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use('/',index)

module.exports = app;
