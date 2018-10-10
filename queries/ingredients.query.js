const knex = require('./db')

fetchIngredients = () => {
    return knex.select().table('ingredients');
}

fetchIngredient = (id) => {
    //how to set up route so that i can get one specific ingredient.
    return knex('ingredients').select('ingredients.id','ingredients.name').where('id', id);
}

module.exports = {
    fetchIngredients,
    fetchIngredient
}