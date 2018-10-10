//=====================================================

//RECIPES

//=====================================================
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'pizza', users_id: 1}
      ]);
    });
};
