const express = require('express');
const loginRouter = express.Router();
const { loginController } = require('../controllers/loginController');

loginRouter.post('/login', loginController);

module.exports = loginRouter;