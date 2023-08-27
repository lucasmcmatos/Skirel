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
const bucketname = 'skirel';
const s3 = new AWS.S3();

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
    },
    getSignedUrl:async function(req , res){
        const s3Key = `${req.query.s3}`
        const model_id = req.query.model_id
        let partes = s3Key.split('/')
        const user_id = partes[0]

        const params = {
            Bucket: bucketname,
            Key: s3Key,
            Expires: 60 * 5 
        };
        s3.getSignedUrl('getObject', params, (err, url) => {
            if (err) {
                const resp = {
                    success: false,
                    error: 'Erro ao gerar URL pré-assinada'
                }
                res.status(500).json(resp);
            } else {

                const userParams = {
                    TableName: tablename,
                    Key: {
                        'user_id':user_id
                    },
                    UpdateExpression: `set models[${model_id}].acessos = models[${model_id}].acessos + :a`,
                    ExpressionAttributeValues: {
                        ':a': 1
                    },
                    ReturnValues: 'UPDATED_NEW'
                };

                dynamodb.update(userParams, (err , data)=>{
                    if(err){
                        const resp = {
                            success: false,
                            error: err
                        }
                        res.status(400).json(resp)
                    }
                })

                const resp = {
                    success: true,
                    signedUrl: url
                }

                res.status(200).json(resp);
            }
        });
    },
    deleteModel: async function(req, res){
        const s3Key = `${req.query.s3}`
        const model_id = req.query.model_id
        let partes = s3Key.split('/')
        const user_id = partes[0]
        const model_name = partes[1]

        console.log(s3Key)

        const Bucketparams = {
            Bucket: bucketname,
            Key: s3Key
        };

        const Dynamoparams = {
            TableName: tablename,
            Key: {
                'user_id': user_id
            },
            UpdateExpression: `REMOVE models[${model_id}]`,
            ReturnValues: 'UPDATED_NEW'
        }

        dynamodb.update(Dynamoparams, async (err , data)=>{
            if(err){
                const resp = {
                    success: false,
                    error: err,
                    message: 'Error em deletar o modelo.'
                }

                res.status(400).json(resp);
            }else{
                try{
                    await s3.deleteObject(Bucketparams).promise();
                    const resp = {
                        success: true,
                        data:data,
                        message: 'Modelo deletado com sucesso.'
                    }
    
                    res.status(200).json(resp);
                }catch(error){
                    const resp = {
                        success: false,
                        error: error,
                        message: 'Error em deletar o modelo.'
                    }
    
                    res.status(400).json(resp);
                }
                
            }
        })

    }
}

module.exports = interfaceController;