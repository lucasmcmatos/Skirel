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
            const resp = {
                succes: true,
                message: 'USUÁRIO CADASTRADO COM SUCESSO. ',
                user:{
                    email:req.body.email,
                }
            }

            res.status(200).json(resp);
        }else{
            const resp = {
                succes: false,
                message: 'ERRO AO FAZER LOGIN. Email já foi cadastrado.',
                user:{
                    email:req.body.email,
                }
            }
            res.status(400).json(resp)
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

            const resp = {
                success: false,
                message: 'Email não encontrado.',
                user:{
                    email: email
                }
            }

            res.status(404).json(resp)
        }else{
            const selectedUser = result.Items[0];
            const passwordTest = selectedUser.password;
            const passwordMatch = bcrypt.compareSync(password , passwordTest)

            if(!passwordMatch){

                const resp = {
                    success: false,
                    message: 'Email ou senha incorretos.',
                    user:{
                        email: email
                    }
                }

                return res.status(400).json(resp)

            }else{
                const token = jwt.sign({_id: selectedUser.user_id} , process.env.TOKEN_SECRET);

                const resp = {
                    success: true,
                    message: 'Usuário logado com sucesso',
                    user:{
                        email: email,
                        token: token
                    }
                }

                res.status(200).json(resp);
            }

           
        }

        
    }  
}

module.exports = userController;