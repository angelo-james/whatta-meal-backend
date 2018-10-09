//=====================================================

//INGREDIENTS

//=====================================================
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', (table) => {
        table.increments();
        table.string('name').notNullable();
        // table.foreign('recipes_id').references('recipes.id');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ingredients');
};