const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validate } = require('email-validator');
const nodemailer = require('nodemailer');
const fs = require('fs');

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
                success: true,
                message: 'Usuário cadastrado com sucesso. ',
                user:{
                    email:req.body.email,
                }
            }

            res.status(200).json(resp);
        }else{
            const resp = {
                success: false,
                message: 'Erro ao fazer login. Email já foi cadastrado.',
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

        
    },
    newPassword: async function(req, res){

        const email = req.body.email

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
                    message: 'Email não cadastrado na plataforma.',
                    user:{
                        email: email
                    }
                }
    
                res.status(404).json(resp)
        }else{
            let transporter = nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user:process.env.EMAIL_USER,
                    pass:process.env.EMAIL_PASS
                }
            })
    
            fs.readFile('../Skirel/views/forgotpassEmail.html', 'utf8' , (err , html) =>{
                if(err){
                    const resp = {
                        success: false,
                        message: 'Erro ao ler arquivo.',
                        err:err
                    }
    
                    res.status(400).json(resp)
                }else{
                    let mailOptions = {
                        from: process.env.EMAIL_USER,
                        to: req.body.email,
                        subject: 'Skirel | Recuperação de acesso',
                        html:html + `<a id="contentLink" href="http://localhost:3000/password?User=${email}">Recuperar senha</a>`
                    }
    
                    transporter.sendMail(mailOptions , (error , info)=>{
                        if(error){
                            const resp = {
                                success: false,
                                message: 'Ocorreu erro no envio do email.',
                                err:error
                            }
            
                            res.status(400).json(resp)
                        }else{
                            const resp = {
                                success: true,
                                message: 'Email enviado com sucesso, verifique sua caixa de email.',
                                info:info
                            }
                
                            res.status(200).json(resp)
                        }
            
                    })
                }
            })
        }
        
        

     
       
    },
    changePassword: async function(req , res){
        const email = req.body.email
        const newPassword = bcrypt.hashSync(req.body.newPassword)

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
                message: 'Email não encontrado na plataforma.',
                user:{
                    email: email
                }
            }

            res.status(404).json(resp)
        }else{
            const user_id = result.Items[0].user_id;
            const params = {
                TableName: tablename,
                Key:{
                    user_id:user_id
                },
                UpdateExpression: 'set #pwd = :value',
                ExpressionAttributeNames: {
                  '#pwd': 'password', // Nome do atributo da senha
                },
                ExpressionAttributeValues: {
                  ':value': newPassword, // Valor da nova senha
                },
                ReturnValues: 'UPDATED_NEW',
            }

            dynamodb.update(params, (err , result)=>{
                if(err){
                    const resp = {
                        success: false,
                        message: 'Email não encontrado na plataforma.',
                        error: err
                    }

                    res.status(400).json(resp)
                }else{
                    const resp = {
                        success: true,
                        message: 'Senha alterada com sucesso.',
                        result: result
                    }
                    res.status(200).json(resp)
                }
            })
        }
    
    },
    newModel: async function(req,res){
        const email = req.body.email;

        const params = {
            TableName: tablename,
            FilterExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': email,
                },
        };
        
        const results = await dynamodb.scan(params).promise();

        if (results.Items.length == 0){

            const resp = {
                success: false,
                message: 'Error ao cadastrar novo modelo, realizar nova importação.',
                user:{
                    email: email
                }
            }

            res.status(404).json(resp)
        }else{
            const user_id = results.Items[0].user_id;
            const params = {
                TableName: tablename,
                Key:{
                    user_id:user_id
                },
                UpdateExpression: 'set models = list_append(if_not_exists(models, :empty_list), :new_object)',
                ExpressionAttributeValues: {
                    ':new_object': [{
                        name: req.body.model.name,
                        description: req.body.model.description,
                        framework: req.body.model.framework,
                        acessos: req.body.model.acessos,
                        file: req.body.model.file
                    }],
                    ':empty_list': []
                  },
                ReturnValues: 'UPDATED_NEW',
            }

            dynamodb.update(params, (err, result)=>{
                if(err){
                    const resp = {
                        success: false,
                        message: 'Novo modelo adicionado.',
                        result: result
                    }
                    res.status(400).json(resp)
                }else{
                    const resp = {
                        success: true,
                        message: 'Novo modelo adicionado.',
                        result: result
                    }
                    res.status(200).json(resp)
                }
            })
        }
    }
}

module.exports = userController;