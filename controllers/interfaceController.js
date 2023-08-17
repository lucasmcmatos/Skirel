const jwt = require('jsonwebtoken');

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

const interfaceController = {
    verifyToken: function (req , res , next){
        
        const token = req.header('authorization-token');
    
        if(!token) return res.status(401).send('Access Denied: Do new authentication')
        
        try{
            
            const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = userVerified;
            next();

        }catch(err){
            const resp ={
                success: false,
                message: 'Access Denied: Do new authentication'
            }
            res.status(401).json(resp)
        }
    
    },
    userData: async function(req, res){
        const email = req.params.userEmail

        const params = {
            TableName: tablename,
            FilterExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': email,
                },
            };
    
        const result = await dynamodb.scan(params).promise();

        const user = result.Items[0];

        if(user){
            const resp = {
                success: true,
                message: 'Dados do usuário encontrados.',
                user: user
            }

            res.status(200).json(resp)
        }else{
            const resp = {
                success: false,
                message: 'Dados do usuário não encontrados.'
            }

            res.status(401).json(resp)
        }
    },
    allUsers: function(req, res){
        const params = {
            TableName: tablename
        };

        dynamodb.scan(params,(err,data)=>{
            if(err){
                const resp = {
                    success: false,
                    message: 'Erro em buscar usuários.',
                    error: err
                }

                res.status(400).json(resp)
            }else{
                
                const resp = {
                    success: true,
                    message: 'Usuários encontrados com sucesso.',
                    data:data
                }

                res.status(200).json(resp)
            }
        })
    }
}

module.exports = interfaceController;