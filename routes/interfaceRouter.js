const express = require('express');
const router = express.Router();
const interfaceController = require('../controllers/interfaceController');

// router.get('/Welcome', interfaceController.verifyToken  ,  (req , res)=>{
//     res.render('loggedpage')
// });

router.get('/Welcome' ,  (req , res)=>{

    res.render('loggedpage', {query: req.query.View}) // TEMPORARIO, QUANDO FOR USAR, DESCOMENTAR O DE CIMA 
});

router.get('/' , (req , res)=>{
    res.render('homepage');
});

router.get('/Cadastro' , (req , res)=>{
    res.render('registerpage');
})

router.get('/Login' , (req , res)=>{
    res.render('loginpage');
})

router.get('/Recuperar_Senha', (req , res)=>{
    res.render('forgotpassword');
})


module.exports = router;