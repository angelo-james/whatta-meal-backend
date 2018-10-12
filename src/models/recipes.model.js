const ingredientsQuery = require('../queries/recipes.query')
//==================================================================

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

//==================================================================
const fetchRecipe = (userId, body, recipeid) => {
    ingredient = ingredientsQuery.fetchRecipe(userId, body, recipeid)

    return ingredient.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}
//==================================================================

//==================================================================
const createRecipe = (userId, body) => {
    ingredient = ingredientsQuery.createRecipe(userId, body)

    return ingredient.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}
module.exports = {
    fetchRecipes,
    fetchRecipe,
    createRecipe
}