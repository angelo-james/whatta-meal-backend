const knex = require('./db')
//==================================================================
//gets all recipes for user
//==================================================================
fetchRecipes = (userId, body) => {
    return knex('recipes') 
    // .join('ingredients', 'ingredients.id', '=', 'recipes_ingredients.ingredients_id')
    // .join('recipes', 'recipes.id', '=', 'recipes_ingredients.recipes_id')
    // .join('users', 'users.id', '=', 'recipes.users_id' )
    // .select('users.id as userId', 'users.name as userName', 'recipes.id as recipeId', 'recipes.name as recipeName','ingredients.id as ingredientId', 'ingredients.name as ingredientName','recipes_ingredients.quantity','recipes_ingredients.measurement')
    .where('users.id', userId)
    .distinct()
}


//==================================================================
//gets specific recipe for user
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
//create a new recipe for user
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


//==================================================================
//deletes specific recipe for user
//==================================================================
deleteRecipe = (id) => {
    return knex('recipes')
    .where(`id`, id)
    .del()
    .returning('*')
    .then(result => {
        return {data: result, message: `You've successfully deleted your ${result[0].name} recipe`}
    })
    .catch(err => {
        return err.message
    })
}


//==================================================================
// updates specific recipe for user
//==================================================================
const updateRecipe = (id, body) => {
    return knex('recipes')
        .where('id', id)
        .update(body, '*')
}

module.exports = {
    fetchRecipes,
    fetchRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
}