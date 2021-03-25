const express = require('express')
const router = express.Router();

const { authenticateToken } = require('../midleware')

const ShoppingController = require('../controller/ShoppingController')

router.get('/', authenticateToken, ShoppingController.getAll);
router.post('/', authenticateToken, ShoppingController.Create);
router.post('/:id', authenticateToken, ShoppingController.getById);
router.put('/:id', authenticateToken, ShoppingController.Update);
router.delete('/:id', authenticateToken, ShoppingController.delete);


module.exports = router;
