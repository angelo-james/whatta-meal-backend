//=====================================================

//RECIPES

//=====================================================
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'pizza', description: 'Home made pizza easy to make for the whole family to enjoy.', users_id: 1},
        {name: 'spaghetti', description: 'Want a nice dine in experience in your own home. Wow your partner with this recipe.', users_id: 2}
      ]);
    });
};
