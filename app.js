const express = require("express");
const app = express();
const port = 3000;
const ingredientRoutes = require('./src/routes/ingredients.routes');
const usersRoutes = require('./src/routes/users.routes');

app.use('/ingredients', ingredientRoutes)
app.use('users', usersRoutes)

app.listen(port, () => {
    console.log(`You're listening to port ${port}...`);
})