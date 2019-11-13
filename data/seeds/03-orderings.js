
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orderings').del()
    .then(function () {
      // Inserts seed entries
      return knex('orderings').insert([
        {list_id: 1, todo_id: 1, order: 0},
        {list_id: 1, todo_id: 2, order: 1},
        {list_id: 1, todo_id: 3, order: 2},
        {list_id: 1, todo_id: 4, order: 3},
        {list_id: 2, todo_id: 5, order: 0},
        {list_id: 2, todo_id: 6, order: 1},
        {list_id: 3, todo_id: 7, order: 0},
        {list_id: 3, todo_id: 8, order: 1},
        {list_id: 3, todo_id: 9, order: 2},
        {list_id: 3, todo_id: 10, order: 3},
        {list_id: 3, todo_id: 11, order: 4},
        {list_id: 3, todo_id: 12, order: 5}
      ]);
    });
};
