const knex = require('./db')

fetchUsers = () => {
    return knex.select().table('users');
}

fetchUser = (id) => {
    //how to set up route so that i can get one specific ingredient.
    return knex('users').select('users.id', 'users.email', 'users.password').where('id', id);
}

module.exports = {
    fetchUsers,
    fetchUser
}