const ingredientsQuery = require('../../queries/recipes.query')

const fetchRecipes = () => {
    ingredients = ingredientsQuery.fetchRecipes()

    return ingredients.then(result => {
        return result.length < 1
            ? { error: 'error retreiving users', status: 404 }
            : result
    })
}

const fetchRecipe = (id) => {
    ingredient = ingredientsQuery.fetchRecipe(id)

    return ingredient.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}

module.exports = {
    fetchRecipes,
    fetchRecipe
}