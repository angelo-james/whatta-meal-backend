const model = require('../models/recipes.model');

fetchRecipes = (req, res, next) => {
    let promise = model.fetchRecipes();

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })

    promise.catch(error => {
        next(error)
    })
}

fetchRecipe = (req, res, next) => {
    let {id} = req.params
    let promise = model.fetchRecipe(id);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })

    promise.catch(error => {
        next(error)
    })
}

createRecipe = (req, res, next) => {
    let {body} = req
    let promise = model.createRecipe(body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })

    promise.catch(error => {
        next(error)
    })
}

module.exports = {
    fetchRecipes,
    fetchRecipe,
    createRecipe
}