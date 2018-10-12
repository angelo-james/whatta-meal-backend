const model = require('../models/users.model');
const parser = require('body-parser');
//==================================================================

//==================================================================
fetchUsers = (req, res, next) => {
    let promise = model.fetchUsers();

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}
//==================================================================

//==================================================================
fetchUser = (req, res, next) => {
    let {id} = req.params
    let promise = model.fetchUser(id);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}
//==================================================================

//==================================================================
const createUser = (req, res, next) => {
    let {body} = req
    console.log(body);
    let promise = model.createUser(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}
module.exports = {
    fetchUsers,
    fetchUser,
    createUser
}