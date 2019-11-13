
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('lists').insert([
        {id: 1, title: 'Work'},
        {id: 2, title: 'Side Projects'},
        {id: 3, title: 'Personal'}
      ]);
    });
};
