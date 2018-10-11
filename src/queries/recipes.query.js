const knex = require('./db')

fetchRecipes = (userId, body) => {
    return knex('recipes').select('*').where('users_id', userId);
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