const knex = require('./db')
//==================================================================

//==================================================================
fetchRecipes = (userId, body) => {
    return knex('recipes_ingredients') 
    .join('ingredients', 'ingredients.id', '=', 'recipes_ingredients.ingredients_id')
    .join('recipes', 'recipes.id', '=', 'recipes_ingredients.recipes_id')
    .join('users', 'users.id', '=', 'recipes.users_id' )
    .select('users.id as userId', 'users.name as userName', 'recipes.id as recipeId', 'recipes.name as recipeName','ingredients.id as ingredientId', 'ingredients.name as ingredientName','recipes_ingredients.quantity','recipes_ingredients.measurement')
    .where('users.id', userId)
    .distinct()
}
//==================================================================

//==================================================================
fetchRecipe = (userId, body, recipeid) => {
    return knex('recipes_ingredients') 
    .join('ingredients', 'ingredients.id', '=', 'recipes_ingredients.ingredients_id')
    .join('recipes', 'recipes.id', '=', 'recipes_ingredients.recipes_id')
    .join('users', 'users.id', '=', 'recipes.users_id' )
    .select('users.id as userId', 'users.name as userName', 'recipes.id as recipeId', 'recipes.name as recipeName','ingredients.id as ingredientId', 'ingredients.name as ingredientName','recipes_ingredients.quantity','recipes_ingredients.measurement')
    .where('recipes.users_id', userId)
    .where('recipes.id', recipeid)
    .distinct()
}
//==================================================================

//==================================================================
createRecipe = (userId, body) => {
    return knex('recipes')
        .insert({
            name: body.recipe_name,
            users_id: userId
        })
        .returning('id')
        .then(result => {
            let arrayOfObj = [];

            Object.values(body.ingredients).map(ele => {
                let newItem = {
                    quantity: ele[0],
                    recipes_id : `${result}`,
                    ingredients_id: ele[1],
                    measurement: ele[2]
                }                
                arrayOfObj.push(newItem);
            })
            return knex('recipes_ingredients')
                .insert(arrayOfObj)
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