const ingredientsQuery = require('../../queries/ingredients.query')

const fetchIngredients = () => {
    ingredients = ingredientsQuery.fetchIngredients()

    return ingredients.then(result => {
        return result.length < 1
            ? { error: 'error retreiving users', status: 404 }
            : result
    })
}

const fetchIngredient = (id) => {
    ingredient = ingredientsQuery.fetchIngredient(id)

    return ingredient.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}

module.exports = {
    fetchIngredients,
    fetchIngredient
}