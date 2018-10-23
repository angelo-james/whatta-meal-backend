//=====================================================

//RECIPES_INGREDIENTS

//=====================================================
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients', (table) => {
        table.increments();
        table.string('quantity');
        table.integer('recipes_id').references('recipes.id').onDelete('cascade').notNullable();
        table.integer('ingredients_id').references('ingredients.id').onDelete('cascade').notNullable();
        table.string('measurement');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes_ingredients');
};