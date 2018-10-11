//=====================================================

//RECIPES_INGREDIENTS

//=====================================================
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients', (table) => {
        table.increments();
        table.string('quantity');
        table.integer('recipes_id').notNullable();
        table.foreign('recipes_id').references('recipes.id');
        table.integer('ingredients_id').notNullable();
        table.foreign('ingredients_id').references('ingredients.id');
        table.string('measurement');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes_ingredients');
};