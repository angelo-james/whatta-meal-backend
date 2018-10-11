const knex = require('./db')

fetchRecipes = () => {
    return knex.select().table('recipes');
}

fetchRecipe = (id) => {
    //how to set up route so that i can get one specific ingredient.
    return knex('recipes').select('recipes.id', 'recipes.name', 'recipes.users_id').where('id', id);
}

module.exports = {
    fetchRecipes,
    fetchRecipe
}