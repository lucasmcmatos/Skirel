const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String , required: true , minlenght: 3, maxlenght: 50},
    bio: {type: String , maxlenght: 3000},
    email: {type: String , required: true,  minlenght: 3, maxlenght: 100},
    foreing_key: {type: String , minlenght: 6, maxlenght: 200},
    password: {type: String , required: true , minlenght: 6, maxlenght: 200},
    createdAt:{ type: Date, default: Date.now} ,
    contacts: {
                instagram:{ type: String },
                whatsapp:{ type: String },
                linkedin:{ type: String },
                tel:{ type: String }
               },
    downloads:{
                m_0: {
                    data: {type: String},
                    createdAt: { type: Date , default: Date.now}
                },
                m_1: {
                    data: {type: String},
                    createdAt: { type: Date , default: Date.now}
                },
                m_2: {
                    data: {type: String},
                    createdAt: { type: Date , default: Date.now}
                },
                m_3: {
                    data: {type: String},
                    createdAt: { type: Date , default: Date.now}
                },
                m_4: {
                    data: {type: String},
                    createdAt: { type: Date , default: Date.now}
                },
                m_5: {
                    data: {type: String},
                    createdAt: { type: Date , default: Date.now}
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
    }]
})

module.exports = mongoose.model('User' , userSchema);