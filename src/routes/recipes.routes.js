const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/recipes.controller');

router.get('/:userId/recipes', ctrl.fetchRecipes)
router.get('/:userId/recipes/:id', ctrl.fetchRecipe)

router.post('/', ctrl.createRecipe)

module.exports = router;