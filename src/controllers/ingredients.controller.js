const model = require('../models/ingredients.model');

fetchIngredients = (req, res, next) => {
    let promise = model.fetchIngredients();

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })

    promise.catch(error => {
        next(error)
    })
}

fetchIngredient = (req, res, next) => {
    let {id} = req.params
    let promise = model.fetchIngredient(id);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })

    promise.catch(error => {
        next(error)
    })
}

const createIngredient = (req, res, next) => {
    let {body} = req
    
    
    let promise = model.createIngredient(`${body}`);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })

    promise.catch(error => {
        next(error)
    })
}

module.exports = {
    fetchIngredients,
    fetchIngredient,
    createIngredient
}