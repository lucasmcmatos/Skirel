// Node's configs ==============================================================
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Multer configs ==============================================================
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage:storage})

// Route's structures ==========================================================
router.post('/register', userController.register);

router.post('/login' , userController.login);

router.post('/recoverAccess',userController.newPassword);

router.post('/changePassword', userController.changePassword);

router.post('/requestContact', userController.requestContact);

router.post('/uploadfile', upload.single('modelfile'), userController.uploadfile);

router.post('/cancelContact', userController.cancelContact);

router.post('/acceptContact', userController.acceptContact);

router.post('/removeNetworking', userController.removeNetworking);

router.post('/updateBio', userController.updateBio);

router.post('/updateContacts', userController.updateContacts);

module.exports = router;