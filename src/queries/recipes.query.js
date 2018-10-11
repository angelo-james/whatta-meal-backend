const knex = require('./db')

fetchRecipes = (userId, body) => {
    return knex('recipes_ingredients')
    // 'users.id', 'users.name', 'recipes.id', 'recipes.name', 
    .join('ingredients', 'ingredients.id', '=', 'recipes_ingredients.ingredients_id')
    .join('recipes', 'recipes.id', '=', 'recipes_ingredients.recipes_id')
    .join('users', 'users.id', '=', 'recipes.users_id' )
    .select('users.id as user id', 'users.name as users_name', 'recipes.id as recipe_id', 'recipes.name as recipe_name','ingredients.id as ingredients_id', 'ingredients.name as ingredients_name','recipes_ingredients.quantity','recipes_ingredients.measurement')
}

fetchRecipe = (userId, body, recipeid) => {
    //how to set up route so that i can get one specific ingredient.
    return knex('recipes')
        .select('recipes.id', 'recipes.name', 'recipes.users_id')
        .where('users_id', userId)
        .where('id', recipeid);
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