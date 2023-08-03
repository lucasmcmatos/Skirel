const AWS = require('aws-sdk');

const binaryData = ""

const userSchema = {
    user_id:'String',
    name:'String',
    email:'String',
    password:'String',
    foreingKey:'String',
    notifications:[{
        id:'String',
        owner_user:'String',
        header:'String',
        body:'String',
        createdAt:'Date'
    }]
}


module.exports = userSchema;