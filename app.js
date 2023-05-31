require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRouter');
const interfaceRouter = require('./routes/interfaceRouter');
const mongoose = require('mongoose');
const { error } = require('console');

// ====================== Banco de Dados ===================================

mongoose.connect('mongodb://localhost:27017/Skirel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
})

let db = mongoose.connection;

db.on('error' , ()=>{console.log('Was an error!')});
db.once('open' , ()=>{console.log('Database Loaded!')});

// ========================== Banco de Dados ===============================

// ========================== Sevidor ===============================

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/', express.json() , interfaceRouter);
app.use('/auth', express.json() , userRouter);

app.listen(process.env.PORT , ()=>{console.log('Server Running...')})

// ========================== Sevidor ===============================