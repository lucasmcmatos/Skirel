const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const upload = multer({dest: '../temp'})

router.post('/register', userController.register);

router.post('/login' , userController.login);

router.post('/recoverAccess',userController.newPassword);

router.post('/changePassword', userController.changePassword);

router.post('/newModel',upload.single('file') ,userController.newModel)

module.exports = router;