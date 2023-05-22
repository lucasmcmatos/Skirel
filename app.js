require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRouter');
const interfaceRouter = require('./routes/interfaceRouter');
const mongoose = require('mongoose');
const { error } = require('console');



const userSchema = new mongoose.Schema({
    name: String,
    bio: String,
    email: String,
    foreing_key: String,
    password: String,
    contacts: {
        instagram:{
            type: String
        },
        whatsapp:{
            type: String
        },
        linkedin:{
            type: String
        },
        tel:{
            type: String
        }
    },
    downloads:{
        m_0:{
            type: String
        },
        m_1:{
            type: String
        },
        m_2:{
            type: String
        },
        m_3:{
            type: String
        },
        m_4:{
            type: String
        },
        m_5:{
            type: String
        }
    },
    networking:[{
        id_user:String,
        name_user: String,
        foreing_key_user: String
    }],
    notifications:[{
        title: String,
        body: String,
        created_date: Date
    }],
    models:[{
        model_name: String,
        model_description: String,
        model_framework: String,
        file: Buffer
    }],
    profile_image: Buffer

})

const User = mongoose.model('User' , userSchema);

let user = new User({
    name:'Usuario teste',
    bio:'Bio teste',
    email: 'Email teste',
    foreing_key: 'Foreing Key teste',
    password: 'Password teste',
    constacts:{
        instagram:'https://instagram.com',
        whatsapp: 'https://whatsapp.com',
        linkedin: 'https://linkedin.com',
        tel: '+99 99 99999-9999'
    },
    downloads:{
        m_0:'1',
        m_1: '7',
        m_2: '121',
        m_3: '2',
        m_4: '2',
        m_5: '31'
    },
    models:{
        model_name: 'Modelo teste',
        model_description: 'Descricao teste',
        model_framework: 'Scikit-learn test',
    }
})

user.save().then(doc=>{
    console.log(doc);
}).catch(err=>{console.log(err)})

mongoose.connect('mongodb://localhost:27017/Skirel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
})

let db = mongoose.connection;

db.on('error' , ()=>{console.log('Was an error!')});
db.once('open' , ()=>{console.log('Database Loaded!')});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');

app.use('/', interfaceRouter);

app.use('/auth', userRouter);

app.listen(process.env.PORT , ()=>{console.log('Server Running...')})