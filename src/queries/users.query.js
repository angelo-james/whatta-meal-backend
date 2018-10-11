const knex = require('./db')

fetchUsers = () => {
    return knex.select().table('users');
}

fetchUser = (id) => {
    return knex('users').select('users.id', 'users.email', 'users.password').where('id', id);
}

createUser = (userInfo) => {
    return knex('users')
        .insert({
            name: userInfo.name, 
            email: userInfo.email, 
            password: userInfo.password
        })
        .then(result => {
            return `'${userInfo.name}' was successfully created!`
        })
        .catch(err => {
            return err.message
        })
}

module.exports = {
    fetchUsers,
    fetchUser,
    createUser
}