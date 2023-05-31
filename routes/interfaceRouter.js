const express = require('express');
const router = express.Router();
const interfaceController = require('../controllers/interfaceController');

router.get('/Welcome', interfaceController.verifyToken  ,  (req , res)=>{
    res.render('welcome')
});

router.get('/Home' , (req , res)=>{
    res.render('homepage');
});

module.exports = router;