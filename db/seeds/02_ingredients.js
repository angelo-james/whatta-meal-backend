//=====================================================

//INGREDIENTS

//=====================================================
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'dry yeast'},
        {name: 'sugar'},
        {name: 'water'},
        {name: 'canola oil'},
        {name: 'salt'},
        {name: 'all-purpose flour'},
        {name: 'ground beef'},
        {name: 'chopped onion'},
        {name: 'tomato sauce'},
        {name: 'dried oregano'},
        {name: 'dried basil'},
        {name: 'diced green pepper'},
        {name: 'shredded mozzarella cheese'},
        {name: 'dry spaghetti'},
        {name: 'minced garlic'},
        {name: 'pasta sauce'}
      ]);
    });
};
