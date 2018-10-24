//=====================================================

//INGREDIENTS

//=====================================================
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        //1
        {name: 'dry yeast'},
        //2
        {name: 'sugar'},
        //3
        {name: 'water'},
        //4
        {name: 'canola oil'},
        //5
        {name: 'salt'},
        //6
        {name: 'all-purpose flour'},
        //7
        {name: 'ground beef'},
        //8
        {name: 'chopped onion'},
        //9
        {name: 'tomato sauce'},
        //10
        {name: 'dried oregano'},
        //11
        {name: 'dried basil'},
        //12
        {name: 'diced green pepper'},
        //13
        {name: 'shredded mozzarella cheese'},
        //14
        {name: 'dry spaghetti'},
        //15
        {name: 'minced garlic'},
        //16
        {name: 'pasta sauce'},
        //17
        {name: 'milk'},
        //18
        {name: 'lettuce'},
        //19
        {name: 'tomato'},
        //20
        {name: 'cheese'},
        //21
        {name: 'cereal of your choice'}
      ]);
    });
};
