const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ingredients.controller');
//==================================================================

//==================================================================
router.get('/', ctrl.fetchIngredients)
router.get('/:id', ctrl.fetchIngredient)
//==================================================================

//==================================================================
router.post('/', ctrl.createIngredient)

module.exports = router;