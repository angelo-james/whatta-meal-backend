//=====================================================

//USERS

//=====================================================
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'aj@gmail.com', password: 'ajspassword'},
        {email: 'johndoe@gmail.com', password: 'johnpassword'},
        {email: 'janedoe@gmail.com', password: 'janepassword'}
      ]);
    });
};
