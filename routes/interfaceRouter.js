const express = require('express');
const router = express.Router();
const interfaceController = require('../controllers/interfaceController');

router.get('/Welcome', interfaceController.verifyToken  ,  (req , res)=>{
    res.render('welcome')
});

router.get('/' , (req , res)=>{
    res.render('homepage');
});

router.get('/cadastro' , (req , res)=>{
    res.render('registerpage');
})

router.get('/login' , (req , res)=>{
    res.render('loginpage');
})

module.exports = router;