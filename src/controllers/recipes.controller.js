const model = require('../models/recipes.model');
//==================================================================

//==================================================================
fetchRecipes = (req, res, next) => {
    let {userId} = req.params;
    let {body} = req;
    let promise = model.fetchRecipes(userId, body);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}
//==================================================================

//==================================================================
fetchRecipe = (req, res, next) => {
    let {userId} = req.params;
    let {body} = req;
    let recipeid = req.params.id;

    let promise = model.fetchRecipe(userId, body, recipeid);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}
//==================================================================

//==================================================================
createRecipe = (req, res, next) => {
    let {userId} = req.params;
    let {body} = req
    // console.log(body);
    let promise = model.createRecipe(userId, body);

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