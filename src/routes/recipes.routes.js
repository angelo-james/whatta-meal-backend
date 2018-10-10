const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/recipes.controller');

router.get('/', ctrl.fetchRecipes)
router.get('/:id', ctrl.fetchRecipe)

module.exports = router;