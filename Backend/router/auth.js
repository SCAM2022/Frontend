const express = require('express');

const authController = require('../controller/auth');

const router = express.Router();

router.get('/',authController.getSignUp);

router.post('/authenticate',authController.postSignUp);


module.exports = router;