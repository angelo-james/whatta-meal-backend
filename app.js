const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require("cors");

//==================================================================

//==================================================================
const ingredientRoutes = require('./src/routes/ingredients.routes');
const usersRoutes = require('./src/routes/users.routes');
const recipesRoutes = require('./src/routes/recipes.routes');
//==================================================================

//==================================================================
app.use(bodyParser.json());
app.use('/users', ingredientRoutes)
app.use('/users', usersRoutes)
app.use('/users', recipesRoutes)
//==================================================================

//==================================================================
app.all('*', (req, res, next) => res.sendStatus(404))
//==================================================================

//==================================================================
app.use((err, req, res, next) => {
    res.status(err.status).json(err)
  })
//==================================================================

//==================================================================
app.listen(port, () => {
    console.log(`You're listening to port ${port}...`);
})