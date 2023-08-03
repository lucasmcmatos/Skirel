const express = require('express');
const router = express.Router();
const interfaceController = require('../controllers/interfaceController');

//  ========================== Verificação Token ===============================
router.get('/verify', interfaceController.verifyToken, (req,res)=>{
    const resp = {
        success: true,
        message: 'Acesso liberado.'
    }
    
    res.status(200).json(resp)
});

//  ========================== Verificação Token ===============================

//  ========================== Dados da Plataforma ===============================

router.get('/data/:userEmail', interfaceController.userData)

//  ========================== Dados da Plataforma ===============================

//  ========================== Paginas ===============================
router.get('/Welcome',  (req , res)=>{
    res.render('loggedpage', {query: req.query.View})
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

router.get('/password', (req,res)=>{
    res.render('showpassword', {user: req.query.User});
})
//  ========================== Paginas ===============================

module.exports = router;