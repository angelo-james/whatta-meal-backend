//=====================================================

//USERS

//=====================================================
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'aj', email: 'aj@gmail.com', password: '123'},
        {name: 'john doe', email: 'johndoe@gmail.com', password: '456'},
        {name: 'jane doe', email: 'janedoe@gmail.com', password: '789'}
      ]);
    });
};
