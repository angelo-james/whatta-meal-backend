const knex = require('./db')

fetchRecipes = () => {
    return knex.select().table('recipes');
}

fetchRecipe = (id) => {
    //how to set up route so that i can get one specific ingredient.
    return knex('recipes').select('recipes.id', 'recipes.name', 'recipes.users_id').where('id', id);
}

createRecipe = (ingredientInfo) => {
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