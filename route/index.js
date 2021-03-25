const express = require('express')
const router = express.Router();
const { authenticateToken } = require('../midleware')

const users = require('./user')
const shopping = require('./shopping')

router.use('/users', users);
router.use('/shopping', authenticateToken, shopping);

module.exports = router;
