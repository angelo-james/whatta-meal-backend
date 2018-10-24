const ingredientsQuery = require('../queries/recipes.query')
//==================================================================
//gets all recipes for user
//==================================================================
const fetchRecipes = (userId, body) => {
    ingredients = ingredientsQuery.fetchRecipes(userId, body)

    return ingredients.then(result => {
        return result.length < 1
            ? { error: 'error retreiving users', status: 404 }
            : result
    })
}


//==================================================================
//gets specific recipe for user
//==================================================================
const fetchRecipe = (userId, recipeId) => {
    ingredient = ingredientsQuery.fetchRecipe(userId, recipeId)

    return ingredient.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}


//==================================================================
//create a new recipe for user
//==================================================================
const createRecipe = (userId, body) => {
    ingredient = ingredientsQuery.createRecipe(userId, body)

    return ingredient.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}


//==================================================================
//deletes specific recipe for user
//==================================================================
const deleteRecipe = (id) => {
    confirmDeletion = ingredientsQuery.deleteRecipe(id)

    return confirmDeletion.then(result => {
        return result.length < 1
        ? { error: 'error deleting recipe', status: 400 }
        : result
    })
}


//==================================================================
// updates specific recipe for user
//==================================================================
const updateRecipe = (id, body) => {
    confirmUpdate = ingredientsQuery.updateRecipe(id, body)

    return confirmUpdate.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}


module.exports = {
    fetchRecipes,
    fetchRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
}