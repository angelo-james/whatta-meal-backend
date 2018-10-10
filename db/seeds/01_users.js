//=====================================================

//USERS

//=====================================================
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'aj', email: 'aj@gmail.com', password: 'ajspassword'},
        {name: 'john doe', email: 'johndoe@gmail.com', password: 'johnpassword'},
        {name: 'jane doe', email: 'janedoe@gmail.com', password: 'janepassword'}
      ]);
    });
};
