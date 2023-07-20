require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRouter');
const interfaceRouter = require('./routes/interfaceRouter');
const AWS = require('aws-sdk');
const { error } = require('console');

// ========================== Sevidor ===============================

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/', express.json() , interfaceRouter);
app.use('/auth', express.json() , userRouter);

app.listen(process.env.PORT , ()=>{console.log('Server Running...')})

// ========================== Sevidor ===============================