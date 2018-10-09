exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { quantity: '1 package (1/4 ounce) active',
          recipes_id: 1,
          ingredients_id: 1},
        { quantity: '1 teaspoon',
          recipes_id: 1,
          ingredients_id: 2},
        { quantity: '1-1/4 cups warm',
          recipes_id: 1,
          ingredients_id: 3},
        { quantity: '1/4 cup',
          recipes_id: 1,
          ingredients_id: 4},
        { quantity: '1 teaspoon',
          recipes_id: 1,
          ingredients_id: 5},
        { quantity: '3-1/2 cups',
          recipes_id: 1,
          ingredients_id: 6},
        { quantity: '1/2 pound',
          recipes_id: 1,
          ingredients_id: 7},
        { quantity: '1 small',
          recipes_id: 1,
          ingredients_id: 8},
        { quantity: '1 can (15 ounces)',
          recipes_id: 1,
          ingredients_id: 9},
        { quantity: '3 teaspoons',
          recipes_id: 1,
          ingredients_id: 10},
        { quantity: '1 teaspoon',
          recipes_id: 1,
          ingredients_id: 11},
        { quantity: '1 medium',
          recipes_id: 1,
          ingredients_id: 12},
        { quantity: '2 cups',
          recipes_id: 1,
          ingredients_id: 13}
      ]);
    });
};