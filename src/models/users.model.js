const usersQuery = require('../queries/users.query')

const fetchUsers = () => {
    users = usersQuery.fetchUsers()

    return users.then(result => {
        return result.length < 1
            ? { error: 'error retreiving users', status: 404 }
            : result
    })
}

const fetchUser = (id) => {
    user = usersQuery.fetchUser(id)

    return user.then(result => {
        return result.length < 1
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}

const createUser = (userInfo) => {
    user = usersQuery.createUser(userInfo)

    return user.then(result => {
        return !result
        ? { error: 'error retreiving users', status: 404 }
        : result
    })
}

module.exports = {
    fetchUsers,
    fetchUser,
    createUser
}