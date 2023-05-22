const express = require('express');
const router = express.Router();
const interfaceController = require('../controllers/interfaceController');

router.get('/Skirel', interfaceController.welcome);

module.exports = router;