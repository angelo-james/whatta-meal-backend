const knex = require('./db')

fetchIngredients = () => {
    return knex.select().table('ingredients');
}

fetchIngredient = (id) => {
    //how to set up route so that i can get one specific ingredient.
    return knex('ingredients').select('ingredients.id','ingredients.name').where('id', id);
}

createIngredient = (ingredientInfo) => {
    return knex('ingredients')
    .insert({
        name: ingredientInfo.name
    })
    .then(result => {
        return `'${ingredientInfo.name}' was successfully created!`
    })
    .catch(err => {
        return err.message
    })
}

module.exports = {
    fetchIngredients,
    fetchIngredient,
    createIngredient
}