const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/recipes.controller');


//==================================================================
// get routes for user recipes
//==================================================================
router.get('/:userId', ctrl.fetchRecipes)
router.get('/:userId/recipes/:recipeId', ctrl.fetchRecipe)


//==================================================================
//create update and delete routes for user recipes
//==================================================================
router.post('/:userId', ctrl.createRecipe)
//remove userid
router.put('/:id', ctrl.updateRecipe)
router.delete('/:id', ctrl.deleteRecipe)

module.exports = router;