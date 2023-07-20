const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validate } = require('email-validator');

// ====================== Banco de Dados ===================================

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const { param } = require('../routes/userRouter');

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-2'
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tablename = "Skirel";

// ========================== Banco de Dados ===============================

// ========================== Função para ADD novo usuário ==========================

async function checkEmailExiss(email){
    const params = {
        TableName: tablename,
        FilterExpression: 'email = :email',
        ExpressionAttributeValues: {
            ':email': email,
          },
    };

    try{
        const result = await dynamodb.scan(params).promise();
        return result.Items.length > 0;
    }catch (err){
        console.log('Erro ao verificar email.', err.message);
        return false
    }
  
}

async function addUser(name, email, password) {

    const emailExists = await checkEmailExiss(email);

    if(emailExists){
        return false;
    }

    const user = User;
        
        user.user_id = uuidv4();
        user.name = name;
        user.email = email;
        user.password = bcrypt.hashSync(password);
        user.foreingKey = bcrypt.hashSync(password + email + name);
        user.models[0].file = Buffer.from('../../../Estudos_Desenvolvedor/Modelos_de_Predicao/Modelos/sklearnModel.joblib')

    const params = {
        TableName: tablename,
        Item: user,
        
    }

    try{
        await dynamodb.put(params).promise();
        return true;
    }catch(err){
        return false;
    }

}

// ========================== Função para ADD novo usuário ==========================

const userController = {
    register: async function (req , res){

        const userRegisted = await addUser(req.body.name, req.body.email, req.body.password);

        if(userRegisted){
            res.send('Usuário cadastrado com sucesso.')
        }else{
            res.status(400).send('Email ja foi cadastrado.')
        }

    },
    login: async function (req , res){

       const{email , password} = req.body;

       const params = {
        TableName: tablename,
        FilterExpression: 'email = :email',
        ExpressionAttributeValues: {
            ':email': email,
            },
        };

        const result = await dynamodb.scan(params).promise();

        if (result.Items.length == 0){
            res.status(404).send('Email não encontrado.')
        }

        const selectedUser = result.Items[0];
        const passwordTest = selectedUser.password;
        const passwordMatch = bcrypt.compareSync(password , passwordTest)

        if(!passwordMatch){
            return res.status(400).send('Email ou senha incorretos.')

        }

        const token = jwt.sign({_id: selectedUser.user_id} , process.env.TOKEN_SECRET);

        res.header('authorization-token', token);
        res.send('Usuário logado com sucesso.');
    }  
}

module.exports = userController;