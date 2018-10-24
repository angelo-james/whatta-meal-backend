const knex = require('./db')
//==================================================================

//==================================================================
fetchUsers = () => {
    return knex.select().table('users');
}
//==================================================================

//==================================================================
fetchUser = (id) => {
    return knex('users').select('users.id', 'users.email', 'users.password').where('id', id);
}
//==================================================================

//==================================================================
createUser = (userInfo) => {
    return knex('users')
        .insert({
            name: userInfo.name, 
            email: userInfo.email, 
            password: userInfo.password
        })
        .returning('*')
        .then(result => {
            return {
                data: result,
                message: `'${userInfo.name}' was successfully created!`}
        })
        .catch(err => {
            return err.message
        })
}
validateUser = (userInfo) => {
    return knex('users')
        .select(['users.id', 'users.name'])
        .where('users.email', userInfo.email)
        .where('users.password', userInfo.password)
}
module.exports = {
    fetchUsers,
    fetchUser,
    createUser,
    validateUser
}