const express = require('express')
const router = express.Router();


const ShoppingController = require('../controller/ShoppingController')

router.get('/', ShoppingController.getAll);
router.post('/', ShoppingController.Create);
router.post('/:id', ShoppingController.getById);
router.put('/:id', ShoppingController.Update);
router.delete('/:id', ShoppingController.delete);


module.exports = router;
