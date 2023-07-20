const jwt = require('jsonwebtoken');

const interfaceController = {
    verifyToken: function (req , res , next){
        
        const token = req.header('authorization-token');
    
        if(!token) return res.status(401).send('Access Denied: Do new authentication')
        
        try{
            
            const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = userVerified;
            next();

        }catch(err){

            res.status(401).send('Access Denied: Do new authentication')

        }
    
    }
}

module.exports = interfaceController;