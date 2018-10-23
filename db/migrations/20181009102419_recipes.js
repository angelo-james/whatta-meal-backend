//=====================================================

//RECIPES

//=====================================================
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('description');
        table.integer('users_id').references('users.id').onDelete('cascade').notNullable();
        // table.integer('recipes_ingredients_id').notNullable();
        // table.foreign('recipes_ingredients_id').references('recipes_ingredients.id');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
};
