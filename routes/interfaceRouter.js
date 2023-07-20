const express = require('express');
const router = express.Router();
const interfaceController = require('../controllers/interfaceController');

router.get('/Welcome', interfaceController.verifyToken  ,  (req , res)=>{
    res.header('authorization-token', req.header('authorization-token')) // Recebe do header da requisição e manda no header da resposta
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


module.exports = router;