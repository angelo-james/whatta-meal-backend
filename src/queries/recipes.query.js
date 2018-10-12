const knex = require('./db')

fetchRecipes = (userId, body) => {
    return knex('recipes_ingredients') 
    .join('ingredients', 'ingredients.id', '=', 'recipes_ingredients.ingredients_id')
    .join('recipes', 'recipes.id', '=', 'recipes_ingredients.recipes_id')
    .join('users', 'users.id', '=', 'recipes.users_id' )
    .select('users.id as userId', 'users.name as userName', 'recipes.id as recipeId', 'recipes.name as recipeName','ingredients.id as ingredientId', 'ingredients.name as ingredientName','recipes_ingredients.quantity','recipes_ingredients.measurement')
}

fetchRecipe = (userId, body, recipeid) => {
    return knex('recipes_ingredients') 
    .join('ingredients', 'ingredients.id', '=', 'recipes_ingredients.ingredients_id')
    .join('recipes', 'recipes.id', '=', 'recipes_ingredients.recipes_id')
    .join('users', 'users.id', '=', 'recipes.users_id' )
    .select('users.id as userId', 'users.name as userName', 'recipes.id as recipeId', 'recipes.name as recipeName','ingredients.id as ingredientId', 'ingredients.name as ingredientName','recipes_ingredients.quantity','recipes_ingredients.measurement')
    .where('recipes.users_id', userId)
    .where('recipes.id', recipeid)
}

createRecipe = (userId, body) => {
    return knex('recipes')
        .insert({
            name: ingredientInfo.name,
            users_id: 2
        })
        .then(result => {
            return `'${ingredientInfo.name}' was successfully created!`
        })
        .catch(err => {
            return err.message
        })
}

module.exports = {
    fetchRecipes,
    fetchRecipe,
    createRecipe
}