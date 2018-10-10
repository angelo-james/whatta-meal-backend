const ingredientsQuery = require('../../queries/users.query')

const fetchUsers = () => {
    ingredients = ingredientsQuery.fetchUsers()

    return ingredients.then(result => {
        return result.length < 1
            ? { error: 'error retreiving users', status: 404 }
            : result
    })
}

const fetchUser = (id) => {
    ingredient = ingredientsQuery.fetchUser(id)

    return ingredient.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}

module.exports = {
    fetchUsers,
    fetchUser
}