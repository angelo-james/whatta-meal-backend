const model = require('../models/recipes.model');
//==================================================================
//gets all recipes for user
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
//gets specific recipe for user
//==================================================================
fetchRecipe = (req, res, next) => {
    let {userId, recipeId} = req.params;
    console.log({userId, recipeId})
    let {body} = req;
    let recipeid = req.params.id;

    let promise = model.fetchRecipe(userId, recipeId);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}


//==================================================================
//create a new recipe for user
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


//==================================================================
//deletes specific recipe for user
//==================================================================
deleteRecipe = (req, res, next) => {
    let {id} = req.params;

    let promise = model.deleteRecipe(id);

    promise.then(result => {
        return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}


//==================================================================
// updates specific recipe for user
//==================================================================
const updateRecipe = (req, res, next) => {
    let {id} = req.params;
    let {body} = req
    
    let promise = model.updateRecipe(id, body);

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
    createRecipe,
    deleteRecipe,
    updateRecipe
}