
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, text: 'finish report'},
        {id: 2, text: 'send email to boss'},
        {id: 3, text: 'write up draft of article'},
        {id: 4, text: 'fix bug'},
        {id: 5, text: 'research bike frames'},
        {id: 6, text: 'read up more on Zettelkasten'},
        {id: 7, text: 'organise room'},
        {id: 8, text: 'take do out for a poo'},
        {id: 9, text: 'do pushups'},
        {id: 10, text: 'cook dinner'},
        {id: 11, text: 'call friend'},
        {id: 12, text: 'think about xmas prezzies for fam'}
      ]);
    });
};
