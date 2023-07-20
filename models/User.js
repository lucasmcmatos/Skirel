const AWS = require('aws-sdk');

const binaryData = ""

const userSchema = {
    user_id:'NULL',
    name:'NULL',
    email:'NULL',
    password:'NULL',
    bio:'NULL',
    foreingKey:'NULL',
    model_access:'NULL',
    contacts:{
        instagram:'NULL',
        facebook:'NULL',
        whatsapp:'NULL',
        linkedin:'NULL'
    },
    models:[
        {
            name:'NULL',
            description:'NULL',
            framework:'NULL'
        }
    ],
    networking:[{
        name:'NULL',
        foreingKey:'NULL',
        id:'NULL'
    }],
    notifications:[{
        header:'NULL',
        body:'NULL'
    }]
}


module.exports = userSchema;