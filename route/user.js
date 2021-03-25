const express = require('express')
const router = express.Router();

const { authenticateToken } = require('../midleware')

const UserController = require('../controller/UserController')

router.post('/signup', UserController.SignUp);
router.post('/signin', UserController.SignIn);

router.get('/', authenticateToken, UserController.GetAllUsers);


module.exports = router;
