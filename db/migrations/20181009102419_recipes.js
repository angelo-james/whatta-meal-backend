//=====================================================

//RECIPES

//=====================================================
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.integer('users_id').notNullable();
        table.foreign('users_id').references('users.id');
        // table.integer('recipes_ingredients_id').notNullable();
        // table.foreign('recipes_ingredients_id').references('recipes_ingredients.id');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
};
